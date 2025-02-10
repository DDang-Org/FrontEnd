import * as S from './styles';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import Config from 'react-native-config';
import ky from 'ky';

const REDIRECT_URI = `https://ddang.pages.dev/register`;

export const KakaoLogin = () => {
  const handleOnMessage = (event: WebViewMessageEvent) => {
    console.log('url', event.nativeEvent);
    if (event.nativeEvent.url.includes(`${REDIRECT_URI}?code=`)) {
      const code = event.nativeEvent.url.replace(`${REDIRECT_URI}?code=`, '');

      requestToken(code);
    }
  };

  const requestToken = async (code: string) => {
    const response = await ky
      .post('https://kauth.kakao.com/oauth/token', {
        searchParams: {
          grant_type: 'authorization_code',
          client_id: Config.KAKAO_REST_API_KEY || '',
          redirect_uri: REDIRECT_URI,
          code,
        },
      })
      .json();

    console.log(response);
  };
  return (
    <S.KakaoLogin>
      <WebView
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${Config.KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        onMessage={handleOnMessage}
        injectedJavaScript="window.ReactNativeWebView.postMessage('')"
      />
    </S.KakaoLogin>
  );
};
