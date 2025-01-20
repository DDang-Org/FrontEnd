import styled from '@emotion/native';
import { Platform } from 'react-native';
interface InputButtonProps {
  isFocused: boolean;
  isMultiline: boolean;
}

interface TextInputProps {
  isBold: boolean;
}

export const InputButton = styled.Pressable<InputButtonProps>`
  border: ${({ theme, isFocused }) => (isFocused ? `1px solid ${theme.colors.font_1}` : 'none')};
  border-radius: 12px;
  width: 100%;
  height: ${({ isMultiline }) => (isMultiline ? '86px' : '64px')};
  font-size: ${({ isMultiline }) => (isMultiline ? '17px' : '20px')};
  background-color: ${props => props.theme.colors.gc_4};
`;

export const InputWrapper = styled.View`
  width: 100%;
  padding: ${Platform.OS === 'ios' ? '17px 32px' : '0px 32px'};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput<TextInputProps>`
  font-family: ${({ isBold }) => (isBold ? 'SUIT-Bold' : 'SUIT-Medium')};
  border-radius: 12px;
  font-size: 20px;
  text-align: center;
  height: 100%;
`;
