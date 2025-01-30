import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@emotion/react';
import { Login } from '~screens/Login';

export type LoginParamList = {
  Login: { screen?: keyof LoginParamList };
};

export const LoginNavigator = () => {
  const Stack = createNativeStackNavigator<LoginParamList>();
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
    </Stack.Navigator>
  );
};
