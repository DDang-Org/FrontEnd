import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterOwnerProfile } from '~screens/RegisterOwner/OwnerProfile';
import { useTheme } from '@emotion/react';

export type RegisterOwnerParamList = {
  OwnerProfile: { screen?: keyof RegisterOwnerParamList };
  OwnerAvatarModal: { selectedAvatar?: number };
};

export const RegisterOwnerNavigator = () => {
  const Stack = createNativeStackNavigator<RegisterOwnerParamList>();
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true, // 헤더 표시
        headerBackVisible: true, // 뒤로가기 버튼 활성화
        contentStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: theme.colors.font_1,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'SUIT-Bold',
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen
        name="OwnerProfile"
        component={RegisterOwnerProfile}
        options={{ title: '견주정보입력', headerShown: false }}
      />
    </Stack.Navigator>
  );
};
