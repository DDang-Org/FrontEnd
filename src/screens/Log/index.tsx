import styled from '@emotion/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBarParamList } from '~navigation/BottomTabNavigator';
import { MultilineInput } from '../../components/Common/MultilineInput/index';
import { PressableInput } from '~components/Common/PressableInput';
import { FormInput } from '../../components/Common/FormInput/index';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

type Props = BottomTabScreenProps<TabBarParamList, 'Log'>;

export const LogScreen = ({}: Props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(text);
  }, [text]);
  return (
    <SafeContainer>
      {/* <MultilineInput onChangeText={setText} value={text} placeholder="멀티라인이니다" />
      <PressableInput
        onPress={() => setText('밤톨이 클릭!!!!')}
        onChangeText={setText}
        placeholder="클릭하세요"
        value={text}
      /> */}
      {/* <FormInput onPress={() => setText('hihi')} placeholder="입력하세요" /> */}
      {/* <FormInput multiline placeholder="입력하세요" value={text} onChangeText={setText} /> */}
      <FormInput placeholder="입력하세요" value={text} onChangeText={setText} />
    </SafeContainer>
  );
};
