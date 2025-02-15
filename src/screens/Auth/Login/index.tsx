import * as S from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Dog from '~assets/dogs/dog-walk.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginComment } from '~components/Login/\bLoginComment/index';
import { SOCIAL_LOGIN_BUTTONS } from '~components/Login/LoginButton';
import { AuthParamList } from '~navigation/AuthNavigator';

type RootNavigationProp = NativeStackScreenProps<AuthParamList, 'Login'>;

export const Login = ({ navigation }: RootNavigationProp) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-start', alignItems: 'center' }}>
      <LoginComment />
      <S.DigIconWrapper>
        <Dog width={200} height={200} />
      </S.DigIconWrapper>
      <S.LoginButtonWrapper>
        {SOCIAL_LOGIN_BUTTONS.map(({ backgroundColor, textColor, IconComponent, text, onPress }, index) => (
          <S.CustomActionButton key={index} style={{ backgroundColor }} onPress={() => onPress(navigation)}>
            <IconComponent width={24} height={24} style={{ position: 'absolute', left: 16 }} />
            <S.Text fontSize={14} style={{ color: textColor }}>
              {text}
            </S.Text>
          </S.CustomActionButton>
        ))}
      </S.LoginButtonWrapper>
    </SafeAreaView>
  );
};
