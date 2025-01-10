import styled from '@emotion/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchUser } from '~apis/auth/fetchUser';
import { WalkScreen } from '~screens/HomeScreen/WalkScreen';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

type HomeStackProps = {
  Main: undefined;
  Walk: undefined;
};

const Stack = createNativeStackNavigator<HomeStackProps>();

type Props = NativeStackScreenProps<HomeStackProps, 'Main'>;

function HomeScreen({ navigation }: Props) {
  const { data, isPending, isError } = useQuery({
    queryKey: ['HomeData'],
    queryFn: fetchUser,
  });

  if (isPending) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error!</Text>;
  }

  return (
    <SafeContainer>
      <Text>HomeScreen</Text>
      <Button title="산책하기" onPress={() => navigation.navigate('Walk')} />
      <Text>{JSON.stringify(data)}</Text>
    </SafeContainer>
  );
}

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Walk" component={WalkScreen} options={{ headerBackButtonDisplayMode: 'minimal' }} />
    </Stack.Navigator>
  );
};
