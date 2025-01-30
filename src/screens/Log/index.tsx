import styled from '@emotion/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WalkLogNavigations } from '~constants/navigations';
import { TabBarParamList } from '~navigation/BottomTabNavigator';
import { WalkLogParamList } from '~navigation/WalkLogNavigator';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: 'white';
`;

// type Props = BottomTabScreenProps<TabBarParamList, 'Log'>;
type LogProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabBarParamList, 'Log'>,
  NativeStackNavigationProp<WalkLogParamList, typeof WalkLogNavigations.LogHome>
>;

export const LogHome = () => {
  const navigation = useNavigation<LogProps>;
  return <SafeContainer></SafeContainer>;
};
