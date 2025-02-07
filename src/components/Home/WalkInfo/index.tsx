import { ReactNode } from 'react';
import { useTodayWalkInfo } from '~apis/dog/useTodayWalkInfo';
import { Icon } from '~components/Common/Icons';
import { Separator } from '~components/Common/Seperator';
import * as S from './styles';
import { useMyDogInfo } from '~apis/dog/useMyDogInfo';

const WalkInfoItem = ({ WalkInfoIcon, label, value }: { WalkInfoIcon: ReactNode; label: string; value: string }) => {
  return (
    <S.WalkInfoItem>
      {WalkInfoIcon}
      <S.WalkInfoLabel fontSize={14}>{label}</S.WalkInfoLabel>
      <S.WalkInfoValue fontSize={14} color="default">
        {value}
      </S.WalkInfoValue>
    </S.WalkInfoItem>
  );
};

export const WalkInfo = () => {
  const [dogInfo] = useMyDogInfo();
  const { timeDuration, totalCalorie, totalDistanceMeter } = useTodayWalkInfo({ dogId: dogInfo.dogId });

  return (
    <S.WalkInfo paddingHorizontal={24} paddingVertical={20}>
      <S.Heading fontSize={17}>
        <S.Heading fontSize={17}>오늘은 밤톨이가 </S.Heading>
        <S.Heading fontSize={17} color="default">
          {totalCalorie}
        </S.Heading>
        <S.Heading fontSize={17}>kcal 소비했어요!</S.Heading>
      </S.Heading>
      <S.WalkInfoContainer>
        <WalkInfoItem
          WalkInfoIcon={<Icon.Clock />}
          label="산책 시간"
          value={`${timeDuration.hours}시간 ${timeDuration.minutes}분`}
        />
        <Separator $height={20} />
        <WalkInfoItem
          WalkInfoIcon={<Icon.Gps />}
          label="산책한 거리"
          value={`${(totalDistanceMeter / 1000).toFixed(1)}km`}
        />
      </S.WalkInfoContainer>
    </S.WalkInfo>
  );
};
