import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterDogNavigations } from '~constants/navigations';
import { RegisterDog } from '~screens/RegisterDog';
import { BasicProfile } from '~screens/RegisterDog/BasicProfile';
import { DetailProfile } from '~screens/RegisterDog/DetailProfile';
import { DogConfirmation } from '~screens/RegisterDog/DogConfirmation';
import { InviteCode } from '~screens/RegisterDog/InviteCode';

export type RegisterDogParamList = {
  Home: undefined;
  BasicProfile: undefined;
  DetailProfile: { basicInfo: any };
  InviteCode: undefined;
  DogConfirmation: { inviteCode: string };
};

export const RegisterDogNavigator = () => {
  const Stack = createNativeStackNavigator<RegisterDogParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: 'white',
        },
        headerShadowVisible: false,
        headerTitle: '',
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={RegisterDogNavigations.HOME}
        component={RegisterDog}
      />
      <Stack.Screen name={RegisterDogNavigations.BASIC_PROFILE} component={BasicProfile} />
      <Stack.Screen name={RegisterDogNavigations.DETAIL_PROFILE} component={DetailProfile} />
      <Stack.Screen name={RegisterDogNavigations.INVITE_CODE} component={InviteCode} />
      <Stack.Screen name={RegisterDogNavigations.DOG_CONFIRMATION} component={DogConfirmation} />
    </Stack.Navigator>
  );
};
