import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FetchMyDogInfoResponseType } from '~apis/dog/fetchMyDogInfo';
import { Header } from '~components/Common/Header';
import { Icon } from '~components/Common/Icons';
import { RegisterDogNavigations } from '~constants/navigations';
import { DogProfileProvider } from '~providers/DogProfileProvider';
import { EditDogProfile } from '~screens/MyPage/EditDogProfile';
import { RegisterDog } from '~screens/RegisterDog';
import { BasicProfile } from '~screens/RegisterDog/BasicProfile';
import { DetailProfile } from '~screens/RegisterDog/DetailProfile';
import { DogConfirmation } from '~screens/RegisterDog/DogConfirmation';

export type RegisterDogParamList = {
  Home: undefined;
  BasicProfile: undefined;
  DetailProfile: undefined;
  InviteCode: { dogId: number };
  DogConfirmation: { inviteCode: string; dogInfos: FetchMyDogInfoResponseType };
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
          header: ({ navigation }) => <Header left={<Icon.Prev />} onLeftPress={() => navigation.goBack()} />,
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
        <Stack.Screen name={RegisterDogNavigations.INVITE_CODE} component={EditDogProfile} />
        <Stack.Screen name={RegisterDogNavigations.DOG_CONFIRMATION} component={DogConfirmation} />
      </Stack.Navigator>
    </DogProfileProvider>
  );
};
