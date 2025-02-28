import { Text, Image } from 'react-native';
import * as S from './styles';
import { Icon } from '~components/Common/Icons';

interface WalkSummaryModalProps {
  visible: boolean;
  walkTime: number;
  distance: number;
  screenshotUri: string;
  onClose: () => void;
}

const WalkSummaryModal = ({ visible, walkTime, distance, screenshotUri }: WalkSummaryModalProps) => {
  if (!visible) {
    return null;
  }

  console.log(walkTime, distance);

  const formattedDate = new Date().toISOString().split('T')[0].replace(/-/g, '.');

  return (
    <S.SafeAreaView>
      <S.Container>
        <S.Content>
          <S.Header>
            <S.Date fontSize={17}>{formattedDate}</S.Date>
            <S.Title fontSize={20}>{'견주님과 밤톨이가'}</S.Title>
            <S.Title fontSize={20}>
              <S.Minute fontSize={20}>{`${Math.floor(walkTime / 60)}분`}</S.Minute>
              <Text>{'동안 산책했어요.'}</Text>
            </S.Title>
          </S.Header>
          <Icon.WalkSummary style={{ alignSelf: 'flex-end', marginRight: 40 }} />
          <S.InfoContainer>
            <S.InfoItem>
              <S.InfoMain fontSize={20}>{`${Math.floor(walkTime / 3600)}:${Math.floor((walkTime % 3600) / 60)}:${
                walkTime % 60
              }`}</S.InfoMain>
              <S.InfoSub fontSize={13}>산책 시간</S.InfoSub>
            </S.InfoItem>
            <S.InfoItem>
              <S.InfoMain fontSize={20}>{`${(distance / 1000).toFixed(1)}km`}</S.InfoMain>
              <S.InfoSub fontSize={13}>산책 거리</S.InfoSub>
            </S.InfoItem>
            <S.InfoItem>
              <S.InfoMain fontSize={20}>200kcal</S.InfoMain>
              <S.InfoSub fontSize={13}>소모한 칼로리</S.InfoSub>
            </S.InfoItem>
          </S.InfoContainer>
          <Image source={{ uri: screenshotUri }} style={{ width: '100%', height: 240 }} />
        </S.Content>
      </S.Container>
    </S.SafeAreaView>
  );
};

export default WalkSummaryModal;
