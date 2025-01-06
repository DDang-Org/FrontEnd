import React from 'react';
import { Text, View } from 'react-native';
import { TabBarParamList } from '../types/RootStackParamList';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type Props = BottomTabScreenProps<TabBarParamList, 'Profile'>;

export default function ProfileScreen({ navigation, route }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>This is {route.params.username}'s profile</Text>
    </View>
  );
}

// const styles = StyleSheet.create({});
