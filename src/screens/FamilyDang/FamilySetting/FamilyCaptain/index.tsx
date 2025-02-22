import React, { useState } from 'react';
import * as S from '../styles';
import { ClickFamily } from '~screens/FamilyDang/FamilyInfo/clickfamily';
import { FamilyComment } from '~screens/FamilyDang/FamilyInfo/familycomment';
import { ActionButton } from '~components/Common/ActionButton';
import { useFamilyInfo } from '~apis/family/useFamilyInfo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { updateFamilyRepresentative } from '~apis/family/updateFamilyRepresentative';
import { deleteFamilyMySelf } from '~apis/family/deleteFamilyMySelf';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { Alert } from 'react-native';
type RegisterDogProps = NativeStackNavigationProp<RegisterDogParamList>;

export const FamilyCaptain = () => {
  const navigationDog = useNavigation<RegisterDogProps>();
  const familyMembers = useFamilyInfo();
  const [selectedMemeberId, setSelectedMemberId] = useState<number | null>(null);

  const handleSelect = (memberId: number) => {
    setSelectedMemberId(memberId);
  };

  const handleCaptain = async () => {
    if (selectedMemeberId === null) {
      return;
    }
    Alert.alert(
      '패밀리 나가기',
      '기존 산책과 강아지 데이터가 사라집니다. 패밀리를 나갈까요?',
      [
        {
          text: '아니오',
          onPress: () => console.log('Action canceled'),
          style: 'cancel',
        },
        {
          text: '예',
          onPress: async () => {
            try {
              // 패밀리장 위임
              const updateResponse = await updateFamilyRepresentative({
                queryKey: ['familyRepresentative', selectedMemeberId],
              });
              console.log('패밀리장 위임 성공:', updateResponse);
              // 패밀리 나가기
              const response = await deleteFamilyMySelf();
              console.log('패밀리 나가기 성공:', response);
              navigationDog.navigate('Home');
            } catch (error) {
              console.error('패밀리 나가기 실패', error);
            }
          },
        },
      ],
      { cancelable: false },
    );
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
