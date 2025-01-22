import React from 'react';
import { TextInputProps } from 'react-native';
import { BaseInput } from '~components/Common/BaseInput';
import { MultilineInput } from '~components/Common/MultilineInput';
import { PressableInput } from '~components/Common/PressableInput';

type CommonFormInputProps = Omit<TextInputProps, 'value' | 'onChangeText'> & {
  value: string;
  multiline?: boolean;
  maxLines?: number;
};

type EditableFormInputProps = CommonFormInputProps & {
  onChangeText: (text: string) => void;
  onPress?: never;
};

type PressableFormInputProps = CommonFormInputProps & {
  onPress: () => void;
  onChangeText?: never;
};

export type FormInputProps = EditableFormInputProps | PressableFormInputProps;

export const FormInput: React.FC<FormInputProps> = ({
  value,
  onChangeText,
  onPress,
  multiline,
  maxLines = 2,
  ...props
}) => {
  if (onPress) {
    return <PressableInput value={value} onPress={onPress} {...props} />;
  }

  if (multiline) {
    return <MultilineInput value={value} onChangeText={onChangeText!} maxLines={maxLines} {...props} />;
  }

  return <BaseInput value={value} onChangeText={onChangeText!} {...props} />;
};

export default FormInput;
