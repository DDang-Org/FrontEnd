import styled from '@emotion/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Text, Pressable, View, Alert } from 'react-native';
import { RESULTS } from 'react-native-permissions';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { usePermission } from '~hooks/usePermission';
import { TabBarParamList } from '~navigation/BottomTabNavigator';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: 'white';
`;

const Test = styled.View`
  flex: 1;
  background-color: white;
`;

type Props = BottomTabScreenProps<TabBarParamList, 'Log'>;

export const LogScreen = ({}: Props) => {
  const { requestAndCheckPermission } = usePermission('PHOTO');

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋',
      position: 'bottom',
    });
  };

  const handleClick = async () => {
    const isGranted = await requestAndCheckPermission();
    if (isGranted) {
      Alert.alert('권한이 승인되었으므로 실행됩니다.');
    }
  };

  return (
    <Test>
      <SafeContainer>
        <Pressable onPress={handleClick} style={{ width: 100, height: 30, backgroundColor: 'black' }}></Pressable>
      </SafeContainer>
    </Test>
  );
};
