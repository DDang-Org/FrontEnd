import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterOwnerNavigator, RegisterOwnerParamList } from '~navigation/Auth/RegisterOwnerNavigator';
import { RegisterDogNavigator } from '~navigation/RegisterDogNavigator';
import { BottomTabNavigator } from '~navigation/BottomTabNavigator';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { LoginNavigator, LoginParamList } from '~navigation/Auth/LoginNavigator';
import { FamilyDDangNavigator } from '~navigation/FamilyDDangNavigator';
import { FamilyDdangParamList } from '~navigation/FamilyDDangNavigator';

export type RootStackParamList = {
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
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen
        name="RegisterOwner"
        component={RegisterOwnerNavigator}
        options={{ headerShown: true, headerTitle: '' }}
      />
      <Stack.Screen name="RegisterDog" component={RegisterDogNavigator} />
      <Stack.Screen name="Login" component={LoginNavigator} options={{ headerTitle: '' }} />
      <Stack.Screen name="FamilyDDang" component={FamilyDDangNavigator} />
    </Stack.Navigator>
  );
};

// import { RegisterDogNavigator } from '~navigation/RegisterDogNavigator';
// // import { BottomTabNavigator } from '~navigation/BottomTabNavigator';
// // import { LoginNavigator } from '~navigation/Auth/LoginNavigator';
// // import { RegisterOwnerNavigator } from '~navigation/Auth/RegisterOwnerNavigator';
// // import { BottomTabNavigator } from '~navigation/BottomTabNavigator';

// export const RootNavigator = () => {
//   //  const {isLogin, hasDog} = useAuth();
//   // if (isLogin && hasDog) {
//   return (
//     <>
//       {/* <RegisterOwnerNavigator /> */}
//       <RegisterDogNavigator />
//     </>
//   );
//   // }
//   //if (isLogin) {
//   //  return <RegisterDogNavigator/>
//   // }
//   // return <LoginNavigator/>
// };
