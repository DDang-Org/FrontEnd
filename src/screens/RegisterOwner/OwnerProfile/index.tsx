import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ActionButton } from '~components/Common/ActionButton';
import { RootStackParamList } from '~navigation/RootNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
// import { Icon } from '~components/Common/Icons';
import { useState } from 'react';
import { ScrollView } from 'react-native';

import { BaseInput } from '~components/Common/BaseInput';
// import { FormErrorToast } from '~components/Common/FormErrorToast';
// import { FormErrorText } from '~components/Common/FormErrorText';
import { GenderSelectButton } from '~components/Common/GenderSelectButton';
import { PressableInput } from '~components/Common/PressableInput';

// 최상위 네비게이터의 타입 정의
type RootNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterDog'>;

export function RegisterOwnerProfile() {
  // useNavigation을 사용해 최상위 네비게이터와 연결
  const navigation = useNavigation<RootNavigationProp>();
  const [address, setAddress] = useState('');
  const [birth, setBirth] = useState('');

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100, padding: 16 }}>
      <S.LoginComment>
        <S.LoginCommentText fontSize={24}>견주님에 대해</S.LoginCommentText>
        <S.LoginCommentText fontSize={24}>알려주세요</S.LoginCommentText>
      </S.LoginComment>

      {/* <S.RegisterOwner> */}
      <S.AvatarSelectWrapper>
        <S.StyledAvatarSelect onPress={() => navigation.navigate('RegisterOwner', { screen: 'OwnerAvatarModal' })} />

        <S.ProfileDataContainer>
          <BaseInput placeholder="닉네임 입력" />
          <PressableInput onPress={() => navigation.navigate('RegisterOwner', {screen:'OwnerAvatarModal'})} value={birth} placeholder="가족 포지션 입력" />
          <PressableInput onPress={() => setAddress('양천구 신월동')} value={address} placeholder="내 동네 불러오기" />

          <PressableInput onPress={() => setBirth('2000.09.23')} value={birth} placeholder="생년월일 선택" />

          <S.GenderButtonWrapper>
            <GenderSelectButton
              gender="MALE"
              isActive={false}
              direction="row"
              onPress={() => console.log('남자 클릭')}
            />
            <GenderSelectButton
              gender="FEMALE"
              isActive={false}
              direction="row"
              onPress={() => console.log('여자 클릭')}
            />
          </S.GenderButtonWrapper>
        </S.ProfileDataContainer>
      </S.AvatarSelectWrapper>

      {/* 버튼 클릭 시 최상위 네비게이터의 'RegisterDog' 경로로 이동 */}
      <S.NextButtonWrapper>
        <ActionButton
          onPress={
            () =>
              navigation.navigate('RegisterDog', {
                screen: RegisterDogNavigations.HOME,
              }) //중첩 네비게이터 호출 방식
          }
          text="다음"
        />
      </S.NextButtonWrapper>
      {/* </S.RegisterOwner> */}
    </ScrollView>
  );
}
