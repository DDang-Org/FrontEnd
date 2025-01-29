import styled from '@emotion/native';
import { TextBold } from '~components/Common/Text';
import { Icon } from '~components/Common/Icons';

export const RegisterComment = styled.View`
  margin-top: 40px;
  margin-bottom: 30px;
  align-items: center;
`;

export const RegisterCommentText = styled(TextBold)`
  text-align: center;
`;

export const AvatarSelectWrapper = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledAvatarSelect = styled(Icon.AvatarSelect)`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ProfileDataContainer = styled.View`
  margin: 10px;
  padding-right: 25px;
  gap: 4px;
  align-items: center;
  width: 100%;
`;

export const GenderButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
  margin-top: 10px;
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
  margin-top: 70px;
  margin-bottom: 40px;
  align-items: center;
`;

export const AvatarGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const AvatarWrapper = styled.View`
  width: 48%;
  height: 156px;
  margin-bottom: 16px;
  padding-left: 10px;
`;

export const AvatarOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 5px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const CloseButtonWrapper = styled.View`
  position: absolute;
  top: 16px;
  left: 16px;
`;
