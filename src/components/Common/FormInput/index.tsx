import { TextInputProps } from 'react-native';
import * as S from './styles';
import { useCallback, useEffect, useState } from 'react';

interface FormInputProps extends TextInputProps {
  onPress?: () => void;
  multiline?: boolean;
}

const FormInput = ({ onPress, multiline = false, onChangeText, ...props }: FormInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(props.value || '');

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleChangeText = useCallback(
    (text: string) => {
      const limitedValue = text.split('\n').slice(0, 2).join('\n');
      setValue(limitedValue);
      if (onChangeText) {
        onChangeText(limitedValue);
      }
    },
    [onChangeText],
  );

  useEffect(() => {
    console.log(!!value);
  }, [value]);

  return (
    <S.InputButton
      disabled={!onPress}
      onPress={onPress}
      isFocused={isFocused}
      isMultiline={value.split('\n').length >= 2}
    >
      <S.InputWrapper>
        <S.Input
          editable={!onPress}
          autoCapitalize="none"
          spellCheck={false}
          autoCorrect={false}
          pointerEvents={onPress ? 'none' : 'auto'}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChangeText={handleChangeText}
          placeholderTextColor={'#767676'}
          multiline={multiline}
          isBold={!!value}
          {...props}
        />
      </S.InputWrapper>
    </S.InputButton>
  );
};

export default FormInput;
