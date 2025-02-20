import { TextBold, TextRegular } from '~components/Common/Text';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FamilyDdangParamList } from '~navigation/FamilyDDangNavigator';
import { RootStackParamList } from '~navigation/RootNavigator';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
import { CompositeNavigationProp } from '@react-navigation/native';
import { useUser } from '~apis/member/useUser';

type NavigationProp = NativeStackNavigationProp<FamilyDdangParamList>;
type CompositeNavigationType = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList>,
  NativeStackNavigationProp<RegisterDogParamList>
>;
// type RegisterDogProps = NativeStackNavigationProp<RegisterDogParamList>;

export const FamilySetting = () => {
  const userInfo = useUser();
  console.log('패밀리장??', userInfo.isRepresentative);
  console.log('패밀리장??', userInfo.address);
  const navigation = useNavigation<NavigationProp>();
  const compositeNavigation = useNavigation<CompositeNavigationType>();
  // const navigationDog = useNavigation<RegisterDogProps>();

  //! 1. (1,2)강아지 추가하기
  const handleRegisterDog = () => {
    compositeNavigation.navigate('RegisterDog', {
      screen: RegisterDogNavigations.BASIC_PROFILE,
    });
  };
  //! 2. (1)패밀리 퇴출하기
  const handleFamilyOut = () => {
    navigation.navigate('FamilyOut');
  };
  //! 3. (1,2,3)패밀리 스스로 나가기
  const handleFamilyOutMySelf = () => {
    if (userInfo.isRepresentative === true) {
      //패밀리장일 경우 양도하기 패이지로 이동
      navigation.navigate('FamilyCaptain');
    } else {
      //패밀리 구성원일 경우 바로 나가지고 강아지 등록 페이지로 이동
      compositeNavigation.navigate('RegisterDog', {
        screen: RegisterDogNavigations.HOME,
      });
    }
  };
  //! 4. (2)패밀리 가입하기
  const handleJoinFamily = () => {
    compositeNavigation.navigate('RegisterDog', {
      screen: RegisterDogNavigations.INVITE_CODE,
    });
  };

  return (
    <S.FamilySetting>
      <S.FamilystyledView>
        <S.NavigationToSettingScreen paddingHorizontal={20} paddingVertical={16.5}>
          <S.TypoWrapper>
            <TextBold fontSize={17}>강아지 추가하기</TextBold>
            <TextRegular fontSize={15}>패밀리장은 강아지를 추가할 수 있어요</TextRegular>
          </S.TypoWrapper>
          <S.NextButton onPress={handleRegisterDog} />
        </S.NavigationToSettingScreen>
        <S.NavigationToSettingScreen paddingHorizontal={20} paddingVertical={16.5}>
          <S.TypoWrapper>
            <TextBold fontSize={17}>패밀리 나가기</TextBold>
            <TextRegular fontSize={15}>강아지를 등록하거나 다른 패밀리에 들어가야 해요</TextRegular>
          </S.TypoWrapper>
          <S.NextButton onPress={handleFamilyOutMySelf} />
        </S.NavigationToSettingScreen>
        <S.NavigationToSettingScreen paddingHorizontal={20} paddingVertical={16.5}>
          <S.TypoWrapper>
            <TextBold fontSize={17}>패밀리 퇴출하기</TextBold>
            <TextRegular fontSize={15}>패밀리장은 패밀리 구성원을 퇴출시킬 수 있어요</TextRegular>
          </S.TypoWrapper>
          <S.NextButton onPress={handleFamilyOut} />
        </S.NavigationToSettingScreen>
        <S.NavigationToSettingScreen paddingHorizontal={20} paddingVertical={16.5}>
          <S.TypoWrapper>
            <TextBold fontSize={17}>패밀리 들어가기</TextBold>
            <TextRegular fontSize={15}>가족 코드를 입력해 다른 패밀리에 들어갈 수 있어요</TextRegular>
          </S.TypoWrapper>
          <S.NextButton onPress={handleJoinFamily} />
        </S.NavigationToSettingScreen>
      </S.FamilystyledView>
    </S.FamilySetting>
  );
};
