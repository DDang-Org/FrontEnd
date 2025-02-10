import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateInviteCode } from '~screens/FamilyDang/CreateInviteCode';
import { Header } from '~components/Common/Header';
import { Icon } from '~components/Common/Icons';
import { Text } from 'react-native';
import { FamilySetting } from '~screens/FamilyDang/FamilySetting';
import { FamilyCaptain } from '~screens/FamilyDang/FamilySetting/FamilyCaptain';
import { FamilyOut } from '~screens/FamilyDang/FamilySetting/FamilyOut';

export type FamilyDdangParamList = {
  CreateInviteCode: undefined;
  FamilySetting: undefined;
  FamilyCaptain: undefined;
  FamilyOut: undefined;
};

const Stack = createNativeStackNavigator<FamilyDdangParamList>();

const HeaderComponent = () => (
  <Header left={<Icon.Prev />} center={<Text>초대 코드 생성</Text>} backgroundColorType="white" />
);

const HeaderComponent2 = () => (
  <Header left={<Icon.Prev />} center={<Text>패밀리댕 설정</Text>} backgroundColorType="white" />
);
const HeaderComponent3 = () => (
  <Header left={<Icon.Prev />} center={<Text>패밀리 나가기</Text>} backgroundColorType="white" />
);

const HeaderComponent4 = () => (
  <Header left={<Icon.Prev />} center={<Text>패밀리 퇴출하기</Text>} backgroundColorType="white" />
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
      <Stack.Screen
        name="FamilyCaptain"
        component={FamilyCaptain}
        options={{
          header: HeaderComponent3,
        }}
      />
      <Stack.Screen
        name="FamilyOut"
        component={FamilyOut}
        options={{
          header: HeaderComponent4,
        }}
      />
    </Stack.Navigator>
  );
};
