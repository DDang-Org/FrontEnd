import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterOwnerProfile } from '~screens/Auth/OwnerProfile';
import { KakaoLogin } from '~screens/Auth/KakaoLogin';
import { Icon } from '~components/Common/Icons';
import { Header } from '~components/Common/Header';
import { Login } from '~screens/Auth/Login';
import { GoogleLogin } from '~screens/Auth/GoogleLogin';
import { AuthNavigations } from '~constants/navigations';
import { useTheme } from '@emotion/react';

export type AuthParamList = {
  Login: undefined;
  KakaoLogin: undefined;
  GoogleLogin: undefined;
  OwnerProfile: { email: string; provider: string };
};

export const AuthNavigator = () => {
  const Stack = createNativeStackNavigator<AuthParamList>();
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: theme.colors.gc_4,
        },
      }}
    >
      <Stack.Screen
        name={AuthNavigations.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AuthNavigations.KAKAO_LOGIN}
        component={KakaoLogin}
        options={{
          header: ({ navigation }) => (
            <Header left={<Icon.Prev />} center={'카카오 로그인'} onLeftPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name={AuthNavigations.GOOGLE_LOGIN}
        component={GoogleLogin}
        options={{
          header: ({ navigation }) => (
            <Header left={<Icon.Prev />} center={'구글 로그인'} onLeftPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name={AuthNavigations.OWNER_PROFILE}
        component={RegisterOwnerProfile}
        options={{
          header: ({ navigation }) => <Header left={<Icon.Prev />} onLeftPress={() => navigation.goBack()} />,
        }}
      />
    </Stack.Navigator>
  );
};
