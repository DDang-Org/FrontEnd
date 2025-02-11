import {
  Camera,
  NaverMapMarkerOverlay,
  NaverMapView,
  NaverMapViewRef,
  NaverMapCircleOverlay,
  NaverMapPolygonOverlay,
} from '@mj-studio/react-native-naver-map';
import { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS, requestLocationAccuracy, requestMultiple } from 'react-native-permissions';
import { formatDuration, formatDistance } from '~screens/Home/WalkScreen';
import * as S from './styles';
import { useMyDogInfo } from '~apis/dog/useMyDogInfo';
import { DogListModal } from '~components/Common/ListModal';
import axios from 'axios';

const WALKING_INTERVAL = 5000;
// const NORMAL_INTERVAL = 10000;
const MIN_ACCURACY = 30;
const MIN_MARKER_DISTANCE = 5;

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

  const mapRef = useRef<NaverMapViewRef>(null);
  const [isWalking, setIsWalking] = useState(false);
  const [walkTime, setWalkTime] = useState(0);
  const [distance, setDistance] = useState(0);

  const [camera, _setCamera] = useState<Camera>({
    latitude: 37.50497126,
    longitude: 127.04905021,
    zoom: 18,
  });

  const [_previousLocation, setPreviousLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 37.50497126,
    longitude: 127.04905021,
  });

  const [locationMarkers, setLocationMarkers] = useState<
    {
      latitude: number;
      longitude: number;
      index: number;
    }[]
  >([]);

  const [lastUpdateTime, setLastUpdateTime] = useState<number>(Date.now());

  const [isLocationCentered, setIsLocationCentered] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [routeCoordinates, setRouteCoordinates] = useState<number[][]>([]);

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
    return position.coords.accuracy <= MIN_ACCURACY;
  };

  const shouldAddMarker = (newPosition: { latitude: number; longitude: number }): boolean => {
    if (locationMarkers.length === 0) {
      return true;
    }

    const lastMarker = locationMarkers[locationMarkers.length - 1];
    const calDistance = calculateDirectDistance(
      lastMarker.latitude,
      lastMarker.longitude,
      newPosition.latitude,
      newPosition.longitude,
    );

    return calDistance >= MIN_MARKER_DISTANCE;
  };

  useEffect(() => {
    console.log('위치 추적 시작:', { isWalking });

    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        const status = await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
        if (status === 'granted') {
          try {
            await requestLocationAccuracy({ purposeKey: 'common-purpose' });
          } catch (e) {
            console.error('iOS 위치 정확도 요청 실패:', e);
          }
        }
      } else {
        try {
          await requestMultiple([
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
          ]);
        } catch (e) {
          console.error('Android 위치 권한 요청 실패:', e);
        }
      }
    };

    requestLocationPermission();

    const watchId = Geolocation.watchPosition(
      position => {
        const currentTime = Date.now();
        const timeSinceLastUpdate = currentTime - lastUpdateTime;

        if (timeSinceLastUpdate < WALKING_INTERVAL) {
          return;
        }

        if (!filterPosition(position)) {
          return;
        }

        const { latitude, longitude } = position.coords;
        const newPosition = { latitude, longitude };

        if (isWalking) {
          if (shouldAddMarker(newPosition)) {
            setLocationMarkers(prev => [
              ...prev,
              {
                latitude,
                longitude,
                index: prev.length + 1,
              },
            ]);
          }

          mapRef.current?.animateCameraTo({
            latitude,
            longitude,
            zoom: 18,
            duration: 500,
            easing: 'Fly',
          });
        }

        setPreviousLocation(currentLocation);
        setCurrentLocation(newPosition);
        setLastUpdateTime(currentTime);
      },
      error => {
        console.error('위치 추적 오류:', error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 1000,
        timeout: 5000,
      },
    );

    console.log('watchPosition 설정됨:', { watchId });

    return () => {
      console.log('위치 추적 정리(cleanup):', watchId);
      Geolocation.clearWatch(watchId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation, isWalking, lastUpdateTime]);

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        if (Platform.OS === 'ios') {
          const status = await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
          if (status === 'granted') {
            await requestLocationAccuracy({ purposeKey: 'common-purpose' });
          }
        } else {
          await requestMultiple([
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
          ]);
        }

        Geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;

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
            console.error('초기 위치 가져오기 실패:', error);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
          },
        );
      } catch (error) {
        console.error('위치 권한 요청 실패:', error);
      }
    };

    getCurrentLocation();
  }, []);

  const handleLocationButtonPress = () => {
    mapRef.current?.animateCameraTo({
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      zoom: 18,
      duration: 500,
      easing: 'Fly',
    });
  };

  const handleStartWalkPress = () => {
    setIsModalVisible(true);
  };

  const handleSelectDog = (dog: any) => {
    console.log(dog);
    setIsModalVisible(false);
    setIsWalking(true);
    // 선택된 강아지 정보를 사용하여 추가 로직을 구현할 수 있습니다.
  };

  const renderWalkButton = () => {
    if (!isWalking) {
      return <S.StartButton onPress={handleStartWalkPress} bgColor="default" text="산책 시작" />;
    }

    return (
      <S.WalkingInfoContainer>
        <S.WalkingInfo>
          <S.InfoText fontSize={15}>{formatDuration(walkTime)}</S.InfoText>
          <S.StopButton
            onPress={() => {
              setIsWalking(false);
              setWalkTime(0);
              setDistance(0);
              setLocationMarkers([]);
            }}
            bgColor="lighten_2"
            text="산책 끝"
          />
          <S.InfoText fontSize={15}>{formatDistance(distance)}</S.InfoText>
        </S.WalkingInfo>
      </S.WalkingInfoContainer>
    );
  };

  // 카메라 이동이 완료될 때마다 호출되는 함수
  const handleCameraChange = (event: any) => {
    const { latitude, longitude } = event;
    // console.log(latitude, longitude);

    const calDistance = calculateDirectDistance(
      latitude,
      longitude,
      currentLocation.latitude,
      currentLocation.longitude,
    );

    // 현재 위치와 카메라 중심점의 거리가 20미터 이상이면 중심에서 벗어난 것으로 판단
    setIsLocationCentered(calDistance < 20);
  };

  const fetchRouteData = async (coordinates: number[][]) => {
    try {
      const response = await axios.post('https://ruehan-home.com:8003/ors/v2/directions/foot-walking/geojson', {
        coordinates,
      });
      const routeData = response.data;
      const newRouteCoordinates = routeData.features[0].geometry.coordinates;
      const routeDistance = routeData.features[0].properties.segments[0].distance;

      // 지도에 폴리곤 그리기
      setRouteCoordinates(newRouteCoordinates);

      // 거리 정보 업데이트
      setDistance(routeDistance);
    } catch (error) {
      console.error('경로 데이터 가져오기 실패:', error);
    }
  };

  const drawRoutePolygon = () => {
    if (isWalking && routeCoordinates.length >= 3) {
      return (
        <NaverMapPolygonOverlay
          outlineWidth={5}
          outlineColor={'#f2f2'}
          color={'#0068'}
          coords={routeCoordinates.map(([longitude, latitude]) => ({ latitude, longitude }))}
        />
      );
    }
    return null;
  };

  useEffect(() => {
    if (isWalking && locationMarkers.length > 1) {
      const lastMarker = locationMarkers[locationMarkers.length - 1];
      const secondLastMarker = locationMarkers[locationMarkers.length - 2];
      const newCoordinates = [
        [secondLastMarker.longitude, secondLastMarker.latitude],
        [lastMarker.longitude, lastMarker.latitude],
      ];
      fetchRouteData(newCoordinates);
    }
  }, [locationMarkers, isWalking]);

  return (
    <>
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
          image={require('../../../assets/avatars/Avatar1.png')}
        />
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

      {!isLocationCentered && (
        <S.LocationButton onPress={handleLocationButtonPress} text="⊕ 내 위치로" bgColor="font_1" />
      )}

      {renderWalkButton()}

      {isModalVisible && (
        <DogListModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          dogs={myDogInfo} // 강아지 목록을 전달합니다.
          onSelectDog={handleSelectDog}
          type="multi-select"
        />
      )}
    </>
  );
};

export default MapView;
