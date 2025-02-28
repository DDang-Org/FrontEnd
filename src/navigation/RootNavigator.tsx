import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RegisterDogNavigator, RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { BottomTabNavigator, TabBarParamList } from '~navigation/BottomTabNavigator';
import { AuthNavigator } from '~navigation/AuthNavigator';
import { useAuth } from '~apis/member/useAuth';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigatorScreenParams } from '@react-navigation/native';
import { RootNavigations } from '~constants/navigations';

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
  RegisterDog: NavigatorScreenParams<RegisterDogParamList>;
  BottomTab: NavigatorScreenParams<TabBarParamList>;
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
      <Stack.Screen name={RootNavigations.BOTTOM_TAB} component={BottomTabNavigator} />
      <Stack.Screen name={RootNavigations.REGISTER_DOG} component={RegisterDogNavigator} />
    </Stack.Navigator>
  );
};
