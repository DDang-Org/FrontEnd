import React, { useState } from 'react';
import * as S from '../styles';
import { ClickFamily } from '~screens/FamilyDang/FamilyInfo/clickfamily';
import { FamilyComment } from '~screens/FamilyDang/FamilyInfo/familycomment';
import { ActionButton } from '~components/Common/ActionButton';
import { useFamilyInfo } from '~apis/family/useFamilyInfo';

export const FamilyCaptain = () => {
  const familyMembers = useFamilyInfo();
  const [selectedMemeberId, setSelectedMemberId] = useState<number | null>(null);

  const handleSelect = (memberId: number) => {
    setSelectedMemberId(memberId);
  };

  return (
    <S.FamilySetting>
      <S.StyledView>
        <FamilyComment
          title="패밀리장을 위임할 사람을 선택하세요"
          description="패밀리장은 패밀리를 나갈 때 권한을 위임해야 해요"
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
            text="패밀리장 위임하기"
            disabled={selectedMemeberId === null}
          />
        </S.ActionButtonWrapper>
      </S.StyledView>
    </S.FamilySetting>
  );
};
