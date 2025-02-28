import { Icon } from '~components/Common/Icons';
import { AuthNavigations } from '~constants/navigations';

export const SOCIAL_LOGIN_BUTTONS = [
  {
    backgroundColor: '#FFED16',
    textColor: '#000000',
    IconComponent: Icon.Kakao,
    text: '카카오계정 로그인',
    onPress: (navigation: any) => navigation.navigate(AuthNavigations.KAKAO_LOGIN),
  },
  {
    backgroundColor: '#F2F2F2',
    textColor: '#000000',
    IconComponent: Icon.Google,
    text: '구글계정 로그인',
    onPress: (navigation: any) => navigation.navigate(AuthNavigations.GOOGLE_LOGIN),
  },
];
