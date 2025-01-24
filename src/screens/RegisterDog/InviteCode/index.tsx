import { ActionButton } from '~components/Common/ActionButton';
import * as S from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
import { TextBold } from '~components/Common/Text';
import FormInput from '~components/Common/FormInput';
import { useState } from 'react';
import { View } from 'react-native';

type InviteCodeProps = NativeStackScreenProps<RegisterDogParamList, typeof RegisterDogNavigations.INVITE_CODE>;

export const InviteCode = ({ navigation }: InviteCodeProps) => {
  const [inviteCode, setInviteCode] = useState('');

  return (
    <S.InviteCode>
      <S.CodeInputArea>
        <S.TextWrapper>
          <TextBold fontSize={24}>가족에게 받은</TextBold>
          <TextBold fontSize={24}>코드를 입력해주세요.</TextBold>
        </S.TextWrapper>
        <FormInput onChangeText={setInviteCode} value={inviteCode} placeholder="가족코드 입력" />
      </S.CodeInputArea>
      <ActionButton
        onPress={() => navigation.navigate(RegisterDogNavigations.DOG_CONFIRMATION, { inviteCode: inviteCode })}
        text="다음"
      />
    </S.InviteCode>
  );
};
