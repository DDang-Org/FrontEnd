import React from 'react';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as S from './styles'; // styles.ts 파일 import

type HeaderProps = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  fontSize?: number;
};

export const Header = ({ left, center, right, fontSize = 18 }: HeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <S.HeaderContainer style={{ paddingTop: insets.top }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <S.LeftContainer>{left}</S.LeftContainer>
      <S.CenterContainer>{center && <S.CenterText fontSize={fontSize}>{center}</S.CenterText>}</S.CenterContainer>
      <S.RightContainer>{right}</S.RightContainer>
    </S.HeaderContainer>
  );
};
