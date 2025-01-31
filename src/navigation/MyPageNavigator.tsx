import { useTheme } from '@emotion/react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyPageScreen } from '~screens/MyPage';
import { BlockScreen } from '~screens/MyPage/Block';
import { DogProfileEditScreen } from '~screens/MyPage/DogProfileEdit';
import { ProfileEditScreen } from '~screens/MyPage/ProfileEdit';
import { SettingScreen } from '~screens/MyPage/Setting';

export type MyPageStackProps = {
  Main: undefined;
  Setting: undefined;
  Block: undefined;
  ProfileEdit: undefined;
  DogProfileEdit: undefined;
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
      <Stack.Screen name="Setting" component={SettingScreen} options={{ title: '설정' }} />
      <Stack.Screen name="Block" component={BlockScreen} options={{ title: '차단 목록' }} />
      <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} options={{ title: '내 정보 수정' }} />
      <Stack.Screen name="DogProfileEdit" component={DogProfileEditScreen} options={{ title: '반려견 정보 수정' }} />
    </Stack.Navigator>
  );
};
