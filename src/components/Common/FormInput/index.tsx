import { View, TextInputProps, Pressable, TextInput } from 'react-native';
import * as S from './styles';

interface FormInputProps extends TextInputProps {
  onPress?: () => void;
}

const FormInput = ({ onPress, ...props }: FormInputProps) => {
  const InputComponent = onPress ? Pressable : View;

  return (
    <InputComponent onPress={onPress}>
      <S.InputWrapper>
        <TextInput
          editable={!onPress}
          autoCapitalize="none"
          spellCheck={false}
          autoCorrect={false}
          pointerEvents={onPress ? 'none' : 'auto'}
          {...props}
        />
      </S.InputWrapper>
    </InputComponent>
  );
};

export default FormInput;
