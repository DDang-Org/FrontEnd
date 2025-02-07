import React from 'react';
import * as S from '../styles';
import { ClickFamily } from '../../FamilyInfo/clickfamily';
import { FamilyComment } from '~screens/FamilyDang/FamilyInfo/familycomment';

export const FamilyCaptain = () => {
  return (
    <S.FamilySetting>
      <S.StyledView>
        <FamilyComment
          title="패밀리장을 위임할 사람을 선택하세요"
          description="패밀리장은 패밀리를 나갈 때 권한을 위임해야 해요"
        />
        <ClickFamily />
        <ClickFamily />
        <ClickFamily />
        <ClickFamily />
        <ClickFamily />
      </S.StyledView>
    </S.FamilySetting>
  );
};
