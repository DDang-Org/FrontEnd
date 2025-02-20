import { TextBold, TextRegular } from '~components/Common/Text';
import * as S from './styles';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FamilyDdangParamList } from '~navigation/FamilyDDangNavigator';
import { RootStackParamList } from '~navigation/RootNavigator';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';

type NavigationProp = NativeStackNavigationProp<FamilyDdangParamList>;
type CompositeNavigationType = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList>,
  NativeStackNavigationProp<RegisterDogParamList>
>;

export const FamilySetting = () => {
  const navigation = useNavigation<NavigationProp>();
  const compositeNavigation = useNavigation<CompositeNavigationType>();

  const handleRegisterDog = () => {
    compositeNavigation.navigate('RegisterDog', {
      screen: RegisterDogNavigations.BASIC_PROFILE,
    });
  };
  const handleJoinFamily = () => {
    compositeNavigation.navigate('RegisterDog', {
      screen: RegisterDogNavigations.INVITE_CODE,
    });
  };
  const handleFamilyOut = () => {
    navigation.navigate('FamilyCaptain');
  };
  const handleFamilyCaptain = () => {
    navigation.navigate('FamilyOut');
  };

  return (
    <S.FamilySetting>
      <S.FamilystyledView>
        <S.NavigationToSettingScreen paddingHorizontal={20} paddingVertical={16.5}>
          <S.TypoWrapper>
            <TextBold fontSize={17}>강아지 추가하기</TextBold>
            <TextRegular fontSize={15}>패밀리장은 강아지를 추가할 수 있어요</TextRegular>
          </S.TypoWrapper>
          <S.NextButton onPress={handleJoinFamily} />
        </S.NavigationToSettingScreen>
        <S.NavigationToSettingScreen paddingHorizontal={20} paddingVertical={16.5}>
          <S.TypoWrapper>
            <TextBold fontSize={17}>패밀리 나가기</TextBold>
            <TextRegular fontSize={15}>강아지를 등록하거나 다른 패밀리에 들어가야 해요</TextRegular>
          </S.TypoWrapper>
          <S.NextButton onPress={handleFamilyOut} />
        </S.NavigationToSettingScreen>
        <S.NavigationToSettingScreen paddingHorizontal={20} paddingVertical={16.5}>
          <S.TypoWrapper>
            <TextBold fontSize={17}>패밀리 퇴출하기</TextBold>
            <TextRegular fontSize={15}>패밀리장은 패밀리 구성원을 퇴출시킬 수 있어요</TextRegular>
          </S.TypoWrapper>
          <S.NextButton onPress={handleFamilyCaptain} />
        </S.NavigationToSettingScreen>
      </S.FamilystyledView>
    </S.FamilySetting>
  );
};
