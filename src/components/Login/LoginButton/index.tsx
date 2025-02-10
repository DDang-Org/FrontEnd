import { Icon } from '~components/Common/Icons';

export const SOCIAL_LOGIN_BUTTONS = [
  {
    backgroundColor: '#FFED16',
    textColor: '#000000',
    IconComponent: Icon.Kakao,
    text: '카카오계정 로그인',
    onPress: (navigation: any) => navigation.navigate('KakaoLogin'),
  },
  {
    backgroundColor: '#F2F2F2',
    textColor: '#000000',
    IconComponent: Icon.Google,
    text: '구글계정 로그인',
    onPress: (navigation: any) => navigation.navigate('RegisterOwner', { screen: 'OwnerProfile' }),
  },
];
