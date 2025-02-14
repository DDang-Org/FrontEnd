import { TextBold, TextRegular } from '~components/Common/Text';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FamilyDdangParamList } from '~navigation/FamilyDDangNavigator';

type NavigationProp = NativeStackNavigationProp<FamilyDdangParamList>;

export const FamilySetting = () => {
  const navigation = useNavigation<NavigationProp>();

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
          <S.NextButton onPress={() => console.log('다음')} />
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
