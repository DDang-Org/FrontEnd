import styled from '@emotion/native';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end; /* 화면 하단에 컨텐츠 배치 */
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 검정 배경 */
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
  border-top-left-radius: 20px; /* 상단 왼쪽 모서리 둥글게 */
  border-top-right-radius: 20px; /* 상단 오른쪽 모서리 둥글게 */
  padding: 16px;
`;

export const Text = styled.Text`
  font-size: 16px;
`;
