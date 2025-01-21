import styled from '@emotion/native';
import { Platform } from 'react-native';
interface BaseInputProps {
  isFocused: boolean;
  isBold: boolean;
}

export const BaseInput = styled.TextInput<BaseInputProps>`
  font-family: ${({ isBold }) => (isBold ? 'SUIT-Bold' : 'SUIT-Medium')};
  height: 100%;
  padding: ${Platform.OS === 'ios' ? '17px 32px' : '0px 32px'};
  justify-content: center;
  border-radius: 12px;
  font-size: 20px;
  background-color: white;
  text-align: center;
  border-width: ${({ isFocused }) => (isFocused ? '1px' : '0')};
  border-color: black;
`;
