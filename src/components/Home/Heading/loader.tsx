import { ActivityIndicator } from 'react-native';
import * as S from './styles';
import { useTheme } from '@emotion/react';

export const HeadingLoader = () => {
  const theme = useTheme();
  return (
    <S.Heading>
      <S.HeadingText fontSize={24}>
        오늘은 <ActivityIndicator color={theme.colors.darken} />랑
      </S.HeadingText>
      <S.HeadingText fontSize={24}>산책가는 날!</S.HeadingText>
    </S.Heading>
  );
};
