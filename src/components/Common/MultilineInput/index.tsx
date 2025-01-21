import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { BaseInput } from '../BaseInput';
import * as S from './styles';

interface MultilineInputProps extends TextInputProps {
  maxLines?: number;
}

export const MultilineInput: React.FC<MultilineInputProps> = ({ maxLines = 2, onChangeText, ...props }) => {
  const [isMultiline, setIsMultiline] = useState(false);

  const handleChangeText = (text: string) => {
    const lines = text.split('\n');
    setIsMultiline(lines.length >= 2 ? true : false);

    const limitedText = lines.slice(0, maxLines).join('\n');
    if (onChangeText) {
      onChangeText(limitedText);
    }
  };

  return (
    <S.MultilineInput isMultiline={isMultiline}>
      <BaseInput multiline onChangeText={handleChangeText} {...props} />
    </S.MultilineInput>
  );
};
