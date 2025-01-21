import styled from '@emotion/native';
import { Modal, ScrollView, Animated, Dimensions, GestureResponderEvent } from 'react-native';
import { Text } from 'react-native';
import { useEffect, useRef } from 'react';
import { ResizeButton } from '~components/Common/ResizeButton';
import { TextBold, TextMedium } from '~components/Common/Text';
import { Separator } from '~components/Common/Seperator';

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
  type?: 'walk' | 'default';
}

const SCREEN_HEIGHT = Dimensions.get('window').height;
const WALK_MODAL_HEIGHT = SCREEN_HEIGHT * 0.85;

const ModalBackground = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled(Animated.View)<{ type: 'walk' | 'default' }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: ${props => (props.type === 'walk' ? `${WALK_MODAL_HEIGHT}px` : 'auto')};
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const HeaderContainer = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const DogItem = styled.View`
  flex-direction: row;
  padding: 15px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

const DogImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 100%;
`;

const DogInfo = styled.View`
  flex: 1;
  margin-left: 15px;
  margin-right: 8px;
  gap: 4px;
  flex-direction: column;
`;

const ButtonContainer = styled.View`
  justify-content: center;
  align-self: center;
`;

const NameText = styled(TextBold)``;

const InfoText = styled(TextMedium)``;

const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const SelectButton = styled(ResizeButton)``;

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
      <ModalBackground activeOpacity={1} onPress={onClose}>
        <ModalContainer
          type={type}
          style={{
            transform: [{ translateY: slideAnim }],
          }}
          onStartShouldSetResponder={() => true}
          onTouchEnd={(e: GestureResponderEvent) => e.stopPropagation()}
        >
          <HeaderContainer>
            <Title>{type === 'walk' ? '강번따 리스트' : '강아지 리스트'}</Title>
          </HeaderContainer>

          <ScrollView>
            {dogs.map(dog => (
              <DogItem key={dog.id}>
                <DogImage
                  source={{
                    uri: dog.imageUrl ? dog.imageUrl : '',
                  }}
                />
                <DogInfo>
                  <NameText fontSize={17}>{dog.name}</NameText>
                  <InfoContainer>
                    <InfoText fontSize={14}>{dog.breed}</InfoText>
                    <Separator $height={14} />
                    <InfoText fontSize={14}>{dog.age}</InfoText>
                    <Separator $height={14} />
                    <InfoText fontSize={14}>{dog.gender}</InfoText>
                  </InfoContainer>
                  <Text>산책 횟수 {dog.walkCount}회</Text>
                </DogInfo>
                <ButtonContainer>
                  <SelectButton
                    onPress={() => onSelectDog(dog)}
                    type="roundedRect"
                    bgColor="lighten_3"
                    text={type === 'walk' ? '강번따' : '추가'}
                  />
                </ButtonContainer>
              </DogItem>
            ))}
          </ScrollView>
        </ModalContainer>
      </ModalBackground>
    </Modal>
  );
};
