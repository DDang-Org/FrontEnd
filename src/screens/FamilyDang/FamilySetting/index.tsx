import * as S from './styles';
import { TextBold, TextRegular } from '~components/Common/Text';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FamilyDdangParamList } from '~navigation/FamilyDdangNavigator';
import { RootStackParamList } from '~navigation/RootNavigator';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
import { CompositeNavigationProp } from '@react-navigation/native';
import { useUser } from '~apis/member/useUser';
import { useFamilyInfo } from '~apis/family/useFamilyInfo';
import { deleteFamilyMySelf } from '~apis/family/deleteFamilyMySelf';
import { Alert } from 'react-native';

type NavigationProp = NativeStackNavigationProp<FamilyDdangParamList>;
type CompositeNavigationType = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList>,
  NativeStackNavigationProp<RegisterDogParamList>
>;

export const FamilySetting = () => {
  const userInfo = useUser();
  const familyResponse = useFamilyInfo();
  const familyMembers = familyResponse || [];
  const familyCount = familyMembers.length;

  console.log('패밀리 구성원 수:', familyCount);

  const navigation = useNavigation<NavigationProp>();
  const compositeNavigation = useNavigation<CompositeNavigationType>();

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
      // 패밀리장일 경우 양도하기 페이지로 이동
      navigation.navigate('FamilyCaptain');
    } else {
      // 패밀리 구성원일 경우 바로 나가고 강아지 등록 페이지로 이동
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
                // 패밀리 나가기
                const response = await deleteFamilyMySelf();
                console.log('패밀리 나가기 성공:', response);
                compositeNavigation.navigate('RegisterDog', {
                  screen: RegisterDogNavigations.HOME,
                });
              } catch (error) {
                console.error('패밀리 나가기 실패', error);
              }
            },
          },
        ],
        { cancelable: false },
      );
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
        {/* 조건에 따라 NavigationToSettingScreen 렌더링 */}
        {familyCount >= 2 && userInfo.isRepresentative === true && (
          <>
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
          </>
        )}
        {familyCount >= 2 && userInfo.isRepresentative === false && (
          <>
            <S.NavigationToSettingScreen paddingHorizontal={20} paddingVertical={16.5}>
              <S.TypoWrapper>
                <TextBold fontSize={17}>패밀리 나가기</TextBold>
                <TextRegular fontSize={15}>강아지를 등록하거나 다른 패밀리에 들어가야 해요</TextRegular>
              </S.TypoWrapper>
              <S.NextButton onPress={handleFamilyOutMySelf} />
            </S.NavigationToSettingScreen>
          </>
        )}
        {familyCount === 1 && (
          <>
            <S.NavigationToSettingScreen paddingHorizontal={20} paddingVertical={16.5}>
              <S.TypoWrapper>
                <TextBold fontSize={17}>강아지 추가하기</TextBold>
                <TextRegular fontSize={15}>패밀리장은 강아지를 추가할 수 있어요</TextRegular>
              </S.TypoWrapper>
              <S.NextButton onPress={handleRegisterDog} />
            </S.NavigationToSettingScreen>
            <S.NavigationToSettingScreen paddingHorizontal={20} paddingVertical={16.5}>
              <S.TypoWrapper>
                <TextBold fontSize={17}>패밀리 들어가기</TextBold>
                <TextRegular fontSize={15}>가족 코드를 입력해 다른 패밀리에 들어갈 수 있어요</TextRegular>
              </S.TypoWrapper>
              <S.NextButton onPress={handleJoinFamily} />
            </S.NavigationToSettingScreen>
          </>
        )}
      </S.FamilystyledView>
    </S.FamilySetting>
  );
};