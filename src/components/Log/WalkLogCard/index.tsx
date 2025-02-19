import { TextBold } from '~components/Common/Text';
import * as S from './styles';
import { Profile } from '~components/Common/Profile';
import { Icon } from '~components/Common/Icons';
import { useTheme } from '@emotion/react';
import { LogDetailResponse } from '~apis/log/fetchLogDetails';

interface WalkLogCardProps {
  logDetail: LogDetailResponse;
}

export const WalkLogCard = ({ logDetail }: WalkLogCardProps) => {
  const theme = useTheme();
  const { hours, minutes, seconds } = logDetail.timeDuration;
  return (
    <S.WalkLogCard>
      <S.UserProfile>
        <Profile size={24} avatarNumber={logDetail.memberProfileImg} />
        <TextBold fontSize={15}>{logDetail.memberName}</TextBold>
      </S.UserProfile>
      <S.WalkImage source={{ uri: logDetail.walkImg }} resizeMode="cover" />
      <S.WalkLogDetails>
        <S.WalkLogDetailItem>
          <Icon.Clock color={theme.colors.default} />
          <TextBold fontSize={15}>
            {hours}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </TextBold>
        </S.WalkLogDetailItem>
        <S.Separator />
        <S.WalkLogDetailItem>
          <Icon.GpsIcon color={theme.colors.default} />
          <TextBold fontSize={15}>{logDetail.totalDistanceMeter}km</TextBold>
        </S.WalkLogDetailItem>
        <S.Separator />
        <S.WalkLogDetailItem>
          <Icon.CaloriesBurned />
          <TextBold fontSize={15}>{logDetail.totalCalorie}kcal</TextBold>
        </S.WalkLogDetailItem>
      </S.WalkLogDetails>
    </S.WalkLogCard>
  );
};
