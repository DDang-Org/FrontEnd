import * as S from './styles';

interface RetryButtonProps {
  resetError: () => void;
}

export const RetryButton = ({ resetError }: RetryButtonProps) => {
  return (
    <S.RetryButton onPress={resetError}>
      <S.ButtonText fontSize={13}>다시 시도하기</S.ButtonText>
    </S.RetryButton>
  );
};
