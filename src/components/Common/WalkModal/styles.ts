import styled from '@emotion/native';
import { ResizeButton } from '~components/Common/ResizeButton';
import { TextBold } from '~components/Common/Text';

interface ButtonContainerProps {
  type: 'walkStart' | 'walkJoin' | 'walkCancel' | 'report' | 'reportComplete' | 'walkComplete';
}

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
  position: relative;
`;

export const Title = styled(TextBold)`
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

export const ButtonContainer = styled.View<ButtonContainerProps>`
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
`;

export const ModalButton = styled(ResizeButton)``;

export const ButtonText = styled(TextBold)`
  text-align: center;
`;

export const MessageContainer = styled.View`
  background-color: ${props => props.theme.colors.gc_3};
  width: 100%;
  padding: 19px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Message = styled(TextBold)`
  color: ${props => props.theme.colors.font_1};
  text-align: center;
  margin-bottom: 16px;
`;
