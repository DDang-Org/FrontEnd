/* eslint-disable react/no-unstable-nested-components */

import { css } from '@emotion/native';
import { useTheme } from '@emotion/react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { IconButtonProps } from 'react-native-vector-icons/Icon';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Prev from '~assets/icons/prev.svg';
import { HomeNavigator } from '~navigation/HomeNavigator';
import { MyPageNavigator } from '~navigation/MyPageNavigator';
import { FamilyDangScreen } from '~screens/FamilyDang';
import { ProfileScreen } from '~screens/Profile';
import { WalkLogNavigator } from '~navigation/WalkLogNavigator';
import { SocialScreen } from '~screens/Social';
import { FamilyDdangParamList } from '~navigation/FamilyDDangNavigator';
import FamilyDDangHeaderComponent from '~screens/FamilyDang/Header/FamilyDDangHeaderComponent';

export type TabBarParamList = {
  Home: undefined;
  Log: undefined;
  Social: undefined;
  FamilyDang: undefined;
  MyPage: undefined;
  Profile: { userId: number };
  FamilyDDang: { screen?: keyof FamilyDdangParamList };
};

const Tab = createBottomTabNavigator<TabBarParamList>();

const TabIcon = ({ focused, name, size, color }: { focused: boolean; name: string } & IconButtonProps) => (
  <View
    style={css`
      align-items: center;
      justify-content: center;
    `}
  >
    <Icon2 name={`${name}${focused ? '' : '-outline'}`} size={size} color={color} />
  </View>
);

export const BottomTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#783D16',
        tabBarLabelPosition: 'below-icon',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, focused, size }) => <TabIcon name="home" size={size} color={color} focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Log"
        component={WalkLogNavigator}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon name="calendar" size={size} color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Social"
        component={SocialScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon name="people" size={size} color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="FamilyDang"
        component={FamilyDangScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon name="heart" size={size} color={color} focused={focused} />
          ),
          header: () => <FamilyDDangHeaderComponent />,
          headerShown: true,
        }}
      />

      <Tab.Screen
        name="MyPage"
        component={MyPageNavigator}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon name="person" size={size} color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          tabBarButton: () => null,
          tabBarItemStyle: {
            display: 'none',
          },
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.font_1,
          headerStyle: {
            backgroundColor: theme.colors.lighten_3,
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: 'SUIT-Bold',
            fontSize: 18,
          },
          headerLeft: () => (
            <View style={{ paddingLeft: 14 }}>
              <Prev onPress={() => navigation.goBack()} />
            </View>
          ),
          animation: 'shift',
        })}
      />
    </Tab.Navigator>
  );
};
