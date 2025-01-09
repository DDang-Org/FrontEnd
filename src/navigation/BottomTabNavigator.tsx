/* eslint-disable react/no-unstable-nested-components */

import { css } from '@emotion/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { IconButtonProps } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/Ionicons';
import FamilyDangScreen from '~screens/FamilyDangScreen';
import HomeNavigator from '~screens/HomeScreen';
import LogScreen from '~screens/LogScreen';
import MyPageScreen from '~screens/MyPage';
import SocialScreen from '~screens/SocialScreen';

export type TabBarParamList = {
  Home: undefined;
  Log: undefined;
  Social: undefined;
  FamilyDang: undefined;
  MyPage: undefined;
  Profile: { userId: string };
};

const Tab = createBottomTabNavigator<TabBarParamList>();

const TabIcon = ({ focused, name, size, color }: { focused: boolean; name: string } & IconButtonProps) => (
  <View
    style={css`
      align-items: center;
      justify-content: center;
    `}
  >
    <Icon name={`${name}${focused ? '' : '-outline'}`} size={size} color={color} />
  </View>
);

export default function BottomTabNavigator() {
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
        component={LogScreen}
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
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon name="person" size={size} color={color} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
