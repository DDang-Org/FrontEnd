import { useTheme } from '@emotion/react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '~components/Common/Header';
import { Icon } from '~components/Common/Icons';
import { HomeNavigations } from '~constants/navigations';
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
      <Stack.Screen name={HomeNavigations.MAIN} component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name={HomeNavigations.WALK}
        component={WalkScreen}
        options={{ headerBackButtonDisplayMode: 'minimal' }}
      />
      <Stack.Screen
        name={HomeNavigations.NOTIFICATION}
        component={NotificationScreen}
        options={{
          header: ({ navigation }) => (
            <Header left={<Icon.Prev />} center={'알림'} onLeftPress={() => navigation.goBack()} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
