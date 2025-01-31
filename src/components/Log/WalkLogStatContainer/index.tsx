import { TextBold, TextExtraBold, TextMedium } from '~components/Common/Text';
import * as S from './styles';
import { View } from 'react-native';

interface WalkLogStatContainerProps {
  title: string;
}

export const WalkLogStatContainer = ({ title }: WalkLogStatContainerProps) => {
  return (
    <S.WalkLogStatContainer>
      <TextBold fontSize={15}>{title}</TextBold>
      <S.StatContainerInner>
        <View>
          <TextMedium fontSize={13}>산책 시간</TextMedium>
          <TextExtraBold fontSize={20}>20:00:00</TextExtraBold>
        </View>
        <View>
          <TextMedium fontSize={13}>산책 기록</TextMedium>
          <TextExtraBold fontSize={20}>120회</TextExtraBold>
        </View>
        <View>
          <TextMedium fontSize={13}>산책 거리</TextMedium>
          <TextExtraBold fontSize={20}>1200km</TextExtraBold>
        </View>
      </S.StatContainerInner>
    </S.WalkLogStatContainer>
  );
};
