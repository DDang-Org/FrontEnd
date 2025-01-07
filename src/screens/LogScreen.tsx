import styled from '@emotion/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBarParamList } from '../BottomTabNavigator';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

type Props = BottomTabScreenProps<TabBarParamList, 'Log'>;

export default function LogScreen({ navigation }: Props) {
  return (
    <SafeContainer>
      <Text>LogScreen</Text>
    </SafeContainer>
  );
}
