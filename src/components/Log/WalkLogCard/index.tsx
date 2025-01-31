import { TextBold } from '~components/Common/Text';
import * as S from './styles';
import { Profile } from '~components/Common/Profile';
import { Icon } from '~components/Common/Icons';
import { useTheme } from '@emotion/react';

interface WalkLogCardProps {}

export const WalkLogCard = ({}: WalkLogCardProps) => {
  const theme = useTheme();
  return (
    <S.WalkLogCard>
      <S.UserProfile>
        <Profile size={24} avatarNumber={1} />
        <TextBold fontSize={15}>감자탕수육</TextBold>
      </S.UserProfile>
      <S.WalkImage
        source={{ uri: 'https://velog.velcdn.com/images/nahy-512/post/7d3caf5d-bb12-4e8a-af27-e9c6fb717f37/image.jpg' }}
        resizeMode="cover"
      />
      <S.WalkLogDetails>
        <S.WalkLogDetailItem>
          <Icon.Clock color={theme.colors.default} />
          <TextBold fontSize={15}>1:10:10</TextBold>
        </S.WalkLogDetailItem>
        <S.Separator />
        <S.WalkLogDetailItem>
          <Icon.GpsIcon color={theme.colors.default} />
          <TextBold fontSize={15}>3.3km</TextBold>
        </S.WalkLogDetailItem>
        <S.Separator />
        <S.WalkLogDetailItem>
          <Icon.CaloriesBurned />
          <TextBold fontSize={15}>212kcal</TextBold>
        </S.WalkLogDetailItem>
      </S.WalkLogDetails>
    </S.WalkLogCard>
  );
};
