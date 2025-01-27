import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegisterOwnerProfile } from "~screens/RegisterOwner/OwnerProfile";
import { OwnerAvatarModal } from "~screens/RegisterOwner/AvatarModal";
import { useTheme } from "@emotion/react";

export type RegisterOwnerParamList = {
  OwnerProfile: {screen? : keyof RegisterOwnerParamList};
  OwnerAvatarModal: undefined;
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
  <Stack.Screen
    name="OwnerAvatarModal"
    component={OwnerAvatarModal}
    options={{
      presentation: 'transparentModal',
      headerShown: false, // 이 화면에서는 헤더를 숨김
      animation: 'slide_from_bottom',
    }}
  />
</Stack.Navigator>

  );
};
