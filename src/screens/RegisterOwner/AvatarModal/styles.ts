import styled from '@emotion/native';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalHeader = styled.View`
  padding: 16px;
  flex-direction: row;
  justify-content: flex-start;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const ModalContent = styled.View`
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 16px;
`;

export const Text = styled.Text`
  font-size: 16px;
`;
