import { TextInputProps } from 'react-native';
import * as S from './styles';
import { useCallback, useEffect, useState } from 'react';
import { NativeSyntheticEvent, TextInputContentSizeChangeEventData } from 'react-native';

interface FormInputProps extends TextInputProps {
  onPress?: () => void;
  multiline?: boolean;
}

const FormInput = ({ onPress, multiline = false, ...props }: FormInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(props.value || '');
  const [height, setHeight] = useState(64);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleChangeText = useCallback((text: string) => {
    setValue(text);
  }, []);

  const handleContentSizeChange = useCallback(
    (event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => {
      if (multiline) {
        const { height } = event.nativeEvent.contentSize;
        setHeight(Math.min(Math.max(64, height), 96));
      }
    },
    [multiline],
  );

  return (
    <S.InputButton disabled={!onPress} onPress={onPress} isFocused={isFocused} style={{ height: multiline ? 96 : 64 }}>
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
          multiline={multiline}
          numberOfLines={multiline ? 2 : 1}
          onContentSizeChange={handleContentSizeChange}
          {...props}
        />
      </S.InputWrapper>
    </S.InputButton>
  );
};

export default FormInput;
