import styled from '@emotion/native';
import { TextRegular } from '~components/Common/Text';

export const NoBlockedUsers = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Description = styled(TextRegular)`
  color: ${props => props.theme.colors.font_1};
`;
