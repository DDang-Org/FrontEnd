import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RegisterDogNavigator } from '~navigation/RegisterDogNavigator';
import { BottomTabNavigator } from '~navigation/BottomTabNavigator';
import { AuthNavigator } from '~navigation/AuthNavigator';
import { useAuth } from '~apis/member/useAuth';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
  RegisterDog: undefined;
  BottomTab: undefined;
};

export const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const { isLoggedIn, hasDog, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        SplashScreen.hide();
      }, 200);
    }
  }, [isLoading]);

  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  if (!hasDog) {
    return <RegisterDogNavigator />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="RegisterDog" component={RegisterDogNavigator} />
    </Stack.Navigator>
  );
};
