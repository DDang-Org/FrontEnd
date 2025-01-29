import styled from '@emotion/native';
import { TextBold } from '~components/Common/Text';
import { Icon } from '~components/Common/Icons';

export const LoginComment = styled.View`
  margin-top: 40px;
  margin-bottom: 30px;
  align-items: center;
`;

export const LoginCommentText = styled(TextBold)`
  text-align: center;
`;

export const AvatarSelectWrapper = styled.View`
  align-items: center;
`;

export const StyledAvatarSelect = styled(Icon.AvatarSelect)`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ProfileDataContainer = styled.View`
  margin: 10px;
  gap: 4px;
  align-items: center;
`;

export const GenderButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const NextButtonWrapper = styled.View`
  position: fixed;
  bottom: 24px;
  left: 0;
  right: 0;
  padding: 16px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ModalHeader = styled.View`
  padding: 16px;
  flex-direction: row;
  justify-content: flex-start;
`;

export const CloseButton = styled.TouchableOpacity`
  padding-top: 40px;
`;

export const ModalContent = styled.View`
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 16px;
`;

export const AvatarContainer = styled.View``;

export const ModalComment = styled.View`
  margin-top: 20px;
  margin-bottom: 30px;
  align-items: center;
`;

export const AvatarGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between; /* 각 열 사이 간격 균등 분배 */
`;

export const AvatarWrapper = styled.View`
  width: 157px; /* 아바타 크기 */
  height: 157px;
  margin-bottom: 16px; /* 행 간 간격 */
`;

export const AvatarOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
