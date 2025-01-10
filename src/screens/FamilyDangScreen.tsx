import styled from '@emotion/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBarParamList } from '~navigation/BottomTabNavigator';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

type Props = BottomTabScreenProps<TabBarParamList, 'FamilyDang'>;

export const FamilyDangScreen = ({}: Props) => {
  return (
    <SafeContainer>
      <Text>FamilyDangScreen</Text>
    </SafeContainer>
  );
};
