import { Modal, ScrollView, Animated, Dimensions, GestureResponderEvent } from 'react-native';
import { useEffect, useRef } from 'react';
import { Separator } from '~components/Common/Seperator';
import * as S from './styles';

interface DogListModalProps {
  isVisible: boolean;
  onClose: () => void;
  dogs: {
    id: string;
    name: string;
    breed: string;
    age: string;
    gender: string;
    walkCount: number;
    imageUrl: string;
  }[];
  onSelectDog: (dog: {
    id: string;
    name: string;
    breed: string;
    age: string;
    gender: string;
    walkCount: number;
    imageUrl: string;
  }) => void;
  type?: 'walk' | 'default' | 'select';
}

const SCREEN_HEIGHT = Dimensions.get('window').height;
const WALK_MODAL_HEIGHT = SCREEN_HEIGHT * 0.85;

export const DogListModal = ({ isVisible, onClose, dogs, onSelectDog, type = 'default' }: DogListModalProps) => {
  const slideAnim = useRef(new Animated.Value(type === 'walk' ? WALK_MODAL_HEIGHT : 500)).current;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, type]);

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
          </S.HeaderContainer>
          <ScrollView>
            {dogs.map(dog => (
              <S.DogItem key={dog.id}>
                <S.DogImage
                  source={{
                    uri: dog.imageUrl ? dog.imageUrl : '',
                  }}
                />
                <S.DogInfo>
                  <S.NameText fontSize={17}>{dog.name}</S.NameText>
                  <S.InfoContainer>
                    <S.InfoText fontSize={14}>{dog.breed}</S.InfoText>
                    <Separator $height={14} />
                    <S.InfoText fontSize={14}>{dog.age}</S.InfoText>
                    <Separator $height={14} />
                    <S.InfoText fontSize={14}>{dog.gender}</S.InfoText>
                  </S.InfoContainer>
                  <S.WalkText fontSize={14}>산책 횟수 {dog.walkCount}회</S.WalkText>
                </S.DogInfo>
                <S.ButtonContainer>
                  <S.SelectButton
                    onPress={() => onSelectDog(dog)}
                    type="roundedRect"
                    bgColor="lighten_3"
                    text={type === 'walk' ? '강번따' : type === 'select' ? '선택' : '추가'}
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
