import { useTheme } from '@emotion/react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import { Icon } from '~components/Common/Icons';
import { DogProfile } from '~components/Log/DogProfile';
import { WalkLogNavigations } from '~constants/navigations';
import { LogHome } from '~screens/Log';
import { Stats } from '~screens/Log/Stats';

export type WalkLogParamList = {
  LogHome: undefined;
  Stats: undefined;
};

export const WalkLogNavigator = () => {
  const Stack = createNativeStackNavigator<WalkLogParamList>();
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        animation: 'slide_from_right',
        presentation: 'card',
      }}
    >
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <DogProfile dogName="밤톨이" imageUri="https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg" />
          ),
          headerTitle: '',
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate(WalkLogNavigations.Stats)}>
              <Icon.Graph />
            </Pressable>
          ),
        })}
        name={WalkLogNavigations.LogHome}
        component={LogHome}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: theme.colors.lighten_3,
          },
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Icon.Prev />
            </Pressable>
          ),
          headerTitle: '산책 분석',
        })}
        name={WalkLogNavigations.Stats}
        component={Stats}
      />
    </Stack.Navigator>
  );
};
