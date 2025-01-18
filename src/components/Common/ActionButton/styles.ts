import styled from '@emotion/native';
import { Pressable } from 'react-native';
import { TextBold } from '~components/Common/Text';

interface ActionButtonProps {
  padding: string;
  borderRadius: string;
  bgColor: string;
}

export const ActionButton = styled(Pressable)<ActionButtonProps>`
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ bgColor }) => bgColor};
`;

export const Text = styled(TextBold)<{ color: string }>`
  text-align: center;
  color: ${props => props.color};
`;
