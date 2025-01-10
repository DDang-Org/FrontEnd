import styled from '@emotion/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBarParamList } from '~navigation/BottomTabNavigator';

type Props = BottomTabScreenProps<TabBarParamList, 'MyPage'>;

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MyPageScreen = ({}: Props) => {
  return (
    <SafeContainer edges={['top']}>
      <Text>This is My profile</Text>
    </SafeContainer>
  );
};
