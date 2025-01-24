import {
  Camera,
  NaverMapMarkerOverlay,
  NaverMapView,
  NaverMapViewRef,
  NaverMapCircleOverlay,
} from '@mj-studio/react-native-naver-map';
import { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS, requestLocationAccuracy, requestMultiple } from 'react-native-permissions';
import { formatDuration, formatDistance } from '~screens/Home/WalkScreen';
import * as S from './styles';

const WALKING_INTERVAL = 5000;
const NORMAL_INTERVAL = 10000;
const MIN_ACCURACY = 30;

const MapView = () => {
  const mapRef = useRef<NaverMapViewRef>(null);
  const [isWalking, setIsWalking] = useState(false);
  const [walkTime, setWalkTime] = useState(0);
  const [distance, _setDistance] = useState(0);

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

  useEffect(() => {
    console.log('위치 추적 시작:', { isWalking });

    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        const status = await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
        console.log('iOS 위치 권한 상태:', status);
        if (status === 'granted') {
          try {
            await requestLocationAccuracy({ purposeKey: 'common-purpose' });
            console.log('iOS 위치 정확도 설정 성공');
          } catch (e) {
            console.error('iOS 위치 정확도 요청 실패:', e);
          }
        }
      } else {
        try {
          const result = await requestMultiple([
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
          ]);
          console.log('Android 위치 권한 상태:', result);
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

        // 마지막 업데이트로부터 5초가 지나지 않았다면 무시
        if (timeSinceLastUpdate < WALKING_INTERVAL) {
          console.log('업데이트 무시: 시간 간격이 충분하지 않음', {
            timeSinceLastUpdate,
            requiredInterval: WALKING_INTERVAL,
          });
          return;
        }

        console.log('위치 업데이트 받음:', {
          accuracy: position.coords.accuracy,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timestamp: new Date(position.timestamp).toLocaleString(),
          timeSinceLastUpdate,
          isWalking,
        });

        if (!filterPosition(position)) {
          console.log('위치 정확도가 낮음:', {
            accuracy: position.coords.accuracy,
            required: MIN_ACCURACY,
          });
          return;
        }

        const { latitude, longitude } = position.coords;
        const newPosition = { latitude, longitude };

        if (isWalking) {
          setLocationMarkers(prev => [
            ...prev,
            {
              latitude,
              longitude,
              index: prev.length + 1,
            },
          ]);
          console.log('새 위치 마커 추가됨:', locationMarkers.length + 1);

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
        console.error('위치 추적 오류 발생:', {
          code: error.code,
          message: error.message,
        });
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
  }, [currentLocation, isWalking, lastUpdateTime]); // lastUpdateTime 의존성 추가

  const handleLocationButtonPress = () => {
    mapRef.current?.animateCameraTo({
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      zoom: 18,
      duration: 500,
      easing: 'Fly',
    });
  };

  const renderWalkButton = () => {
    if (!isWalking) {
      return <S.StartButton onPress={() => setIsWalking(true)} bgColor="default" text="산책 시작" />;
    }

    return (
      <S.WalkingInfoContainer>
        <S.WalkingInfo>
          <S.InfoText fontSize={15}>{formatDuration(walkTime)}</S.InfoText>
          <S.StopButton onPress={() => setIsWalking(false)} bgColor="lighten_2" text="산책 끝" />
          <S.InfoText fontSize={15}>{formatDistance(distance)}km</S.InfoText>
        </S.WalkingInfo>
      </S.WalkingInfoContainer>
    );
  };

  return (
    <>
      <NaverMapView
        ref={mapRef}
        style={{ width: '100%', height: '100%' }}
        isShowLocationButton={false}
        isShowZoomControls={false}
        isShowCompass={false}
        camera={camera}
      >
        <NaverMapMarkerOverlay
          latitude={currentLocation.latitude}
          longitude={currentLocation.longitude}
          anchor={{ x: 0.5, y: 1 }}
          width={30}
          height={40}
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
      </NaverMapView>

      <S.LocationButton onPress={handleLocationButtonPress} text="⊕ 내 위치로" bgColor="font_1" />

      {renderWalkButton()}
    </>
  );
};

export default MapView;
