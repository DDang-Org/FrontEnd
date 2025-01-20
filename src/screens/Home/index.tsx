import styled from '@emotion/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';
import { Alert, Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchUser } from '~apis/auth/fetchUser';
import { HomeStackProps } from '~navigation/HomeNavigator';
import FormInput from '../../components/Common/FormInput/index';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

type Props = NativeStackScreenProps<HomeStackProps, 'Main'>;

export const HomeScreen = ({ navigation }: Props) => {
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
      <FormInput placeholder="gdgdgdgdgd" onPress={() => console.log('클릭')} />
      <Button title="산책하기" onPress={() => navigation.navigate('Walk')} />
      <Text>{JSON.stringify(data)}</Text>
    </SafeContainer>
  );
};
