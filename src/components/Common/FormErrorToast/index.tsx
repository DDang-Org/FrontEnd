import * as S from './styles';

interface FormErrorToastProps {
  message: string;
}

export const FormErrorToast = ({ message }: FormErrorToastProps) => {
  return (
    <S.FormErrorToast>
      <S.ErrorMessage fontSize={14}>{message}</S.ErrorMessage>
    </S.FormErrorToast>
  );
};
