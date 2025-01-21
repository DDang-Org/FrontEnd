import React, { useState, useCallback, useEffect } from 'react';
import { TextInputProps, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import * as S from './styles';

export interface BaseInputProps extends TextInputProps {
  isMultiline?: boolean;
}

export const BaseInput: React.FC<BaseInputProps> = ({
  isMultiline = false,
  value,
  onChangeText,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(true);
      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(false);
      if (onBlur) {
        onBlur(e);
      }
    },
    [onBlur],
  );

  return (
    <S.BaseInput
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChangeText={onChangeText}
      isFocused={isFocused}
      autoCapitalize="none"
      spellCheck={false}
      autoCorrect={false}
      isBold={!!value}
      value={value}
      isMultiline={isMultiline}
      placeholderTextColor="#767676"
      {...props}
    />
  );
};
