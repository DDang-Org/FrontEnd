import * as S from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '~navigation/RootNavigator';
import Dog from '~assets/dogs/dog-walk.svg';
import { Icon } from '~components/Common/Icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginComment } from '~components/Login/\bLoginComment/indedx';

type RootNavigationProp = NativeStackScreenProps<RootStackParamList, 'Login'>;

const SOCIAL_LOGIN_BUTTONS = [
  {
    backgroundColor: '#FFED16', // 카카오 배경색
    textColor: '#000000', // 카카오 텍스트 색상
    IconComponent: Icon.Kakao, // 카카오 아이콘
    text: '카카오계정 로그인',
    onPress: (navigation: any) => navigation.navigate('RegisterOwner', { screen: 'OwnerProfile' }),
  },
  {
    backgroundColor: '#F2F2F2', // 구글 배경색
    textColor: '#000000', // 구글 텍스트 색상
    IconComponent: Icon.Google, // 구글 아이콘
    text: '구글계정 로그인',
    onPress: (navigation: any) => navigation.navigate('RegisterOwner', { screen: 'OwnerProfile' }),
  },
];

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
            <IconComponent width={24} height={24} style={{ position: 'absolute', left: 16 }}/>
            <S.Text fontSize={14} style={{ color: textColor }}>
              {text}
            </S.Text>
          </S.CustomActionButton>
        ))}
      </S.LoginButtonWrapper>

    </SafeAreaView>
  );
};
