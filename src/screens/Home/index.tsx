import styled from '@emotion/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchUser } from '~apis/auth/fetchUser';
import { DogListModal } from '~components/Common/ListModal';
import { HomeStackProps } from '~navigation/HomeNavigator';

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
      <Button title="산책하기" onPress={() => navigation.navigate('Walk')} />
      <Text>{JSON.stringify(data)}</Text>
      <DogListModal
        isVisible={true}
        onClose={() => {}}
        dogs={[
          {
            id: '1',
            name: '멍멍이',
            breed: '멍멍이',
            age: '1',
            gender: '남',
            walkCount: 1,
            imageUrl: 'https://cataas.com/cat/pbrosoqOlUUtR5XJ',
          },
          {
            id: '2',
            name: '멍멍이',
            breed: '멍멍이',
            age: '1',
            gender: '남',
            walkCount: 1,
            imageUrl: 'https://cataas.com/cat/pbrosoqOlUUtR5XJ',
          },
          {
            id: '3',
            name: '멍멍이',
            breed: '멍멍이',
            age: '1',
            gender: '남',
            walkCount: 1,
            imageUrl: 'https://cataas.com/cat/pbrosoqOlUUtR5XJ',
          },
        ]}
        onSelectDog={() => {}}
        type="default"
      />
    </SafeContainer>
  );
};
