import styled from '@emotion/native';
import { TextBold } from '~components/Common/Text';

export const UnreadChatCount = styled.View`
  position: absolute;
  left: 20px;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors.sub};
  min-width: 20px;
  padding: 1.5px 6px;
  justify-content: center;
  align-items: center;
`;

export const UnreadCountText = styled(TextBold)`
  text-align: center;
`;
