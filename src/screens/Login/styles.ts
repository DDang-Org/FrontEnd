import styled from '@emotion/native';
import { TextBold } from '~components/Common/Text';

export const LoginButtonWrapper = styled.View`
  width: 100%;
  max-width: 350px;
  flex-direction: column;
  margin-top: 16px;
  justify-content: center;
  text-align: center;
  /* flex: 1; */ /* 부모 컨테이너에서 남은 공간을 차지 */
`;

export const TextWrapper = styled.View`
  margin-top: 60px;
  align-items: center;
`;

export const CustomActionButton = styled.Pressable`
  width: 100%;
  height: 50px;
  border-radius: 12px;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const Text = styled(TextBold)`
  text-align: center;
`;

export const ModalHeader = styled.View`
  padding: 16px;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 8px;
`;


export const DigIconWrapper = styled.View`
  align-items: center; 
  margin:80px 0px;
`;
