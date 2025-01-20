import styled from '@emotion/native';
import { Platform } from 'react-native';
interface InputButtonProps {
  isFocused: boolean;
}

interface TextInputProps {
  isBold: boolean;
}

export const InputButton = styled.Pressable<InputButtonProps>`
  border: ${({ theme, isFocused }) => (isFocused ? `1px solid ${theme.colors.font_1}` : 'none')};
  border-radius: 12px;
  width: 100%;
  height: 64px;
  background-color: ${props => props.theme.colors.gc_4};
`;

export const InputWrapper = styled.View`
  width: 100%;
  padding: ${Platform.OS === 'ios' ? '17 32px' : '0 32px'};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const CustomTextInput = styled.TextInput<TextInputProps>`
  font-family: ${({ isBold }) => (isBold ? 'SUIT-Bold' : 'SUIT-Medium')};
  border-radius: 12px;
  font-size: 20;
  text-align: center;
  width: 100%;
  height: 100%;
`;
