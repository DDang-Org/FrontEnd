import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useState, useEffect } from 'react';
import * as S from './walk-styles';
import WalkHeader from '~components/Walk/Header';
import MapView from '~components/Walk/MapView';

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
      <WalkHeader />
      <S.MapContainer>
        <MapView />
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
