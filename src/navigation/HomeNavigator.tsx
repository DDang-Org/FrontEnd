import { useTheme } from '@emotion/react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '~screens/Home';
import { NotificationScreen } from '~screens/Home/Notification';
import { WalkScreen } from '~screens/Home/WalkScreen';

export type HomeStackProps = {
  Main: undefined;
  Walk: undefined;
  Notification: undefined;
};

const Stack = createNativeStackNavigator<HomeStackProps>();

export const HomeNavigator = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackButtonDisplayMode: 'minimal',
        headerTintColor: theme.colors.font_1,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerBackButtonMenuEnabled: true,
        headerTitleStyle: {
          fontFamily: 'SUIT-Bold',
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen name="Main" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Walk" component={WalkScreen} options={{ headerBackButtonDisplayMode: 'minimal' }} />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: '알림',
        }}
      />
    </Stack.Navigator>
  );
};
