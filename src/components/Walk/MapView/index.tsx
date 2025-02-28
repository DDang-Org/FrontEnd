import {
  Camera,
  NaverMapMarkerOverlay,
  NaverMapView,
  NaverMapViewRef,
  NaverMapCircleOverlay,
  NaverMapPathOverlay,
} from '@mj-studio/react-native-naver-map';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, Linking, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS, requestLocationAccuracy, requestMultiple } from 'react-native-permissions';
import { formatDuration, formatDistance } from '~screens/Home/WalkScreen';
import * as S from './styles';
import { useMyDogInfo } from '~apis/dog/useMyDogInfo';
import { DogListModal } from '~components/Common/ListModal';
import axios from 'axios';

import ViewShot, { captureRef } from 'react-native-view-shot';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import WalkSummaryModal from '../WalkSummary';
import { startWalk } from '~apis/walk/startWalk';
import { completeWalk } from '~apis/walk/completeWalk';
import { useWebSocket } from '~hooks/useWebSocket';
import React from 'react';
import { getAvatar } from '~utils/getAvatar';
import { useUser } from '~apis/member/useUser';

const WALKING_INTERVAL = 5000;
const MIN_ACCURACY = 30;
const MIN_MARKER_DISTANCE = 20;
const ROUTE_API_URL = 'https://ruehan-home.com:8004/ors/v2/directions/foot-walking/geojson';

const calculateDirectDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371e3;
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

const MapView = () => {
  const myDogInfo = useMyDogInfo();
  const { sendMessage, responseData, connectionStatus } = useWebSocket();
  const avatars = getAvatar();
  const user = useUser();
  const AvatarComponent = avatars[user.memberProfileImg];

  console.log('[Walk] 유저 정보:', user);

  useEffect(() => {
    if (responseData) {
      console.log('[Walk] WebSocket 응답 데이터 수신:', responseData);
    }
  }, [responseData]);

  console.log('[Walk] WebSocket 연결 상태:', connectionStatus);

  const mapRef = useRef<NaverMapViewRef>(null);
  const [isWalking, setIsWalking] = useState(false);
  const [walkTime, setWalkTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [camera, _setCamera] = useState<Camera>({
    latitude: 37.50497126,
    longitude: 127.04905021,
    zoom: 18,
  });

  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 37.50497126,
    longitude: 127.04905021,
  });
  const previousLocationRef = useRef<{ latitude: number; longitude: number } | null>(null);
  const [locationMarkers, setLocationMarkers] = useState<
    {
      latitude: number;
      longitude: number;
      index: number;
    }[]
  >([]);
  const lastUpdateTimeRef = useRef<number>(Date.now());

  const [isLocationCentered, setIsLocationCentered] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [routeCoordinates, setRouteCoordinates] = useState<number[][]>([]);
  const viewShotRef = useRef<ViewShot>(null);
  const [screenshotUri, setScreenshotUri] = useState('');
  const [isWalkSummaryVisible, setIsWalkSummaryVisible] = useState(false);
  const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isWalking) {
      interval = setInterval(() => {
        setWalkTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isWalking]);
  const filterPosition = (position: { coords: { accuracy: number; latitude: number; longitude: number } }): boolean => {
    const isAccurate = position.coords.accuracy <= MIN_ACCURACY;
    if (!isAccurate) {
      console.log('[Walk] 위치 정확도 낮음, 무시됨:', position.coords.accuracy);
    }
    return isAccurate;
  };
  const shouldAddMarker = useCallback(
    (newPosition: { latitude: number; longitude: number }): boolean => {
      if (locationMarkers.length === 0) {
        console.log('[Walk] 첫 마커 추가');
        return true;
      }

      const lastMarker = locationMarkers[locationMarkers.length - 1];
      const calDistance = calculateDirectDistance(
        lastMarker.latitude,
        lastMarker.longitude,
        newPosition.latitude,
        newPosition.longitude,
      );

      const shouldAdd = calDistance >= MIN_MARKER_DISTANCE;
      console.log('[Walk] 마커 추가 여부:', shouldAdd, '거리:', calDistance.toFixed(2) + 'm');
      return shouldAdd;
    },
    [locationMarkers],
  );
  const requestLocationPermission = useCallback(async () => {
    try {
      if (Platform.OS === 'ios') {
        const status = await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
        console.log('[Walk] iOS 위치 권한 상태:', status);

        if (status === 'granted') {
          try {
            await requestLocationAccuracy({ purposeKey: 'common-purpose' });
            setLocationPermissionGranted(true);
          } catch (e) {
            console.error('[Walk] iOS 위치 정확도 요청 실패:', e);
            Alert.alert('위치 정확도 설정 필요', '정확한 위치 정보가 필요합니다. 설정에서 권한을 변경해주세요.', [
              { text: '취소', style: 'cancel' },
              {
                text: '설정으로 이동',
                onPress: () => {
                  Linking.openURL('app-settings:');
                },
              },
            ]);
          }
        } else if (status === 'denied' || status === 'blocked') {
          Alert.alert(
            '위치 권한이 필요합니다',
            '산책 기능을 사용하려면 위치 권한이 필요합니다. 설정에서 위치 권한을 허용해주세요.',
            [
              { text: '취소', style: 'cancel' },
              {
                text: '설정으로 이동',
                onPress: () => {
                  Linking.openURL('app-settings:');
                },
              },
            ],
          );
        } else {
          Alert.alert('위치 권한 필요', '산책 기능을 사용하려면 항상 또는 앱 사용 중 위치 권한이 필요합니다.');
        }
      } else {
        const statuses = await requestMultiple([
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
        ]);
        console.log('[Walk] Android 위치 권한 상태:', statuses);

        if (statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] === 'granted') {
          setLocationPermissionGranted(true);
        } else if (
          statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] === 'denied' ||
          statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] === 'blocked'
        ) {
          Alert.alert(
            '위치 권한이 필요합니다',
            '산책 기능을 사용하려면 위치 권한이 필요합니다. 설정에서 위치 권한을 허용해주세요.',
            [
              { text: '취소', style: 'cancel' },
              {
                text: '설정으로 이동',
                onPress: () => {
                  Linking.openSettings();
                },
              },
            ],
          );
        } else {
          Alert.alert('위치 권한 필요', '산책 기능을 사용하려면 위치 권한이 필요합니다.');
        }
      }
    } catch (e) {
      console.error('[Walk] 위치 권한 요청 실패:', e);
      Alert.alert('오류', '위치 권한을 요청하는 중 오류가 발생했습니다.');
    }
  }, []);

  useEffect(() => {
    const initializeLocation = async () => {
      await requestLocationPermission();

      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          console.log('[Walk] 초기 위치 가져오기 성공:', { latitude, longitude });

          setCurrentLocation({ latitude, longitude });

          mapRef.current?.animateCameraTo({
            latitude,
            longitude,
            zoom: 18,
            duration: 500,
            easing: 'Fly',
          });
        },
        error => {
          console.error('[Walk] 초기 위치 가져오기 실패:', error);
          Alert.alert('위치 오류', '현재 위치를 가져올 수 없습니다. 위치 서비스가 활성화되어 있는지 확인해주세요.');
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
        },
      );
    };

    initializeLocation();
  }, [requestLocationPermission]);

  useEffect(() => {
    if (!locationPermissionGranted) {
      console.log('[Walk] 위치 권한 없음, 추적 중단');
      return;
    }

    console.log('[Walk] 위치 추적 시작 (권한 있음)');

    const watchId = Geolocation.watchPosition(
      position => {
        const currentTime = Date.now();
        const timeSinceLastUpdate = currentTime - lastUpdateTimeRef.current;

        console.log('[Walk] 위치 데이터 수신:', {
          accuracy: position.coords.accuracy,
          lastUpdate: timeSinceLastUpdate,
          isWalking: isWalking,
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });

        if (timeSinceLastUpdate < WALKING_INTERVAL) {
          return;
        }

        if (!filterPosition(position)) {
          console.log('[Walk] 정확도 불충분, 무시:', position.coords.accuracy);
          return;
        }

        const { latitude, longitude } = position.coords;
        const newPosition = { latitude, longitude };

        previousLocationRef.current = currentLocation;
        setCurrentLocation(newPosition);
        lastUpdateTimeRef.current = currentTime;

        console.log('[Walk] 위치 업데이트 완료:', { latitude, longitude });

        if (isWalking) {
          console.log('[Walk] 산책 중 위치 업데이트 처리');

          if (shouldAddMarker(newPosition)) {
            console.log('[Walk] 새 마커 추가:', newPosition);
            setLocationMarkers(prev => [
              ...prev,
              {
                latitude,
                longitude,
                index: prev.length + 1,
              },
            ]);
          }

          if (isLocationCentered) {
            console.log('[Walk] 카메라 위치 이동');
            mapRef.current?.animateCameraTo({
              latitude,
              longitude,
              zoom: 18,
              duration: 500,
              easing: 'Fly',
            });
          }
        }
      },
      error => {
        console.error('[Walk] 위치 추적 오류:', error);
        Alert.alert('위치 추적 오류', '위치를 추적하는 중 오류가 발생했습니다.');
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 1000,
        timeout: 10000, // 타임아웃을 10초로 늘림
      },
    );

    return () => {
      console.log('[Walk] 위치 추적 중지');
      Geolocation.clearWatch(watchId);
    };
  }, [locationPermissionGranted, isWalking, isLocationCentered, shouldAddMarker]);

  const handleLocationButtonPress = useCallback(() => {
    console.log('[Walk] 내 위치로 이동');
    mapRef.current?.animateCameraTo({
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      zoom: 18,
      duration: 500,
      easing: 'Fly',
    });
    setIsLocationCentered(true);
  }, [currentLocation]);

  const handleStartWalkPress = useCallback(() => {
    console.log('[Walk] 산책 시작 버튼 클릭');

    if (!locationPermissionGranted) {
      console.log('[Walk] 위치 권한 없음, 권한 요청 시도');
      Alert.alert('위치 권한 필요', '산책 기능을 사용하려면 위치 권한이 필요합니다. 권한을 허용하시겠습니까?', [
        { text: '취소', style: 'cancel' },
        {
          text: '권한 요청',
          onPress: async () => {
            await requestLocationPermission();
            if (locationPermissionGranted) {
              setIsModalVisible(true);
            }
          },
        },
      ]);
      return;
    }

    setIsModalVisible(true);
  }, [locationPermissionGranted, requestLocationPermission]);

  const handleStopWalkPress = useCallback(async () => {
    console.log('[Walk] 산책 종료 버튼 클릭');
    setIsWalking(false);

    try {
      console.log('[Walk] 스크린샷 촬영 시작');
      const uri = await captureRef(viewShotRef, {
        format: 'png',
        quality: 0.8,
      });

      const savedUri = await CameraRoll.save(uri, { type: 'photo' });
      console.log('[Walk] 스크린샷 저장 성공:', savedUri);

      console.log('[Walk] 산책 데이터 준비:', {
        시간: walkTime,
        거리: distance,
        이미지URI: uri.substring(0, 50) + '...',
      });

      const response = await completeWalk({
        request: {
          totalDistanceMeter: distance,
          totalWalkTimeSecond: walkTime,
        },
        walkImgFile: uri,
      });

      console.log('[Walk] 산책 완료 API 성공:', response);

      setScreenshotUri(savedUri);
      setIsWalkSummaryVisible(true);
    } catch (error) {
      console.error('[Walk] 산책 종료 처리 실패:', error);
      if (error instanceof Error) {
        console.error('[Walk] 오류 메시지:', error.message);
        console.error('[Walk] 오류 스택:', error.stack);
      }
      Alert.alert('오류', '산책 종료 처리 중 오류가 발생했습니다.');
    }
  }, [walkTime, distance]);

  const handleWalkSummaryClose = useCallback(() => {
    console.log('[Walk] 산책 요약 닫기');
    setWalkTime(0);
    setDistance(0);
    setLocationMarkers([]);
    setRouteCoordinates([]);
    setIsWalkSummaryVisible(false);
  }, []);

  const handleSelectDog = useCallback(
    async (dogs: any) => {
      console.log('[Walk] 선택된 강아지:', dogs);
      setIsModalVisible(false);

      try {
        const dogIds = dogs.map((d: any) => d.dogId);
        console.log('[Walk] 산책 시작 강아지 IDs:', dogIds);

        const response = await startWalk({ dogIds });
        console.log('[Walk] 산책 시작 API 성공:', response);

        if (
          !currentLocation ||
          (currentLocation.latitude === 37.50497126 && currentLocation.longitude === 127.04905021)
        ) {
          console.log('[Walk] 현재 위치 업데이트 필요, 위치 가져오기 시도');

          Geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              console.log('[Walk] 산책 시작 전 위치 업데이트 성공:', { latitude, longitude });

              setCurrentLocation({ latitude, longitude });

              mapRef.current?.animateCameraTo({
                latitude,
                longitude,
                zoom: 18,
                duration: 500,
                easing: 'Fly',
              });

              setLocationMarkers([
                {
                  latitude,
                  longitude,
                  index: 0,
                },
              ]);

              setIsWalking(true);
              setIsLocationCentered(true);
              setDistance(0);
              lastProcessedMarkerIndexRef.current = -1;
            },
            error => {
              console.error('[Walk] 산책 시작 위치 가져오기 실패:', error);
              Alert.alert(
                '위치 오류',
                '현재 위치를 가져올 수 없습니다. 위치 서비스가 활성화되어 있는지 확인 후 다시 시도해주세요.',
              );
            },
            {
              enableHighAccuracy: true,
              timeout: 10000,
            },
          );
        } else {
          console.log('[Walk] 현재 위치로 산책 시작:', currentLocation);

          mapRef.current?.animateCameraTo({
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            zoom: 18,
            duration: 500,
            easing: 'Fly',
          });

          setLocationMarkers([
            {
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              index: 0,
            },
          ]);

          setIsWalking(true);
          setIsLocationCentered(true);
          setDistance(0);
          lastProcessedMarkerIndexRef.current = -1;
        }
      } catch (error) {
        console.error('[Walk] 산책 시작 실패:', error);
        Alert.alert('오류', '산책을 시작하는 중 오류가 발생했습니다.');
      }
    },
    [currentLocation],
  );

  const renderWalkButton = useCallback(() => {
    if (!isWalking) {
      return <S.StartButton onPress={handleStartWalkPress} bgColor="default" text="산책 시작" />;
    }

    return (
      <S.WalkingInfoContainer>
        <S.WalkingInfo>
          <S.InfoText fontSize={15}>{formatDuration(walkTime)}</S.InfoText>
          <S.StopButton onPress={handleStopWalkPress} bgColor="lighten_2" text="산책 끝" />
          <S.InfoText fontSize={15}>{formatDistance(distance)}</S.InfoText>
        </S.WalkingInfo>
      </S.WalkingInfoContainer>
    );
  }, [isWalking, walkTime, distance, handleStartWalkPress, handleStopWalkPress]);

  const handleCameraChange = useCallback(
    (event: any) => {
      const { latitude, longitude } = event;

      const calDistance = calculateDirectDistance(
        latitude,
        longitude,
        currentLocation.latitude,
        currentLocation.longitude,
      );

      const centered = calDistance < 20;
      if (isLocationCentered !== centered) {
        setIsLocationCentered(centered);
        console.log('[Walk] 지도 중심 상태 변경:', centered);
      }
    },
    [currentLocation, isLocationCentered],
  );

  const fetchRouteData = useCallback(
    async (markers: { longitude: number; latitude: number }[]) => {
      if (markers.length < 2) {
        console.log('[Walk] 경로 계산 건너뜀: 마커가 부족함');
        return;
      }

      const lastTwoMarkers = markers.slice(-2);
      const lastTwoCoordinates = lastTwoMarkers.map(marker => [marker.longitude, marker.latitude]);

      console.log('[Walk] 경로 계산 요청:', lastTwoCoordinates);

      try {
        const response = await axios.post(
          ROUTE_API_URL,
          {
            coordinates: lastTwoCoordinates,
          },
          {
            timeout: 10000,
          },
        );

        const routeData = response.data;

        if (
          !routeData?.features?.[0]?.geometry?.coordinates ||
          !routeData?.features?.[0]?.properties?.segments?.[0]?.distance
        ) {
          console.error('[Walk] 경로 데이터 형식 오류:', routeData);
          return;
        }

        const newRouteCoordinates = routeData.features[0].geometry.coordinates;
        const segmentDistance = routeData.features[0].properties.segments[0].distance;

        console.log('[Walk] 경로 계산 성공:', {
          좌표수: newRouteCoordinates.length,
          구간거리: segmentDistance,
          현재총거리: distance,
        });

        setRouteCoordinates(prev => {
          if (
            prev.length > 0 &&
            prev[prev.length - 1][0] === newRouteCoordinates[0][0] &&
            prev[prev.length - 1][1] === newRouteCoordinates[0][1]
          ) {
            return [...prev, ...newRouteCoordinates.slice(1)];
          }
          return [...prev, ...newRouteCoordinates];
        });

        if (lastProcessedMarkerIndexRef.current === 2) {
          console.log('[Walk] 첫 구간 거리 설정:', segmentDistance);
          setDistance(segmentDistance);
        } else if (segmentDistance < 1000) {
          console.log('[Walk] 거리 추가:', distance, '+', segmentDistance, '=', distance + segmentDistance);
          setDistance(prevDistance => prevDistance + segmentDistance);
        } else {
          console.warn('[Walk] 비정상적으로 큰 구간 거리 무시:', segmentDistance);
        }

        if (connectionStatus === 'connected' && newRouteCoordinates.length > 0) {
          const currentTotalDistance =
            lastProcessedMarkerIndexRef.current === 2
              ? segmentDistance
              : segmentDistance < 1000
              ? distance + segmentDistance
              : distance;

          const lastCoordinate = newRouteCoordinates[newRouteCoordinates.length - 1];

          const message = JSON.stringify({
            latitude: lastCoordinate[1],
            longitude: lastCoordinate[0],
          });

          console.log('[Walk] WebSocket publish 시도 - /pub/api/v1/walk-alone');
          const sent = sendMessage('/pub/api/v1/walk-alone', message);
          console.log('[Walk] WebSocket 메시지 전송 결과:', sent);

          if (sent) {
            console.log('[Walk] 메시지 내용:', JSON.parse(message));
          } else {
            console.error('[Walk] WebSocket 메시지 전송 실패');
          }
        } else {
          console.log('[Walk] WebSocket 메시지 전송 건너뜀:', {
            연결상태: connectionStatus,
            좌표수: newRouteCoordinates ? newRouteCoordinates.length : 0,
          });
        }
      } catch (error) {
        console.error('[Walk] 경로 데이터 가져오기 실패:', error);
        if (axios.isAxiosError(error)) {
          console.error('[Walk] 오류 세부 정보:', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data,
          });
        }
      }
    },
    [connectionStatus, sendMessage, distance, walkTime],
  );

  const drawRoutePolygon = useCallback(() => {
    if (isWalking && routeCoordinates.length >= 2) {
      console.log('[Walk] 경로 폴리곤 그리기:', routeCoordinates.length, '개 좌표');
      return (
        <NaverMapPathOverlay
          width={5}
          color={'#ECB99A'}
          coords={routeCoordinates.map(([longitude, latitude]) => ({ latitude, longitude }))}
        />
      );
    }
    return null;
  }, [isWalking, routeCoordinates]);

  const lastProcessedMarkerIndexRef = useRef<number>(-1);

  useEffect(() => {
    if (isWalking && locationMarkers.length >= 2) {
      if (locationMarkers.length > lastProcessedMarkerIndexRef.current) {
        console.log(`[Walk] 새 마커 처리: ${lastProcessedMarkerIndexRef.current + 1} -> ${locationMarkers.length}`);
        fetchRouteData(locationMarkers);
        lastProcessedMarkerIndexRef.current = locationMarkers.length;
      }
    }
  }, [locationMarkers, isWalking, fetchRouteData]);

  return (
    <>
      <ViewShot ref={viewShotRef} style={{ width: '100%', height: '100%' }}>
        <NaverMapView
          ref={mapRef}
          style={{ width: '100%', height: '100%' }}
          isShowLocationButton={false}
          isShowZoomControls={false}
          isShowCompass={false}
          camera={camera}
          onCameraChanged={handleCameraChange}
        >
          <NaverMapMarkerOverlay
            latitude={currentLocation.latitude}
            longitude={currentLocation.longitude}
            anchor={{ x: 0.5, y: 1 }}
            width={40}
            height={40}
          >
            {AvatarComponent && <AvatarComponent />}
          </NaverMapMarkerOverlay>
          {locationMarkers.map((marker, index) => (
            <NaverMapCircleOverlay
              key={index}
              latitude={marker.latitude}
              longitude={marker.longitude}
              radius={1}
              color={'rgba(66, 135, 245, 0.3)'}
              outlineColor={'#4287f5'}
              outlineWidth={2}
              zIndex={2000 + index}
            />
          ))}
          {drawRoutePolygon()}
        </NaverMapView>
      </ViewShot>

      {!isLocationCentered && (
        <S.LocationButton onPress={handleLocationButtonPress} text="⊕ 내 위치로" bgColor="font_1" />
      )}

      {renderWalkButton()}

      {isModalVisible && (
        <DogListModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          dogs={myDogInfo.data}
          onSelectMultipleDogs={handleSelectDog}
          type="multi-select"
        />
      )}

      <WalkSummaryModal
        visible={isWalkSummaryVisible}
        walkTime={walkTime}
        distance={distance}
        screenshotUri={screenshotUri}
        onClose={handleWalkSummaryClose}
      />
    </>
  );
};

export default MapView;
