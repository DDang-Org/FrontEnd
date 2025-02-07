import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateInviteCode } from '~screens/FamilyDang/CreateInviteCode';
import { Header } from '~components/Common/Header';
import { Icon } from '~components/Common/Icons';
import { Text } from 'react-native';
import { FamilySetting } from '~screens/FamilyDang/FamilySetting';

export type FamilyDdangParamList = {
  CreateInviteCode: undefined;
  FamilySetting: undefined;
};

const Stack = createNativeStackNavigator<FamilyDdangParamList>();

const HeaderComponent = () => (
  <Header left={<Icon.Prev />} center={<Text>초대 코드 생성</Text>} backgroundColorType="white" />
);

const HeaderComponent2 = () => (
  <Header left={<Icon.Prev />} center={<Text>패밀리댕 설정</Text>} backgroundColorType="white" />
);

export const FamilyDDangNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateInviteCode"
        component={CreateInviteCode}
        options={{
          header: HeaderComponent,
        }}
      />
      <Stack.Screen
        name="FamilySetting"
        component={FamilySetting}
        options={{
          header: HeaderComponent2,
        }}
      />
    </Stack.Navigator>
  );
};
