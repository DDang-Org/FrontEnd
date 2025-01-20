import { TextInputProps } from 'react-native';
import * as S from './styles';
import { Theme } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';

interface FormInputProps extends TextInputProps {
  onPress?: () => void;
}

const FormInput = ({ onPress, ...props }: FormInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(props.value || '');

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleChangeText = useCallback((text: string) => {
    setValue(text);
  }, []);

  return (
    <S.InputButton disabled={!onPress} onPress={onPress} isFocused={isFocused}>
      <S.InputWrapper>
        <S.CustomTextInput
          editable={!onPress}
          autoCapitalize="none"
          spellCheck={false}
          autoCorrect={false}
          pointerEvents={onPress ? 'none' : 'auto'}
          isBold={!!value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChangeText={handleChangeText}
          placeholderTextColor={'#767676'}
          {...props}
        />
      </S.InputWrapper>
    </S.InputButton>
  );
};

export default FormInput;
