import { ActivityIndicator } from 'react-native';
import * as S from './styles';
import { useTheme } from '@emotion/react';

export const WalkInfoLoader = () => {
  const theme = useTheme();

  return (
    <S.WalkInfoLoader>
      <ActivityIndicator color={theme.colors.darken} />
    </S.WalkInfoLoader>
  );
};
