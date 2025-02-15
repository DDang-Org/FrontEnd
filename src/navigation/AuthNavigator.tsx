import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterOwnerProfile } from '~screens/Auth/OwnerProfile';
import { KakaoLogin } from '~screens/Auth/KakaoLogin';
import { Icon } from '~components/Common/Icons';
import { Header } from '~components/Common/Header';
import { Login } from '~screens/Auth/Login';
import { GoogleLogin } from '~screens/Auth/GoogleLogin/styles';

export type AuthParamList = {
  Login: undefined;
  KakaoLogin: undefined;
  GoogleLogin: undefined;
  OwnerProfile: { email: string; provider: string };
};

export const AuthNavigator = () => {
  const Stack = createNativeStackNavigator<AuthParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="KakaoLogin"
        component={KakaoLogin}
        options={{
          header: ({ navigation }) => (
            <Header left={<Icon.Prev />} center={'카카오 로그인'} onLeftPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="GoogleLogin"
        component={GoogleLogin}
        options={{
          header: ({ navigation }) => (
            <Header left={<Icon.Prev />} center={'구글 로그인'} onLeftPress={() => navigation.goBack()} />
          ),
        }}
      />
      <Stack.Screen
        name="OwnerProfile"
        component={RegisterOwnerProfile}
        options={{
          header: ({ navigation }) => <Header left={<Icon.Prev />} onLeftPress={() => navigation.goBack()} />,
        }}
      />
    </Stack.Navigator>
  );
};
