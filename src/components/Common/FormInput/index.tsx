import React from 'react';
import { TextInputProps } from 'react-native';
import { BaseInput } from '~components/Common/BaseInput';
import { MultilineInput } from '~components/Common/MultilineInput';
import { PressableInput } from '~components/Common/PressableInput';

export interface FormInputProps extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  value: string;
  onChangeText: (text: string) => void;
  onPress?: () => void;
  multiline?: boolean;
  maxLines?: number;
}

export const FormInput: React.FC<FormInputProps> = ({
  value,
  onChangeText,
  onPress,
  multiline,
  maxLines = 2,
  ...props
}) => {
  if (onPress) {
    return <PressableInput value={value} onChangeText={onChangeText} onPress={onPress} {...props} />;
  }

  if (multiline) {
    return <MultilineInput value={value} onChangeText={onChangeText} maxLines={maxLines} {...props} />;
  }

  return <BaseInput value={value} onChangeText={onChangeText} {...props} />;
};

export default FormInput;
