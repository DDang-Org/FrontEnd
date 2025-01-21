import React from 'react';
import { TextInputProps } from 'react-native';
import { BaseInput } from '~components/Common/BaseInput';
import { MultilineInput } from '~components/Common/MultilineInput';
import { PressableInput } from '~components/Common/PressableInput';
interface FormInputProps extends TextInputProps {
  onPress?: () => void;
  multiline?: boolean;
  maxLines?: number;
}

export const FormInput: React.FC<FormInputProps> = ({ onPress, multiline, maxLines = 2, ...props }) => {
  if (onPress) {
    return <PressableInput onPress={onPress} {...props} />;
  }

  if (multiline) {
    return <MultilineInput maxLines={maxLines} {...props} />;
  }

  return <BaseInput {...props} />;
};

export default FormInput;
