import styled from '@emotion/native';
import { ActionButton } from '~components/Common/ActionButton';

export const ModalBackground = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  position: relative;
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  width: 80%;
  align-items: start;
`;

export const TitleContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

export const ReportButton = styled.Text`
  position: absolute;
  right: 0;
  top: 0;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 112px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.gc_3};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.font_3};
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity<{ variant?: 'primary' | 'secondary' }>`
  padding: 12px 24px;
  border-radius: 8px;
  flex: 1;
  background-color: ${props => (props.variant === 'primary' ? '#8B4513' : '#F5F5F5')};
`;

export const ButtonText = styled.Text<{ variant?: 'primary' | 'secondary' }>`
  color: ${props => (props.variant === 'primary' ? 'white' : 'black')};
  text-align: center;
  font-size: 14px;
`;

export const Message = styled.Text`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 16px;
`;

export const ModalButton = styled(ActionButton)`
  max-width: 280px;
  width: 100%;
`;
