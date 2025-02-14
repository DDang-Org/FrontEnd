import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import WebView, { WebViewNavigation } from 'react-native-webview';
import { AuthParamList } from '~navigation/AuthNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const KakaoLogin = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthParamList>>();
  // const handleOnMessage = (event: WebViewMessageEvent) => {
  //   console.log('url', event.nativeEvent);
  //   if (event.nativeEvent.url.includes(`${REDIRECT_URI}?code=`)) {
  //     const code = event.nativeEvent.url.replace(`${REDIRECT_URI}?code=`, '');
  //     requestToken(code);
  //   }
  // };

  const handleNavigationStateChange = (navState: WebViewNavigation) => {
    const { url } = navState;
    console.log(url);

    if (url.includes('/register')) {
      const params = new URLSearchParams(url.split('?')[1]);
      const email = params.get('email') || '';
      const provider = params.get('provider') || '';

      console.log('Register Params:', { email, provider });
      console.log('회원가입 스크린으로 이동');
      navigation.replace('OwnerProfile', { email, provider });
    }
  };

  return (
    <S.KakaoLogin>
      <WebView
        source={{
          uri: `https://ddang.site/oauth2/authorization/kakao`,
        }}
        // onMessage={handleOnMessage}
        onNavigationStateChange={handleNavigationStateChange}
        injectedJavaScript="window.ReactNativeWebView.postMessage('')"
      />
    </S.KakaoLogin>
  );
};
