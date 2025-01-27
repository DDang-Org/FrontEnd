import styled from '@emotion/native';
import { ActionButton } from '~components/Common/ActionButton';

export const Wrapper = styled.View`
flex-direction: row; /* 아이콘과 텍스트를 가로로 배치 */
align-items: center; /* 세로 정렬 */
`;

export const CustomActionButton = styled(ActionButton)`
  border-radius: 12px;
  border-width: 2px; /* 테두리 두께 */
  border-color: #ff5733; /* 테두리 색상 */
  background-color: #4caf50; /* 배경색 */
  flex-direction: row; /* 아이콘과 텍스트를 가로로 배치 */
  align-items: center; /* 세로 정렬 */
  justify-content: center; /* 가로 정렬 */
  padding: 12px 16px; /* 내부 여백 */
`;

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
  background-color: #FFED16;
  border-top-left-radius: 20px; /* 상단 왼쪽 모서리 둥글게 */
  border-top-right-radius: 20px; /* 상단 오른쪽 모서리 둥글게 */
  padding: 16px;
`;

export const Text = styled.Text`
  font-size: 16px;
`;
