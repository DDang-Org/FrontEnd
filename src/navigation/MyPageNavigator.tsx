import { useTheme } from '@emotion/react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyPageScreen } from '~screens/MyPage';
import { EntryScreen } from '~screens/MyPage/Entry';
import { SettingScreen } from '~screens/MyPage/Setting';

export type MyPageStackProps = {
  Main: undefined;
  Entry: undefined;
  Setting: undefined;
  Block: undefined;
};

const Stack = createNativeStackNavigator<MyPageStackProps>();

export const MyPageNavigator = () => {
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
      <Stack.Screen name="Main" component={MyPageScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Entry" component={EntryScreen} options={{ title: '설정' }} />
      <Stack.Screen name="Setting" component={SettingScreen} options={{ title: '설정' }} />
      <Stack.Screen name="Block" component={SettingScreen} options={{ title: '차단 목록' }} />
    </Stack.Navigator>
  );
};
