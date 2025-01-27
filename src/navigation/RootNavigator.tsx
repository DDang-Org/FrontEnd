import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterOwnerNavigator, RegisterOwnerParamList } from '~navigation/Auth/RegisterOwnerNavigator';
import { RegisterDogNavigator } from '~navigation/Auth/RegisterDogNavigator';
import { BottomTabNavigator } from '~navigation/BottomTabNavigator';
import { RegisterDogParamList } from '~navigation/Auth/RegisterDogNavigator';
import { LoginNavigator, LoginParamList } from '~navigation/Auth/LoginNavigator';

export type RootStackParamList = {
  Login: { screen?: keyof LoginParamList };
  RegisterOwner: { screen?: keyof RegisterOwnerParamList };
  RegisterDog: { screen?: keyof RegisterDogParamList };
  BottomTab: undefined;
};

export const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  // 현재 RootNavigator에서 조건부 렌더링(if)을 사용하지 않고 모든 네비게이터를 한 번에 등록하도록 설정
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="BottomTab" component={BottomTabNavigator} /> */}

      <Stack.Screen name="Login" component={LoginNavigator}
        options={{ headerTitle:''}}
      />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />

      <Stack.Screen
        name="RegisterOwner"
        component={RegisterOwnerNavigator}
        options={{ headerShown: true, headerTitle: '' }}
      />

      <Stack.Screen name="RegisterDog" component={RegisterDogNavigator} />
    </Stack.Navigator>
  );
};
