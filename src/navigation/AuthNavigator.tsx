import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '~screens/Login';
import { RegisterOwnerProfile } from '~screens/RegisterOwner/OwnerProfile';
import { KakaoLogin } from '~screens/Auth/KakaoLogin';
import { Icon } from '~components/Common/Icons';
import { Header } from '~components/Common/Header';

export type AuthParamList = {
  Login: undefined;
  KakaoLogin: undefined;
  OwnerProfile: undefined;
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
        name="OwnerProfile"
        component={RegisterOwnerProfile}
        options={{
          header: ({ navigation }) => <Header left={<Icon.Prev />} onLeftPress={() => navigation.goBack()} />,
        }}
      />
    </Stack.Navigator>
  );
};
