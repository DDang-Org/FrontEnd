import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { useState } from 'react';
import { View } from 'react-native';
import { FlatList, GestureHandlerRootView, Pressable } from 'react-native-gesture-handler';
import { useWalkLog } from '~apis/log/useWalkLog';
import { Calendar } from '~components/Log/Calendar';
import { DogProfile } from '~components/Log/DogProfile';
import { NoWalkLog } from '~components/Log/NoWalkLog';
import { WalkLogCard } from '~components/Log/WalkLogCard';
import { dateToString } from '~utils/dateFormat';
import { Icon } from '~components/Common/Icons';
import { Header } from '~components/Common/Header';
import { WalkLogNavigations } from '~constants/navigations';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { WalkLogParamList } from '~navigation/WalkLogNavigator';
import { useMyDogInfo } from '~apis/dog/useMyDogInfo';
import { DogListModal } from '../../components/Common/ListModal/index';
import { getAge } from '~utils/getAge';

type NavigationProps = NativeStackNavigationProp<WalkLogParamList>;

export const LogHome = () => {
  const [date, setDate] = useState(new Date());
  const myDogs = useMyDogInfo();
  const [selectedDogIndex, setSelectedDogIndex] = useState(0);
  const { logDetails, walkDates } = useWalkLog(selectedDogIndex, dateToString(date, '-'));
  const [dogListOpened, setDogListOpened] = useState(false);
  const navigation = useNavigation<NavigationProps>();

  const handleSelectDog = (selectedDog: any) => {
    myDogs.forEach((dog, index) => {
      if (dog.dogId == selectedDog.id) {
        setSelectedDogIndex(index);
        setDogListOpened(false);
        return;
      }
    });
  };

  return (
    <GestureHandlerRootView>
      <Header
        left={
          <DogProfile
            dogName={myDogs[selectedDogIndex].dogName}
            imageUri={myDogs[selectedDogIndex].dogProfileImg}
            onPress={() => setDogListOpened(true)}
          />
        }
        right={
          <Pressable onPress={() => navigation.navigate(WalkLogNavigations.Stats)}>
            <Icon.Graph />
          </Pressable>
        }
      />
      <S.LogHome>
        <Calendar setDate={setDate} walkDates={walkDates} />
        <FlatList
          contentContainerStyle={{
            padding: 20,
            paddingBottom: 26,
            flex: 1,
          }}
          data={logDetails}
          renderItem={({ item }) => <WalkLogCard logDetail={item} />}
          keyExtractor={item => item.walkId.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          ListEmptyComponent={<NoWalkLog />}
        />
      </S.LogHome>
      <DogListModal
        type={'select'}
        isVisible={dogListOpened}
        dogs={myDogs.map(dog => ({
          id: String(dog.dogId),
          name: dog.dogName,
          breed: dog.breed,
          age: String(getAge(dog.dogBirthDate)),
          gender: dog.dogGender,
          walkCount: dog.walkCount,
          imageUrl: dog.dogProfileImg,
        }))}
        onSelectDog={handleSelectDog}
        onClose={() => setDogListOpened(false)}
      />
    </GestureHandlerRootView>
  );
};
