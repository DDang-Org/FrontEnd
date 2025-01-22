import styled from '@emotion/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';
import { Text, Pressable, View, Alert, Platform } from 'react-native';
import { RESULTS } from 'react-native-permissions';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { useNotificationPermission } from '~hooks/useNotificationPermission';
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
  const { requestAndCheckPermission } = usePermission();
  const { permissionStatus, requestPermission } = useNotificationPermission();

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋',
      position: 'bottom',
    });
  };

  useEffect(() => {
    console.log('권한이 변경되었습니다', permissionStatus);
  }, [permissionStatus]);

  const handleClick = async () => {
    const isGranted = await requestAndCheckPermission('CAMERA');
    if (isGranted) {
      Alert.alert('권한이 승인되었으므로 실행됩니다.'); // 권한만 받고 추가 작업은 하지 않을거라면 생략
    }
  };

  return (
    <Test>
      <SafeContainer>
        <Pressable onPress={requestPermission} style={{ width: 100, height: 30, backgroundColor: 'black' }}></Pressable>
      </SafeContainer>
    </Test>
  );
};
