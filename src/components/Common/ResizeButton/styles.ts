import styled from '@emotion/native';
import { Pressable } from 'react-native';
import { TextBold } from '~components/Common/Text';

interface ResizeButtonProps {
  padding: string;
  borderRadius: string;
  bgColor: string;
  width?: string;
  flexGrow?: boolean;
}

export const ResizeButton = styled(Pressable)<ResizeButtonProps>`
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ width }) => width};
  align-self: flex-start;
  ${({ flexGrow }) => (flexGrow ? 'flex: 1;' : 'flex: none;')};
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(TextBold)`
  text-align: center;
`;
