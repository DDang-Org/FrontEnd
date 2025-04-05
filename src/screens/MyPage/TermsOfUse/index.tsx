import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MyPageStackProps } from '~navigation/MyPageNavigator';
import * as S from './styles';
import Term1 from '~assets/termsofuse/term1.png';
import Term2 from '~assets/termsofuse/term1.png';
import Term3 from '~assets/termsofuse/term1.png';
import Term4 from '~assets/termsofuse/term1.png';
import Term5 from '~assets/termsofuse/term1.png';
import Term6 from '~assets/termsofuse/term1.png';

type Props = NativeStackScreenProps<MyPageStackProps, 'TermsOfUse'>;

export const TermsOfUseScreen = ({ navigation }: Props) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <S.SettingScreen>
      <S.NavigationToBlockScreen>
        <S.TypoWrapper>
          <S.TermsOfUseTypo fontSize={15}>서비스 이용약관</S.TermsOfUseTypo>
        </S.TypoWrapper>
        <S.NextButton onPress={handleBackPress} />
      </S.NavigationToBlockScreen>
      <S.TermsOfUseButton onPress={handleBackPress}>
        <Term1 />
      </S.TermsOfUseButton>
    </S.SettingScreen>
  );
};
