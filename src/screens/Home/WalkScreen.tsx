import { NaverMapView } from '@mj-studio/react-native-naver-map';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useState, useEffect } from 'react';
import * as S from './walk-styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const formatDuration = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return `${hours}시간 ${minutes}분`;
};

export const formatDistance = (meters: number) => {
  return (meters / 1000).toFixed(1);
};

export const WalkScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [isWalking, setIsWalking] = useState(false);
  const [walkTime, setWalkTime] = useState(0);
  const [distance, _setDistance] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isWalking) {
      interval = setInterval(() => {
        setWalkTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isWalking]);

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
    <S.SafeContainer>
      <S.Header style={{ top: insets.top }}>
        <S.HeaderGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 0, y: 1 }}
        />
        <S.HeaderContent>
          <S.BackButton onPress={() => navigation.goBack()}>
            <S.BackIcon>←</S.BackIcon>
          </S.BackButton>
          <S.Title fontSize={20}>강남구 논현동</S.Title>
          <S.ProfileContainer>
            <S.ProfileImage source={{ uri: 'https://avatars.githubusercontent.com/u/65541546?v=4' }} />
          </S.ProfileContainer>
        </S.HeaderContent>
      </S.Header>

      <S.MapContainer>
        <NaverMapView
          style={{ width: '100%', height: '100%' }}
          isShowLocationButton={false}
          isShowZoomControls={false}
          isShowCompass={false}
        />

        <S.WalkMessage>
          <S.MessageText fontSize={14}>
            주변에 5마리가 산책을 하고 있어요. {'\n'}
            같이 산책을 해보세요!
          </S.MessageText>
          <S.MessageTail />
        </S.WalkMessage>

        <S.LocationButton onPress={() => {}} text="⊕ 내 위치로" bgColor="font_1" />

        {renderWalkButton()}
      </S.MapContainer>
    </S.SafeContainer>
  );
};
