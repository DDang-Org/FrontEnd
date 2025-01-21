import { RetryButton } from '~components/Common/RetryButton';
import { TextBold } from '~components/Common/Text';
import * as S from './styles';

interface WalkInfoFallbackProps {
  error: Error;
  resetError: () => void;
}

export const WalkInfoFallback = ({ error, resetError }: WalkInfoFallbackProps) => {
  return (
    <S.WalkInfoFallback>
      <TextBold fontSize={17}>총 산책 정보를 가져오는 데 실패했어요.</TextBold>
      <TextBold fontSize={13} numberOfLines={1}>
        {error.message}
      </TextBold>
      <RetryButton resetError={resetError} />
    </S.WalkInfoFallback>
  );
};
