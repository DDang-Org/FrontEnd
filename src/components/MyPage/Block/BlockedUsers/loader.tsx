import { useTheme } from '@emotion/react';
import { ActivityIndicator } from 'react-native';
import * as S from './styles';

export const BlockedUsersLoader = () => {
  const theme = useTheme();
  return (
    <S.BlockedUsersLoader>
      <ActivityIndicator color={theme.colors.darken} />
    </S.BlockedUsersLoader>
  );
};
