import { TextBold, TextMedium } from '~components/Common/Text';
import * as S from './styles';
import { RetryButton } from '~components/Common/RetryButton';

interface DogProfileProps {
  error: Error;
  resetError: () => void;
}

export const DogProfileFallback = ({ error, resetError }: DogProfileProps) => {
  return (
    <S.DogProfileFallback paddingHorizontal={25} paddingVertical={14}>
      <TextBold fontSize={17}>반려견 조회에 실패하였습니다.</TextBold>
      <TextMedium fontSize={15} numberOfLines={1}>
        {error.message}
      </TextMedium>
      <RetryButton resetError={resetError} />
    </S.DogProfileFallback>
  );
};
