import styled from '@emotion/native';
import { Animated, Dimensions } from 'react-native';
import { ResizeButton } from '~components/Common/ResizeButton';
import { TextBold, TextMedium } from '~components/Common/Text';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const WALK_MODAL_HEIGHT = SCREEN_HEIGHT * 0.85;

export const ModalBackground = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled(Animated.View)<{ type: 'walk' | 'default' | 'select' }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: ${props => (props.type === 'walk' ? `${WALK_MODAL_HEIGHT}px` : 'auto')};
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const HeaderContainer = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const DogItem = styled.View`
  flex-direction: row;
  padding: 15px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const DogImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 1000px;
`;

export const DogInfo = styled.View`
  flex: 1;
  margin-left: 15px;
  margin-right: 8px;
  gap: 4px;
  flex-direction: column;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-self: center;
`;

export const NameText = styled(TextBold)``;

export const InfoText = styled(TextMedium)``;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const WalkText = styled(TextBold)``;

export const SelectButton = styled(ResizeButton)``;
