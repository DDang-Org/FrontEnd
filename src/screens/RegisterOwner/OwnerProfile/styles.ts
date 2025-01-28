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
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
  padding: 16px;
`;
