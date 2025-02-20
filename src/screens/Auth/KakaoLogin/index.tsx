import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import WebView, { WebViewNavigation } from 'react-native-webview';
import { AuthParamList } from '~navigation/AuthNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { storeAccessToken } from '~utils/controlAccessToken';
import { queryClient } from '~providers/QueryClientProvider';
import { useState } from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';

export const KakaoLogin = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthParamList>>();
  const [isLoading, setIsLoading] = useState(true);
  const [isChangeNavigate, setIsChangeNavigate] = useState(true);

  const deviceHeight = Dimensions.get('window').height;

  const handleNavigationStateChange = async (navState: WebViewNavigation) => {
    const { url } = navState;
    const isMatched = !url.includes('accounts');

    setIsLoading(isMatched);
    setIsChangeNavigate(navState.loading);
    console.log('redirect url', url);

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
    <S.KakaoLogin>
      {(isLoading || isChangeNavigate) && (
        <S.KaKaoLoadingContainer style={{ height: deviceHeight, elevation: 10 }}>
          <ActivityIndicator size={'small'} color={'black'} />
        </S.KaKaoLoadingContainer>
      )}
      <WebView
        source={{
          uri: `https://ddang.site/oauth2/authorization/kakao`,
        }}
        onNavigationStateChange={handleNavigationStateChange}
        injectedJavaScript="window.ReactNativeWebView.postMessage('')"
      />
    </S.KakaoLogin>
  );
};
