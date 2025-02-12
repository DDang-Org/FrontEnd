import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { useState } from 'react';
import { Platform, ScrollView, View } from 'react-native';
import { GestureHandlerRootView, Pressable } from 'react-native-gesture-handler';
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
import { getAge } from '~utils/getAge';
import { DogListModal } from '~components/Common/ListModal';
import { Portal, Provider } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ExtraDimensions from 'react-native-extra-dimensions-android';

type NavigationProps = NativeStackNavigationProp<WalkLogParamList>;

export const LogHome = () => {
  const [date, setDate] = useState(new Date());
  const myDogs = useMyDogInfo();
  const [selectedDogIndex, setSelectedDogIndex] = useState(0);
  const { logDetails, walkDates } = useWalkLog(selectedDogIndex, dateToString(date, '-'));
  const [dogListOpened, setDogListOpened] = useState(false);
  const navigation = useNavigation<NavigationProps>();
  const insets = useSafeAreaInsets();
  const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? insets.top : ExtraDimensions.get('STATUS_BAR_HEIGHT');

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
      <S.LogHome statusBarHeight={STATUS_BAR_HEIGHT}>
        <Calendar setDate={setDate} walkDates={walkDates} />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            padding: 20,
            paddingBottom: 26,
          }}
        >
          {logDetails?.map((item, index) => (
            <View key={item.walkId || index}>
              <WalkLogCard logDetail={item} />
              <View style={{ height: 8 }} />
            </View>
          ))}
          {logDetails?.length === 0 && <NoWalkLog />}
        </ScrollView>
      </S.LogHome>
      <Provider>
        <Portal>
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
        </Portal>
      </Provider>
    </GestureHandlerRootView>
  );
};
