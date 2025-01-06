import React from 'react';
import { Text, View } from 'react-native';
import { TabBarParamList } from '../types/RootStackParamList';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type Props = BottomTabScreenProps<TabBarParamList, 'MyPage'>;

export default function MyPageScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>This is My profile</Text>
    </View>
  );
}

// const styles = StyleSheet.create({});
