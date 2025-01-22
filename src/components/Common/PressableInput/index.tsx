import React from 'react';
import { TextInputProps } from 'react-native';
import { BaseInput } from '../BaseInput';
import * as S from './styles';

export interface PressableInputProps extends TextInputProps {
  onPress: () => void;
  value: string;
}

export const PressableInput: React.FC<PressableInputProps> = ({ onPress, value, ...props }) => {
  return (
    <S.PressableInput onPress={onPress}>
      <BaseInput editable={false} multiline={false} value={value} pointerEvents="none" {...props} />
    </S.PressableInput>
  );
};
