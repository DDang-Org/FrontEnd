import React from 'react';
import * as S from '../styles';
import { TouchableOpacity } from 'react-native';

export const InviteSection = () => {
  return (
    <S.GapBox paddingVertical={15} paddingHorizontal={15}>
      <S.InviteSection>
        <S.InviteComment fontSize={17}>밤톨이와 함께할 동반자를 초대하세요!</S.InviteComment>
        <TouchableOpacity>
          <S.InviteButton text="초대" onPress={() => console.log('Invite')}>
            <S.ButtonText fontSize={14}>초대</S.ButtonText>
          </S.InviteButton>
        </TouchableOpacity>
      </S.InviteSection>
    </S.GapBox>
  );
};
