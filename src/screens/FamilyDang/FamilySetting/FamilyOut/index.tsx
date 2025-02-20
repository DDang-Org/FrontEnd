import { useState } from 'react';
import * as S from '../styles';
import { ClickFamily } from '~screens/FamilyDang/FamilyInfo/clickfamily';
import { FamilyComment } from '~screens/FamilyDang/FamilyInfo/familycomment';
import { ActionButton } from '~components/Common/ActionButton';
import { useFamilyInfo } from '~apis/family/useFamilyInfo';
import { deleteFamily } from '~apis/family/deleteFamily';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FamilyDdangParamList } from '~navigation/FamilyDDangNavigator';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

type NavigationProp = NativeStackNavigationProp<FamilyDdangParamList>;

export const FamilyOut = () => {
  const navigation = useNavigation<NavigationProp>();
  const familyMembers = useFamilyInfo();
  const [selectedMemeberId, setSelectedMemberId] = useState<number | null>(null);

  const handleSelect = (memberId: number) => {
    setSelectedMemberId(memberId);
  };

  const handleDelete = async () => {
    if (selectedMemeberId === null) {
      return;
    }
    Alert.alert(
      '패밀리 퇴출시키기',
      '퇴출된 회원의 데이터가 사라집니다. 퇴출시킬까요?',
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
              const response = await deleteFamily({ queryKey: ['familyDelete', selectedMemeberId] });
              console.log('패밀리 퇴출 성공:', response);
              navigation.navigate('FamilyDangScreen');
            } catch (error) {
              console.error('패밀리 퇴출 실패', error);
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
          title="패밀리를 퇴출시킬 구성원을 선택하세요"
          description="패밀리장은 악성유저 등 패밀리 구성원을 퇴출시킬 수 있어요"
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
          <ActionButton onPress={handleDelete} text="퇴출하기" disabled={selectedMemeberId === null} />
        </S.ActionButtonWrapper>
      </S.StyledView>
    </S.FamilySetting>
  );
};