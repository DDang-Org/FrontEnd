import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '~screens/Home';
import { WalkScreen } from '~screens/Home/WalkScreen';

export type HomeStackProps = {
  Main: undefined;
  Walk: undefined;
};

const Stack = createNativeStackNavigator<HomeStackProps>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Walk" component={WalkScreen} options={{ headerBackButtonDisplayMode: 'minimal' }} />
    </Stack.Navigator>
  );
};
