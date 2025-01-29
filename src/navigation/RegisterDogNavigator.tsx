import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterDogNavigations } from '~constants/navigations';
import { DogProfileProvider } from '~providers/DogProfileProvider';
import { CreateInviteCode } from '~screens/FamilyDang/CreateInviteCode';
import { RegisterDog } from '~screens/RegisterDog';
import { DetailProfile } from '~screens/RegisterDog/DetailProfile';
import { DogConfirmation } from '~screens/RegisterDog/DogConfirmation';
import { InviteCode } from '~screens/RegisterDog/InviteCode';

export type RegisterDogParamList = {
  Home: undefined;
  BasicProfile: undefined;
  DetailProfile: undefined;
  InviteCode: undefined;
  DogConfirmation: { inviteCode: string };
};

export const RegisterDogNavigator = () => {
  const Stack = createNativeStackNavigator<RegisterDogParamList>();

  return (
    <DogProfileProvider>
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
        <Stack.Screen name={RegisterDogNavigations.BASIC_PROFILE} component={CreateInviteCode} />
        <Stack.Screen name={RegisterDogNavigations.DETAIL_PROFILE} component={DetailProfile} />
        <Stack.Screen name={RegisterDogNavigations.INVITE_CODE} component={InviteCode} />
        <Stack.Screen name={RegisterDogNavigations.DOG_CONFIRMATION} component={DogConfirmation} />
      </Stack.Navigator>
    </DogProfileProvider>
  );
};
