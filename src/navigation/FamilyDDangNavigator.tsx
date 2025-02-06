import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateInviteCode } from '~screens/FamilyDang/CreateInviteCode';
import { Header } from '~components/Common/Header'; // Header 컴포넌트 경로
import { Icon } from '~components/Common/Icons'; // 아이콘 경로
import { Text } from 'react-native'; // Import the Text component from the appropriate library

export type FamilyDdangParamList = {
  CreateInviteCode: undefined;
};

const Stack = createNativeStackNavigator<FamilyDdangParamList>();

const HeaderComponent = () => <Header left={<Icon.Prev />} center={<Text>초대 코드 생성</Text>} fontSize={17} />;

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
