import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ActionButton } from '~components/Common/ActionButton';
import { RootStackParamList } from '~navigation/RootNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Gender } from '~types/gender';
import { BaseInput } from '~components/Common/BaseInput';
import { FormErrorToast } from '~components/Common/FormErrorToast';
import { GenderSelectButton } from '~components/Common/GenderSelectButton';
import { PressableInput } from '~components/Common/PressableInput';

// 최상위 네비게이터의 타입 정의
type RootNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterDog'>;

export function RegisterOwnerProfile() {
  const navigation = useNavigation<RootNavigationProp>();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [birth, setBirth] = useState('');
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const isComplete = name && address && birth && selectedGender;
  const [showToast, setShowToast] = useState(false);

  const handleNextPress = () => {
    if (!isComplete) {
      setShowToast(true); // 필드가 완성되지 않은 경우 Toast 표시
    } else {
      setShowToast(false); // Toast 숨김
      navigation.navigate('RegisterDog', {
        screen: RegisterDogNavigations.HOME,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100, padding: 16 }}>
      <S.LoginComment>
        <S.LoginCommentText fontSize={24}>견주님에 대해</S.LoginCommentText>
        <S.LoginCommentText fontSize={24}>알려주세요</S.LoginCommentText>
      </S.LoginComment>
      <S.AvatarSelectWrapper>
        <S.StyledAvatarSelect onPress={() => navigation.navigate('RegisterOwner', { screen: 'OwnerAvatarModal' })} />

        <S.ProfileDataContainer>
          <BaseInput placeholder="닉네임 입력" value={name} onChangeText={setName} />
          <PressableInput
            onPress={() => navigation.navigate('RegisterOwner', { screen: 'OwnerAvatarModal' })}
            value={address}
            placeholder="가족 포지션 입력"
          />
          <PressableInput onPress={() => setAddress('양천구 신월동')} value={address} placeholder="내 동네 불러오기" />
          <PressableInput onPress={() => setBirth('2000.09.23')} value={birth} placeholder="생년월일 선택" />

          <S.GenderButtonWrapper>
            <GenderSelectButton
              gender="MALE"
              isActive={selectedGender === 'MALE'}
              direction="row"
              onPress={() => setSelectedGender(selectedGender === 'MALE' ? null : 'MALE')}
            />
            <GenderSelectButton
              gender="FEMALE"
              isActive={selectedGender === 'FEMALE'}
              direction="row"
              onPress={() => setSelectedGender(selectedGender === 'FEMALE' ? null : 'FEMALE')}
            />
          </S.GenderButtonWrapper>
        </S.ProfileDataContainer>
      </S.AvatarSelectWrapper>
      {showToast && <FormErrorToast message="모든 정보를 입력해 주세요" />}a
      {/* 버튼 클릭 시 최상위 네비게이터의 'RegisterDog' 경로로 이동 */}
      <S.NextButtonWrapper>
        <ActionButton onPress={handleNextPress} text="다음" disabled={!isComplete} />
      </S.NextButtonWrapper>
    </ScrollView>
  );
}
