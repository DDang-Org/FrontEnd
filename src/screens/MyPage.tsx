import styled from '@emotion/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBarParamList } from '../BottomTabNavigator';
import { Text } from 'react-native';

type Props = BottomTabScreenProps<TabBarParamList, 'MyPage'>;

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function MyPageScreen({ navigation }: Props) {
  return (
    <SafeContainer edges={['top']}>
      <Text>This is My profile</Text>
    </SafeContainer>
  );
}
