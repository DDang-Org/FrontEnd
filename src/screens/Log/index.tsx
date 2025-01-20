import styled from '@emotion/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormInput from '~components/Common/FormInput';
import { TabBarParamList } from '~navigation/BottomTabNavigator';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

type Props = BottomTabScreenProps<TabBarParamList, 'Log'>;

export const LogScreen = ({}: Props) => {
  return (
    <SafeContainer>
      <FormInput placeholder="이름을 입력하세요" />
      <FormInput placeholder="이름을 입력하세요" />
    </SafeContainer>
  );
};
