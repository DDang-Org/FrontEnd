import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterOwnerNavigator, RegisterOwnerParamList } from '~navigation/RegisterOwnerNavigator';
import { RegisterDogNavigator } from '~navigation/RegisterDogNavigator';
import { BottomTabNavigator } from '~navigation/BottomTabNavigator';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';

export type RootStackParamList = {
  RegisterOwner: {screen? : keyof RegisterOwnerParamList};
  RegisterDog: { screen?: keyof RegisterDogParamList };
  BottomTab: undefined;
};

export const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  // 현재 RootNavigator에서 조건부 렌더링(if)을 사용하지 않고 모든 네비게이터를 한 번에 등록하도록 설정
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RegisterOwner" component={RegisterOwnerNavigator} />
      <Stack.Screen name="RegisterDog" component={RegisterDogNavigator} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
  