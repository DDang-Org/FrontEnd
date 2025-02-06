import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateInviteCode } from '~screens/FamilyDang/CreateInviteCode';
import { Header } from '~components/Common/Header';
import { Icon } from '~components/Common/Icons';
import { Text } from 'react-native';

export type FamilyDdangParamList = {
  CreateInviteCode: undefined;
};

const Stack = createNativeStackNavigator<FamilyDdangParamList>();

const HeaderComponent = () => (
  <Header left={<Icon.Prev />} center={<Text>초대 코드 생성</Text>} backgroundColorType="white" />
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
    </Stack.Navigator>
  );
};
