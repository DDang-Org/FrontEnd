import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateInviteCode } from '~screens/FamilyDang/CreateInviteCode';

export type FamilyDdangParamList = {
  CreateInviteCode: undefined;
};

const Stack = createNativeStackNavigator<FamilyDdangParamList>();

export const FamilyDDangNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateInviteCode" component={CreateInviteCode} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
