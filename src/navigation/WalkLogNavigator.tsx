import { useTheme } from '@emotion/react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '~components/Common/Header';
import { Icon } from '~components/Common/Icons';
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
        options={() => ({
          headerShown: false,
        })}
        name={WalkLogNavigations.LogHome}
        component={LogHome}
      />
      <Stack.Screen
        options={() => ({
          headerStyle: {
            backgroundColor: theme.colors.lighten_3,
          },
          header: ({ navigation }) => (
            <Header
              left={<Icon.Prev />}
              backgroundColorType="default"
              center={'산책 분석'}
              onLeftPress={() => navigation.goBack()}
            />
          ),
          headerTitle: '산책 분석',
        })}
        name={WalkLogNavigations.Stats}
        component={Stats}
      />
    </Stack.Navigator>
  );
};
