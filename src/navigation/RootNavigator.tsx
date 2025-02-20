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
  //   setTimeout(() => {
  //     setIsAppFirstLaunch(false);
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   if (!isAppFirstLaunch) {
  //     SplashScreen.hide();
  //   }
  // }, [isAppFirstLaunch]);

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
