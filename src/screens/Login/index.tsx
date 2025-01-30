import * as S from './styles';
import Dog from '~assets/dogs/dog-walk.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginComment } from '~components/Login/\bLoginComment/indedx';
import { SOCIAL_LOGIN_BUTTONS } from '~components/Login/LoginButton';

export const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-start', alignItems: 'center' }}>
      <LoginComment />
      <S.DigIconWrapper>
        <Dog width={200} height={200} />
      </S.DigIconWrapper>
      <S.LoginButtonWrapper>
        {SOCIAL_LOGIN_BUTTONS.map(({ backgroundColor, textColor, IconComponent, text }, index) => (
          <S.CustomActionButton key={index} style={{ backgroundColor }} onPress={() => console.log('로그인 이동')}>
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
