import styled from '@emotion/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBarParamList } from '~navigation/BottomTabNavigator';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: 'white';
`;

type Props = BottomTabScreenProps<TabBarParamList, 'Log'>;

export const LogScreen = ({}: Props) => {
  return <SafeContainer></SafeContainer>;
};
