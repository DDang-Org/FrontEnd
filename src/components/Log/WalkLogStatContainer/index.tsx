import { TextBold, TextExtraBold, TextMedium } from '~components/Common/Text';
import * as S from './styles';
import { View } from 'react-native';
import { WalkData } from '~apis/log/fetchTotalRecords';

interface WalkLogStatContainerProps {
  title: string;
  walkData: WalkData;
}

export const WalkLogStatContainer = ({ title, walkData }: WalkLogStatContainerProps) => {
  const { hours, minutes, seconds } = walkData.timeDuration;

  return (
    <S.WalkLogStatContainer>
      <TextBold fontSize={15}>{title}</TextBold>
      <S.StatContainerInner>
        <View>
          <TextMedium fontSize={13}>산책 시간</TextMedium>
          <TextExtraBold fontSize={20}>
            {hours}:{minutes}:{seconds}
          </TextExtraBold>
        </View>
        <View>
          <TextMedium fontSize={13}>산책 기록</TextMedium>
          <TextExtraBold fontSize={20}>{walkData.walkCount}회</TextExtraBold>
        </View>
        <View>
          <TextMedium fontSize={13}>산책 거리</TextMedium>
          <TextExtraBold fontSize={20}>{walkData.totalDistanceMeter}km</TextExtraBold>
        </View>
      </S.StatContainerInner>
    </S.WalkLogStatContainer>
  );
};
