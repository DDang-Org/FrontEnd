import styled from '@emotion/native';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function WalkScreen() {
  return (
    <SafeContainer>
      <Text>WalkScreen</Text>
    </SafeContainer>
  );
}
