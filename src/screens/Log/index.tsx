import styled from '@emotion/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBarParamList } from '~navigation/BottomTabNavigator';
import { MultilineInput } from '../../components/Common/MultilineInput/index';
import { PressableInput } from '~components/Common/PressableInput';
import { FormInput } from '../../components/Common/FormInput/index';
import { GenderSelectButton } from '~components/Common/GenderSelectButton';
import { Dimensions, View } from 'react-native';
import Toast from 'react-native-toast-message';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

type Props = BottomTabScreenProps<TabBarParamList, 'Log'>;

export const LogScreen = ({}: Props) => {
  const [isActive, setIsActive] = useState(false);
  const wid = Dimensions.get('screen').width;
  useEffect(() => {
    console.log(isActive);
    Toast.show({
      type: 'error',
      text1: '위치 권한을 허용해주세요',
      text2: '권한을 허용했는지 확인해주세요. 설정에서 바꾸시면 됩니다.',
      position: 'top',
      visibilityTime: 2000,
    });
  }, [isActive]);
  return (
    <SafeContainer style={{ paddingHorizontal: 20 }}>
      {/* <MultilineInput onChangeText={setText} value={text} placeholder="멀티라인이니다" />
      <PressableInput
        onPress={() => setText('밤톨이 클릭!!!!')}
        onChangeText={setText}
        placeholder="클릭하세요"
        value={text}
      /> */}
      {/* <FormInput onPress={() => setText('hihi')} placeholder="입력하세요" /> */}
      {/* <FormInput multiline placeholder="입력하세요" value={text} onChangeText={setText} /> */}
      {/* <FormInput placeholder="입력하세요" value={text} onChangeText={setText} /> */}
      <View style={{ flexDirection: 'row', gap: 7 }}>
        <GenderSelectButton
          gender="female"
          direction="row"
          isActive={isActive}
          onPress={() => setIsActive(!isActive)}
        />
        <GenderSelectButton
          gender="male"
          direction="column"
          isActive={isActive}
          onPress={() => setIsActive(!isActive)}
        />
      </View>
    </SafeContainer>
  );
};
