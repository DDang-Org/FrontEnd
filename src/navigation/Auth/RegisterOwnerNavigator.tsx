import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterOwnerProfile } from '~screens/RegisterOwner/OwnerProfile';
import { OwnerAvatarModal } from '~screens/RegisterOwner/AvatarModal';
import { useTheme } from '@emotion/react';

export type RegisterOwnerParamList = {
  OwnerProfile: { screen?: keyof RegisterOwnerParamList };
  OwnerAvatarModal: undefined;
};

export const RegisterOwnerNavigator = () => {
  const Stack = createNativeStackNavigator<RegisterOwnerParamList>();
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: 'white',
        },
        headerBackButtonDisplayMode: 'minimal',
        headerTintColor: theme.colors.font_1,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerBackButtonMenuEnabled: true,
        headerTitleStyle: {
          fontFamily: 'SUIT-Bold',
          fontSize: 18,
        },
      }}
    >
      {/* OwnerProfile 화면 */}
      <Stack.Screen name="OwnerProfile" component={RegisterOwnerProfile} options={{ title: '견주정보입력' }} />

      {/* OwnerAvatarModal 화면 */}
      <Stack.Screen
        name="OwnerAvatarModal"
        component={OwnerAvatarModal}
        options={{
          presentation: 'transparentModal', // 투명한 배경으로 설정
          headerShown: false, // 기본 헤더 숨김
          animation: 'slide_from_bottom', // 아래에서 위로 슬라이드 애니메이션
        }}
      />
    </Stack.Navigator>
  );
};
