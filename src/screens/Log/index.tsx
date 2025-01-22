import styled from '@emotion/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBarParamList } from '~navigation/BottomTabNavigator';
import { MultilineInput } from '../../components/Common/MultilineInput/index';
import { PressableInput } from '~components/Common/PressableInput';
import { FormInput } from '../../components/Common/FormInput/index';
import { GenderSelectButton } from '~components/Common/GenderSelectButton';
import { Dimensions, ScrollView, View, Pressable, PressableProps } from 'react-native';
import Toast from 'react-native-toast-message';
import { BaseInput } from '~components/Common/BaseInput';
import { FormErrorToast } from '~components/Common/FormErrorToast';
import { ActionButton } from '~components/Common/ActionButton';
import { useToast } from '~hooks/useToast';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

type Props = BottomTabScreenProps<TabBarParamList, 'Log'>;

export const LogScreen = ({}: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');
  const buttonRef = useRef<React.ElementRef<typeof View>>(null);
  const { showFormErrorToast } = useToast();

  const handleOnPress = () => {
    showFormErrorToast('비밀번호는 4~16자 범위입니다.', buttonRef);
  };

  return (
    <SafeContainer style={{ paddingHorizontal: 20 }}>
      <ScrollView style={{ height: 3000, width: '100%' }}>
        {/* <MultilineInput onChangeText={setText} value={text} placeholder="멀티라인이니다" />
        <PressableInput
          onPress={() => setText('밤톨이 클릭!!!!')}
          onChangeText={setText}
          placeholder="클릭하세요"
          value={text}
        /> */}
        <BaseInput onChangeText={setText} value={text} placeholder="입력하세요" />
        <MultilineInput multiline placeholder="입력하세요" value={text} onChangeText={setText} />
        <FormInput onChangeText={setText} placeholder="입력하세요" value={text} />
        <Pressable
          style={{ width: '100%', height: 80, backgroundColor: 'blue', marginTop: 300, alignItems: 'center' }}
          onPress={handleOnPress}
        >
          <View ref={buttonRef} style={{ width: 100, height: 30, backgroundColor: 'yellow', marginTop: 50 }} />
        </Pressable>
      </ScrollView>
    </SafeContainer>
  );
};
