import { Modal, ScrollView, Animated, Dimensions, GestureResponderEvent } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Separator } from '~components/Common/Seperator';
import * as S from './styles';

interface Dog {
  dogId: number;
  dogName: string;
  breed: string;
  dogBirthDate: string;
  dogGender: string;
  walkCount: number;
  dogProfileImg: string;
}

interface DogListModalProps {
  isVisible: boolean;
  onClose: () => void;
  dogs: Dog[];
  onSelectDog: (dog: Dog) => void;
  onSelectMultipleDogs?: (dogs: Dog[]) => void;
  type?: 'walk' | 'default' | 'multi-select';
}

const SCREEN_HEIGHT = Dimensions.get('window').height;
const WALK_MODAL_HEIGHT = SCREEN_HEIGHT * 0.85;

const calculateAge = (birthDate: string): number => {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};

export const DogListModal = ({
  isVisible,
  onClose,
  dogs,
  onSelectDog,
  onSelectMultipleDogs,
  type = 'default',
}: DogListModalProps) => {
  const slideAnim = useRef(new Animated.Value(type === 'walk' ? WALK_MODAL_HEIGHT : 500)).current;
  const [selectedDogs, setSelectedDogs] = useState<Dog[]>([]);

  useEffect(() => {
    if (isVisible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 65,
        friction: 10,
      }).start();
    } else {
      Animated.spring(slideAnim, {
        toValue: type === 'walk' ? WALK_MODAL_HEIGHT : 500,
        useNativeDriver: true,
        tension: 65,
        friction: 10,
      }).start();
    }
  }, [isVisible, type]);

  const toggleDogSelection = (dog: Dog) => {
    setSelectedDogs(prevSelected => {
      if (prevSelected.some(selectedDog => selectedDog.dogId === dog.dogId)) {
        return prevSelected.filter(selectedDog => selectedDog.dogId !== dog.dogId);
      } else {
        return [...prevSelected, dog];
      }
    });
  };

  const handleConfirmSelection = () => {
    if (onSelectMultipleDogs) {
      onSelectMultipleDogs(selectedDogs);
    }
    onClose();
  };

  return (
    <Modal visible={isVisible} transparent={true} onRequestClose={onClose} animationType="fade">
      <S.ModalBackground activeOpacity={1} onPress={onClose}>
        <S.ModalContainer
          type={type}
          style={{
            transform: [{ translateY: slideAnim }],
          }}
          onStartShouldSetResponder={() => true}
          onTouchEnd={(e: GestureResponderEvent) => e.stopPropagation()}
        >
          <S.HeaderContainer>
            <S.Title>{type === 'walk' ? '강번따 리스트' : '강아지 리스트'}</S.Title>
            {type === 'multi-select' && (
              <S.ConfirmButton onPress={handleConfirmSelection} bgColor="lighten_3">
                <S.ConfirmButtonText>선택 완료</S.ConfirmButtonText>
              </S.ConfirmButton>
            )}
          </S.HeaderContainer>

          <ScrollView>
            {dogs.map(dog => (
              <S.DogItem
                key={dog.dogId}
                style={{
                  backgroundColor: selectedDogs.some(selectedDog => selectedDog.dogId === dog.dogId)
                    ? 'lightgray'
                    : 'white',
                }}
              >
                <S.DogImage
                  source={{
                    uri: dog.dogProfileImg ? dog.dogProfileImg : '',
                  }}
                />
                <S.DogInfo>
                  <S.NameText fontSize={17}>{dog.dogName}</S.NameText>
                  <S.InfoContainer>
                    <S.InfoText fontSize={14}>{dog.breed}</S.InfoText>
                    <Separator $height={14} />
                    <S.InfoText fontSize={14}>{calculateAge(dog.dogBirthDate)}살</S.InfoText>
                    <Separator $height={14} />
                    <S.InfoText fontSize={14}>{dog.dogGender}</S.InfoText>
                  </S.InfoContainer>
                  <S.WalkText fontSize={14}>산책 횟수 {dog.walkCount}회</S.WalkText>
                </S.DogInfo>
                <S.ButtonContainer>
                  <S.SelectButton
                    onPress={() => {
                      if (type === 'multi-select') {
                        toggleDogSelection(dog);
                      } else {
                        onSelectDog(dog);
                      }
                    }}
                    type="roundedRect"
                    bgColor="lighten_3"
                    text={type === 'walk' ? '강번따' : '추가'}
                  />
                </S.ButtonContainer>
              </S.DogItem>
            ))}
          </ScrollView>
        </S.ModalContainer>
      </S.ModalBackground>
    </Modal>
  );
};
