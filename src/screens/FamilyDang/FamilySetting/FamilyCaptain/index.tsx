import React, { useState } from 'react';
import * as S from '../styles';
import { ClickFamily } from '../../FamilyInfo/clickfamily';
import { FamilyComment } from '~screens/FamilyDang/FamilyInfo/familycomment';
import { ActionButton } from '~components/Common/ActionButton';

export const FamilyCaptain = () => {
  const [isAnySelected, setIsAnySelected] = useState(false);

  const handleSelect = (isSelected: boolean) => {
    setIsAnySelected(isSelected);
  };

  return (
    <S.FamilySetting>
      <S.StyledView>
        <FamilyComment
          title="패밀리장을 위임할 사람을 선택하세요"
          description="패밀리장은 패밀리를 나갈 때 권한을 위임해야 해요"
        />
        {[...Array(5)].map((_, index) => (
          <ClickFamily key={index} onSelect={handleSelect} />
        ))}

        <S.ActionButtonWrapper>
          <ActionButton onPress={() => console.log('Action 버튼 클릭')} text="위임하기" disabled={!isAnySelected} />
        </S.ActionButtonWrapper>
      </S.StyledView>
    </S.FamilySetting>
  );
};
