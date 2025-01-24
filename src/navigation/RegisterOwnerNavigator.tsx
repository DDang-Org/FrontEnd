import { createNativeStackNavigator } from "@react-navigation/native-stack";


export type RegisterOwnerParamList = {
    Home:undefined;
    OwnerProfile:undefined;
    OwnerAvatarModal:undefined;
};

export const RegisterOwnerNavigator = () => {
    const Stack = createNativeStackNavigator<RegisterOwnerParamList>();


    return (
        <Stack.Navigator>
            <Stack.Screen name="OwnerProfile" component={OwnerProfile} options={{headerBackButtonDisplayMode: 'generic'}}/>
            <Stack.Screen name="OwnerAvatarModal" component={OwnerAvatarProfile}          options={{
            presentation: 'modal',
            title: 'Modal Screen',
            headerLeft: () => (
              <Button title="X" onPress={() => navigation.goBack()} />
            ),
          }}/>
        </Stack.Navigator>

    );
};