import React, { useState } from 'react';
import * as S from '../styles';
import { ClickFamily } from '~screens/FamilyDang/FamilyInfo/clickfamily';
import { FamilyComment } from '~screens/FamilyDang/FamilyInfo/familycomment';
import { ActionButton } from '~components/Common/ActionButton';

export const FamilyOut = () => {
  const [isAnySelected, setIsAnySelected] = useState(false); // 하나라도 선택되었는지 확인

  const handleSelect = (isSelected: boolean) => {
    setIsAnySelected(isSelected);
  };

  return (
    <S.FamilySetting>
      <S.StyledView>
        <FamilyComment
          title="패밀리를 퇴출시킬 구성원을 선택하세요"
          description="패밀리장은 악성유저 등 패밀리 구성원을 퇴출시킬 수 있어요"
        />
        {[...Array(4)].map((_, index) => (
          <ClickFamily key={index} onSelect={handleSelect} />
        ))}
        <S.ActionButtonWrapper>
          <ActionButton onPress={() => console.log('Action 버튼 클릭')} text="위임하기" disabled={!isAnySelected} />
        </S.ActionButtonWrapper>{' '}
      </S.StyledView>
    </S.FamilySetting>
  );
};
