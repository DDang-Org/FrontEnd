import { useTheme } from '@emotion/react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SocialNavigations } from '~constants/navigations';
import { SocialHomeScreen } from '~screens/Social';
import { ChatRoomScreen } from '~screens/Social/ChatRoom';

export type SocialParamList = {
  SocialHome: undefined;
  ChatRoom: { userId: number };
};

export const SocialNavigator = () => {
  const Stack = createNativeStackNavigator<SocialParamList>();
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SocialNavigations.SOCIAL_HOME} component={SocialHomeScreen} />
      <Stack.Screen
        name={SocialNavigations.CHATROOM}
        component={ChatRoomScreen}
        options={{ contentStyle: { backgroundColor: theme.colors.gc_4 } }}
      />
    </Stack.Navigator>
  );
};
