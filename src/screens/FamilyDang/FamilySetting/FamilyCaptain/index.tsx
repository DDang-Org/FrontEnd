import React, { useState } from 'react';
import * as S from '../styles';
import { ClickFamily } from '~screens/FamilyDang/FamilyInfo/clickfamily';
import { FamilyComment } from '~screens/FamilyDang/FamilyInfo/familycomment';
import { ActionButton } from '~components/Common/ActionButton';
import { useFamilyInfo } from '~apis/family/useFamilyInfo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FamilyDdangParamList } from '~navigation/FamilyDDangNavigator';
import { useNavigation } from '@react-navigation/native';
import { updateFamilyRepresentative } from '~apis/family/updateFamilyRepresentative';

type NavigationProp = NativeStackNavigationProp<FamilyDdangParamList>;

export const FamilyCaptain = () => {
  const navigation = useNavigation<NavigationProp>();
  const familyMembers = useFamilyInfo();
  const [selectedMemeberId, setSelectedMemberId] = useState<number | null>(null);

  const handleSelect = (memberId: number) => {
    setSelectedMemberId(memberId);
  };

  const handleCaptain = async () => {
    if (selectedMemeberId === null) {
      return;
    }
    try {
      const response = await updateFamilyRepresentative({ queryKey: ['familyRepresentative', selectedMemeberId] });
      console.log('패밀리장 위임 성공:', response);
      navigation.navigate('FamilyDangScreen');
    } catch (error) {
      console.error('패밀리장 위임 실패', error);
    }
  };

  return (
    <S.FamilySetting>
      <S.StyledView>
        <FamilyComment
          title="패밀리장을 위임할 사람을 선택하세요"
          description="패밀리장은 패밀리를 나갈 때 권한을 위임해야 해요"
        />
        {familyMembers?.slice(1).map(member => (
          <ClickFamily
            key={member.memberId}
            memberId={member.memberId}
            memberName={member.memberName}
            isSelected={selectedMemeberId === member.memberId}
            onSelect={handleSelect}
          />
        ))}
        <S.ActionButtonWrapper>
          <ActionButton onPress={handleCaptain} text="패밀리장 위임하기" disabled={selectedMemeberId === null} />
        </S.ActionButtonWrapper>
      </S.StyledView>
    </S.FamilySetting>
  );
};
