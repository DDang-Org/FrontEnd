import * as S from '../styles';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ActionButton } from '~components/Common/ActionButton';
import { RootStackParamList } from '~navigation/RootNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import * as Avatars from '~assets/avatars'; // 아바타 목록 가져오기
import { Profile } from '~components/Common/Profile';
import { BaseInput } from '~components/Common/BaseInput';
import { PressableInput } from '~components/Common/PressableInput';
import { FormErrorToast } from '~components/Common/FormErrorToast';
import { GenderSelectButton } from '~components/Common/GenderSelectButton';
import { Gender } from '~types/gender';
import { RegisterOwnerParamList } from '~navigation/Auth/RegisterOwnerNavigator';

// 네비게이터 타입 정의
type RegisterOwnerProfileRouteProp = RouteProp<RegisterOwnerParamList, 'RegisterOwnerProfile'>;
type RootNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterDog'>;

export function RegisterOwnerProfile() {
  const navigation = useNavigation<RootNavigationProp>();
  const route = useRoute<RegisterOwnerProfileRouteProp>();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [birth, setBirth] = useState('');
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null); // 선택된 아바타 index
  const [showToast, setShowToast] = useState(false);

  // Route에서 전달받은 selectedAvatar 처리
  useEffect(() => {
    if (route.params?.selectedAvatar !== undefined) {
      setSelectedAvatar(route.params.selectedAvatar); // 선택된 아바타 업데이트
    }
  }, [route.params?.selectedAvatar]);

  const isComplete = name && address && birth && selectedGender && selectedAvatar !== null;

  const handleNextPress = () => {
    if (!isComplete) {
      setShowToast(true);
    } else {
      setShowToast(false);
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

      {/* 아바타 섹션 */}
      <S.AvatarSelectWrapper>
        {selectedAvatar !== null ? (
          // 선택된 아바타 렌더링
          <Profile
            size={157}
            src={Object.values(Avatars)[selectedAvatar]}
            onPress={() =>
              navigation.navigate('RegisterOwner', {
                screen: 'OwnerAvatarModal',
                params: { selectedAvatar },
              })
            }
          />
        ) : (
          // 기본 아바타 선택 버튼
          <S.StyledAvatarSelect
            onPress={() =>
              navigation.navigate('RegisterOwner', {
                screen: 'OwnerAvatarModal',
              })
            }
          />
        )}
      </S.AvatarSelectWrapper>

      {/* 입력 폼 */}
      <S.ProfileDataContainer>
        <BaseInput placeholder="닉네임 입력" value={name} onChangeText={setName} />
        <PressableInput onPress={() => setAddress('양천구 신월동')} value={address} placeholder="내 동네 불러오기" />
        <PressableInput onPress={() => setBirth('2000.09.23')} value={birth} placeholder="생년월일 선택" />

        {/* 성별 선택 */}
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

      {/* Toast 메시지 */}
      {showToast && <FormErrorToast message="모든 정보를 입력해 주세요" />}

      {/* 다음 버튼 */}
      <S.NextButtonWrapper>
        <ActionButton onPress={handleNextPress} text="다음" disabled={!isComplete} />
      </S.NextButtonWrapper>
    </ScrollView>
  );
}
