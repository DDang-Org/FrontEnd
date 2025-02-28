import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import { getAvatar } from '~utils/getAvatar';
import { useUser } from '~apis/member/useUser';

const WalkHeader = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const avatars = getAvatar();
  const user = useUser();
  const AvatarComponent = avatars[user.memberProfileImg];

  return (
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
        <S.Title fontSize={20}>{user.address}</S.Title>
        <S.ProfileContainer>{AvatarComponent && <AvatarComponent width={40} height={40} />}</S.ProfileContainer>
      </S.HeaderContent>
    </S.Header>
  );
};

export default WalkHeader;
