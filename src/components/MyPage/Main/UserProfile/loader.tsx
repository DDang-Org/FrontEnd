import { ActivityIndicator } from 'react-native';
import * as S from './styles';
import { useTheme } from '@emotion/react';

export const UserProfileLoader = () => {
  const theme = useTheme();
  return (
    <S.UserProfile>
      <ActivityIndicator color={theme.colors.darken} />
    </S.UserProfile>
  );
};
