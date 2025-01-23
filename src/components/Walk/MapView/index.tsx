import { NaverMapView } from '@mj-studio/react-native-naver-map';
import { useEffect, useState } from 'react';
import { formatDuration, formatDistance } from '~screens/Home/WalkScreen';
import * as S from './styles';

const MapView = () => {
  const [isWalking, setIsWalking] = useState(false);
  const [walkTime, setWalkTime] = useState(0);
  const [distance, _setDistance] = useState(0);

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
    <>
      <NaverMapView
        style={{ width: '100%', height: '100%' }}
        isShowLocationButton={false}
        isShowZoomControls={false}
        isShowCompass={false}
      />

      <S.LocationButton onPress={() => {}} text="⊕ 내 위치로" bgColor="font_1" />

      {renderWalkButton()}
    </>
  );
};

export default MapView;
