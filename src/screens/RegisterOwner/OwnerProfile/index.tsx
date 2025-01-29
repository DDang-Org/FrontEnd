import * as S from '../styles';
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
import DatePicker from 'react-native-date-picker';
import { stringToDate, dateToString } from '~utils/dateFormat';

// 최상위 네비게이터의 타입 정의
type RootNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterDog'>;

export function RegisterOwnerProfile() {
  const navigation = useNavigation<RootNavigationProp>();
  const [familyRole, setFamilyRole] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [birth, setBirth] = useState('');
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const isComplete = name && address && birth && selectedGender && familyRole;
  const [showToast, setShowToast] = useState(false);
  const [open, setOpen] = useState(false);

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
      <S.AvatarSelectWrapper>
        <S.StyledAvatarSelect onPress={() => navigation.navigate('RegisterOwner', { screen: 'OwnerAvatarModal' })} />

        <S.ProfileDataContainer>
          <BaseInput placeholder="닉네임 입력" value={name} onChangeText={setName} />
          <PressableInput onPress={() => setFamilyRole('엄마')} value={familyRole} placeholder="가족 포지션 입력" />

          <PressableInput onPress={() => setAddress('양천구 신월동')} value={address} placeholder="내 동네 불러오기" />
          <PressableInput onPress={() => setOpen(true)} value={birth} placeholder="생년월일 선택" />
          <DatePicker
            title={' '}
            modal
            open={open}
            date={birth ? stringToDate(birth, '. ') : new Date()}
            onConfirm={date => {
              setOpen(false);
              const formattedDate = dateToString(date, '. ');
              setBirth(formattedDate);
            }}
            onCancel={() => setOpen(false)}
            mode="date"
            locale="ko"
            confirmText="확인"
            cancelText="취소"
            minimumDate={new Date(1930, 0, 1)}
            maximumDate={new Date()}
          />

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
      <S.NextButtonWrapper>
        <ActionButton onPress={handleNextPress} text="다음" disabled={!isComplete} />
      </S.NextButtonWrapper>
    </ScrollView>
  );
}
