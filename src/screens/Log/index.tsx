import styled from '@emotion/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { Text, Pressable } from 'react-native';
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
  const [text, setText] = useState('밤톨이');
  return (
    <SafeContainer>
      <FormInput placeholder="이름을 입력하세요" value={text} onChangeText={setText} multiline />
    </SafeContainer>
  );
};
