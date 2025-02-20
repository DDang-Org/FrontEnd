import React, { useState } from 'react';
import * as S from '../styles';
import { ClickFamily } from '~screens/FamilyDang/FamilyInfo/clickfamily';
import { FamilyComment } from '~screens/FamilyDang/FamilyInfo/familycomment';
import { ActionButton } from '~components/Common/ActionButton';
import { useFamilyInfo } from '~apis/family/useFamilyInfo';

export const FamilyOut = () => {
  // const [isAnySelected, setIsAnySelected] = useState(false); // 하나라도 선택되었는지 확인
  const familyMembers = useFamilyInfo();
  const [selectedMemeberId, setSelectedMemberId] = useState<number | null>(null);

  const handleSelect = (memberId: number) => {
    setSelectedMemberId(memberId);
  };

  return (
    <S.FamilySetting>
      <S.StyledView>
        <FamilyComment
          title="패밀리를 퇴출시킬 구성원을 선택하세요"
          description="패밀리장은 악성유저 등 패밀리 구성원을 퇴출시킬 수 있어요"
        />
        {familyMembers?.map(member => (
          <ClickFamily
            key={member.memberId}
            memberId={member.memberId}
            memberName={member.memberName}
            isSelected={selectedMemeberId === member.memberId}
            onSelect={handleSelect}
          />
        ))}
        <S.ActionButtonWrapper>
          <ActionButton
            onPress={() => console.log('Action 버튼 클릭')}
            text="퇴출하기"
            disabled={selectedMemeberId === null}
          />
        </S.ActionButtonWrapper>
      </S.StyledView>
    </S.FamilySetting>
  );
};
