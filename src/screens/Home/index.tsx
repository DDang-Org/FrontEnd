import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Suspense, useState } from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import DogHand from '~assets/dogs/dog-hand.svg';
import { ActionButton } from '~components/Common/ActionButton';
import { Icon } from '~components/Common/Icons';
import { Heading } from '~components/Home/Heading';
import { HeadingFallback } from '~components/Home/Heading/fallback';
import { HeadingLoader } from '~components/Home/Heading/loader';
import { WalkInfo } from '~components/Home/WalkInfo';
import { WalkInfoFallback } from '~components/Home/WalkInfo/fallback';
import { WalkInfoLoader } from '~components/Home/WalkInfo/loader';
import { HomeStackProps } from '~navigation/HomeNavigator';
import * as S from './styles';
import { useMyDogInfo } from '~apis/dog/useMyDogInfo';
import { DogProfile } from '~components/Log/DogProfile';
import { DogListModal } from '~components/Common/ListModal';
import { getAge } from '~utils/getAge';

type Props = NativeStackScreenProps<HomeStackProps, 'Main'>;

export const HomeScreen = ({ navigation }: Props) => {
  const { data: myDogs, isPending, isError } = useMyDogInfo();
  const [selectedDogIndex, setSelectedDogIndex] = useState(0);
  const [dogListOpened, setDogListOpened] = useState(false);

  if (isPending || isError) {
    return <></>;
  }

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
    <S.HomeScreen>
      <S.Header>
        <DogProfile imageUri={myDogs[selectedDogIndex].dogProfileImg} onPress={() => setDogListOpened(true)} />
        <Icon.Bell onPress={() => navigation.navigate('Notification')} />
      </S.Header>
      <ErrorBoundary FallbackComponent={HeadingFallback}>
        <Suspense fallback={<HeadingLoader />}>
          <Heading selectedDogIndex={selectedDogIndex} />
        </Suspense>
      </ErrorBoundary>
      <DogHand />
      <ErrorBoundary FallbackComponent={WalkInfoFallback}>
        <Suspense fallback={<WalkInfoLoader />}>
          <WalkInfo selectedDogIndex={selectedDogIndex} />
        </Suspense>
      </ErrorBoundary>
      <ActionButton type="semiRoundedRect" text="산책 시작하기" onPress={() => navigation.navigate('Walk')} />
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
    </S.HomeScreen>
  );
};
