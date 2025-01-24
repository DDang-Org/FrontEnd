import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegisterOwnerProfile } from "~screens/RegisterOwner/OwnerProfile";
import { OwnerAvatarModal } from "~screens/RegisterOwner/AvatarModal";

export type RegisterOwnerParamList = {
  OwnerProfile: undefined;
  OwnerAvatarModal: undefined;
};

export const RegisterOwnerNavigator = () => {
  const Stack = createNativeStackNavigator<RegisterOwnerParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="OwnerProfile" 
        component={RegisterOwnerProfile} 
        options={{ headerBackButtonDisplayMode: 'generic' }} 
      />
      <Stack.Screen 
        name="OwnerAvatarModal" 
        component={OwnerAvatarModal} 
        options={{
          presentation: 'modal',
          title: 'Modal Screen',
        }} 
      />
    </Stack.Navigator>
  );
};
