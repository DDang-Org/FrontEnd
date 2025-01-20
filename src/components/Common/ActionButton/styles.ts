import styled from '@emotion/native';
import { Pressable } from 'react-native';
import { TextBold } from '~components/Common/Text';

interface ActionButtonProps {
  padding: string;
  borderRadius: string;
  bgColor: string;
}

export const ActionButton = styled(Pressable)<ActionButtonProps>`
  width: 100%;
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ bgColor }) => bgColor};
`;

export const ButtonText = styled(TextBold)`
  text-align: center;
`;
