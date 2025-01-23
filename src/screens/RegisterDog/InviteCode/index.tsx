import { ActionButton } from '~components/Common/ActionButton';
import * as S from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
import React, { useState } from 'react';
import { Button } from 'react-native';
import DatePicker from 'react-native-date-picker';

type InviteCodeProps = NativeStackScreenProps<RegisterDogParamList, typeof RegisterDogNavigations.INVITE_CODE>;

export const InviteCode = ({ navigation }: InviteCodeProps) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <S.InviteCode>
      <ActionButton
        onPress={() => navigation.navigate(RegisterDogNavigations.DOG_CONFIRMATION, { inviteCode: 'asdf' })}
        text="다음"
      />
    </S.InviteCode>
  );
};
