import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RegisterDogNavigator } from '~navigation/RegisterDogNavigator';
import { BottomTabNavigator } from '~navigation/BottomTabNavigator';
import { AuthNavigator } from '~navigation/AuthNavigator';
import { useAuth } from '~apis/member/useAuth';

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
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
      <Stack.Screen name="RegisterDog" component={RegisterDogNavigator} />
    </Stack.Navigator>
  );
};
