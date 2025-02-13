import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterOwnerNavigator, RegisterOwnerParamList } from '~navigation/Auth/RegisterOwnerNavigator';
import { RegisterDogNavigator } from '~navigation/RegisterDogNavigator';
import { BottomTabNavigator } from '~navigation/BottomTabNavigator';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { LoginNavigator, LoginParamList } from '~navigation/Auth/LoginNavigator';
import { FamilyDDangNavigator } from '~navigation/FamilyDDangNavigator';
import { FamilyDdangParamList } from '~navigation/FamilyDDangNavigator';
import { AuthNavigator } from '~navigation/AuthNavigator';

export type RootStackParamList = {
  Auth: undefined;
  Login: { screen?: keyof LoginParamList };
  RegisterOwner: { screen?: keyof RegisterOwnerParamList };
  RegisterDog: { screen?: keyof RegisterDogParamList };
  BottomTab: undefined;
  FamilyDDang: { screen?: keyof FamilyDdangParamList };
};

export const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="FamilyDDang" component={FamilyDDangNavigator} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="RegisterDog" component={RegisterDogNavigator} />
      <Stack.Screen
        name="RegisterOwner"
        component={RegisterOwnerNavigator}
        options={{ headerShown: true, headerTitle: '' }}
      />
      <Stack.Screen name="Login" component={LoginNavigator} options={{ headerTitle: '' }} />
    </Stack.Navigator>
  );
};
