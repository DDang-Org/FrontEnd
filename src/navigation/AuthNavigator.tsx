import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@emotion/react';
import { Login } from '~screens/Login';
import { RegisterOwnerProfile } from '~screens/RegisterOwner/OwnerProfile';
import { KakaoLogin } from '~screens/Auth/KakaoLogin';

export type AuthParamList = {
  Login: undefined;
  KakaoLogin: undefined;
  OwnerProfile: undefined;
};

export const AuthNavigator = () => {
  const Stack = createNativeStackNavigator<AuthParamList>();
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: 'white',
        },
        headerBackButtonDisplayMode: 'minimal',
        headerTintColor: theme.colors.font_1,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerBackButtonMenuEnabled: true,
        headerTitleStyle: {
          fontFamily: 'SUIT-Bold',
          fontSize: 18,
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
      <Stack.Screen name="KakaoLogin" component={KakaoLogin} options={{ headerTitle: '카카오 로그인' }} />
      <Stack.Screen
        name="OwnerProfile"
        component={RegisterOwnerProfile}
        options={{ title: '견주정보입력', headerShown: false }}
      />
    </Stack.Navigator>
  );
};
