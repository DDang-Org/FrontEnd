import { RetryButton } from '~components/Common/RetryButton';
import { TextBold } from '~components/Common/Text';
import * as S from './styles';

export interface WalkInfoFallbackProps {
  error: Error;
  resetError: () => void;
}

export const WalkInfoFallback = ({ error, resetError }: WalkInfoFallbackProps) => {
  return (
    <S.WalkInfoFallback paddingHorizontal={20} paddingVertical={16}>
      <TextBold fontSize={15}>오늘 산책 정보를 불러오는 데 실패했습니다.</TextBold>
      <S.ErrorMessage fontSize={13} numberOfLines={1}>
        {error.message}
      </S.ErrorMessage>
      <RetryButton resetError={resetError} />
    </S.WalkInfoFallback>
  );
};
