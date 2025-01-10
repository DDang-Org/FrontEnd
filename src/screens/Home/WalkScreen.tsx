import styled from '@emotion/native';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const WalkScreen = () => {
  return (
    <SafeContainer>
      <Text>WalkScreen</Text>
    </SafeContainer>
  );
};
