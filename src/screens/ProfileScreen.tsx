import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import { TabBarParamList } from '../BottomTabNavigator';
import styled from '@emotion/native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = BottomTabScreenProps<TabBarParamList, 'Profile'>;

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function ProfileScreen({ navigation, route }: Props) {
  return (
    <SafeContainer>
      <Text>This is {route.params.userId}'s profile</Text>
    </SafeContainer>
  );
}

// const styles = StyleSheet.create({});
