import React from 'react';
import * as S from '../styles';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '~navigation/RootNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const InviteSection = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleInvitePress = () => {
    navigation.navigate('FamilyDDang', { screen: 'CreateInviteCode' });
  };

  return (
    <S.GapBox paddingVertical={15} paddingHorizontal={15}>
      <S.InviteSection>
        <S.InviteComment fontSize={17}>밤톨이와 함께할 동반자를 초대하세요!</S.InviteComment>
        <TouchableOpacity>
          <S.InviteButton text="초대" onPress={handleInvitePress}>
            <S.ButtonText fontSize={14}>초대</S.ButtonText>
          </S.InviteButton>
        </TouchableOpacity>
      </S.InviteSection>
    </S.GapBox>
  );
};
