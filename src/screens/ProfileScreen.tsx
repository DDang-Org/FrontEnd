import styled from '@emotion/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBarParamList } from '~navigation/BottomTabNavigator';

type Props = BottomTabScreenProps<TabBarParamList, 'Profile'>;

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function ProfileScreen({ route }: Props) {
  return (
    <SafeContainer>
      <Text>This is {route.params.userId}'s profile</Text>
    </SafeContainer>
  );
}

// const styles = StyleSheet.create({});
