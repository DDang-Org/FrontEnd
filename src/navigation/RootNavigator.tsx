import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterDogNavigator } from '~navigation/RegisterDogNavigator';
import { BottomTabNavigator } from '~navigation/BottomTabNavigator';
import { AuthNavigator } from '~navigation/AuthNavigator';
import { useAuth } from '~apis/member/useAuth';

export type RootStackParamList = {
  // Auth: undefined;
  // Login: { screen?: keyof LoginParamList };
  // RegisterOwner: { screen?: keyof RegisterOwnerParamList };
  // FamilyDDang: { screen?: keyof FamilyDdangParamList };
  RegisterDog: undefined;
  BottomTab: undefined;
};

export const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const { isLoggedIn, hasDog } = useAuth();
  // const [isAppFirstLaunch, setIsAppFirstLaunch] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsAppFirstLaunch(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (isAppFirstLaunch) {
  //   return null;
  // }

  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {hasDog && <Stack.Screen name="BottomTab" component={BottomTabNavigator} />}
      {/* <Stack.Screen name="Auth" component={AuthNavigator} /> */}
      {/* <Stack.Screen name="FamilyDDang" component={FamilyDDangNavigator} /> */}
      <Stack.Screen name="RegisterDog" component={RegisterDogNavigator} />
      {/* <Stack.Screen
        name="RegisterOwner"
        component={RegisterOwnerNavigator}
        options={{ headerShown: true, headerTitle: '' }}
      /> */}
      {/* <Stack.Screen name="Login" component={LoginNavigator} options={{ headerTitle: '' }} /> */}
    </Stack.Navigator>
  );
};
