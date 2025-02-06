import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  fontSize?: number;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  backgroundColorType?: 'white' | 'default';
};

export const Header = ({
  left,
  center,
  right,
  fontSize = 17,
  onLeftPress,
  onRightPress,
  backgroundColorType = 'white',
}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <S.HeaderContainer style={{ paddingTop: insets.top }} backgroundColorType={backgroundColorType}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <S.LeftContainer>
        <TouchableOpacity onPress={onLeftPress || (() => navigation.goBack())}>{left}</TouchableOpacity>
      </S.LeftContainer>
      <S.CenterContainer>{center && <S.CenterText fontSize={fontSize}>{center}</S.CenterText>}</S.CenterContainer>
      <S.RightContainer>
        <TouchableOpacity onPress={onRightPress}>{right}</TouchableOpacity>
      </S.RightContainer>
    </S.HeaderContainer>
  );
};
