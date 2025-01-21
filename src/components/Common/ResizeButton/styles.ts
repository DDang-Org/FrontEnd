import styled from '@emotion/native';
import { Pressable } from 'react-native';
import { TextBold } from '~components/Common/Text';

interface ResizeButtonProps {
  padding: string;
  borderRadius: string;
  bgColor: string;
  width?: string;
}

export const ResizeButton = styled(Pressable)<ResizeButtonProps>`
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ width }) => width};
  flex: 1;
`;

export const ButtonText = styled(TextBold)`
  text-align: center;
`;
