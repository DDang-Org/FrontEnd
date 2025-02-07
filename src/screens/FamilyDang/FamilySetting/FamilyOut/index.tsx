import React from 'react';
// import { TextBold, TextRegular } from '~components/Common/Text';
import * as S from '../styles';
import { ClickFamily } from '../../FamilyInfo/clickfamily';
import { FamilyComment } from '~screens/FamilyDang/FamilyInfo/familycomment';
export const FamilyOut = () => {
  return (
    <S.FamilySetting>
      <S.StyledView>
        <FamilyComment
          title="패밀리를 퇴출시킬 구성원을 선택하세요"
          description="패밀리장은 악성유저 등 패밀리 구성원을 퇴출시킬 수 있어요"
        />
        <ClickFamily />
        <ClickFamily />
        <ClickFamily />
        <ClickFamily />
      </S.StyledView>
    </S.FamilySetting>
  );
};
