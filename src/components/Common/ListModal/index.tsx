import styled from '@emotion/native';
import { Modal, ScrollView, Animated, Dimensions, GestureResponderEvent } from 'react-native';
import { Text } from 'react-native';
import { useEffect, useRef } from 'react';

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
`;

const SelectButton = styled.TouchableOpacity`
  background-color: #f5f5f5;
  padding: 8px 16px;
  border-radius: 20px;
`;

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
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{dog.name}</Text>
                  <Text style={{ color: '#666' }}>
                    {dog.breed} {dog.age} {dog.gender}
                  </Text>
                  <Text style={{ color: '#666' }}>산책 횟수 {dog.walkCount}회</Text>
                </DogInfo>
                <SelectButton onPress={() => onSelectDog(dog)}>
                  <Text>{type === 'walk' ? '강번따' : '추가'}</Text>
                </SelectButton>
              </DogItem>
            ))}
          </ScrollView>
        </ModalContainer>
      </ModalBackground>
    </Modal>
  );
};
