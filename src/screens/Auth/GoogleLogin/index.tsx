import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import WebView, { WebViewNavigation } from 'react-native-webview';
import { AuthParamList } from '~navigation/AuthNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { storeAccessToken } from '~utils/controlAccessToken';
import { queryClient } from '~providers/QueryClientProvider';

export const GoogleLogin = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthParamList>>();

  const handleNavigationStateChange = async (navState: WebViewNavigation) => {
    const { url } = navState;
    console.log('현재 리다이렉트된 url', url);

    const params = new URLSearchParams(url.split('?')[1]);
    if (url.includes('/register')) {
      const email = params.get('email') || '';
      const provider = params.get('provider') || '';
      console.log('Register Params:', { email, provider });
      navigation.replace('OwnerProfile', { email, provider });
    } else if (url.includes('accessToken')) {
      const accessToken = params.get('accessToken') || '';

      await storeAccessToken(accessToken);
      queryClient.invalidateQueries({ queryKey: ['myDogInfo'] });
    }
  };

  return (
    <S.GoogleLogin>
      <WebView
        source={{
          uri: `https://ddang.site/oauth2/authorization/google`,
        }}
        userAgent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
        onNavigationStateChange={handleNavigationStateChange}
        injectedJavaScript="window.ReactNativeWebView.postMessage('')"
      />
    </S.GoogleLogin>
  );
};
