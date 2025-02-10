import { ActivityIndicator } from 'react-native';
import * as S from './styles';
import { useTheme } from '@emotion/react';

export const DogProfileLoader = () => {
  const theme = useTheme();
  return (
    <S.DogProfileLoader>
      <ActivityIndicator color={theme.colors.darken} />
    </S.DogProfileLoader>
  );
};
