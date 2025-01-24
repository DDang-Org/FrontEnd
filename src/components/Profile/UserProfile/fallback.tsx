import { RetryButton } from '~components/Common/RetryButton';
import { TextBold, TextRegular } from '~components/Common/Text';
import * as S from './styles';

interface UserProfileFallbackProps {
  error: Error;
  resetError: () => void;
}

export const UserProfileFallback = ({ error, resetError }: UserProfileFallbackProps) => {
  return (
    <S.UserProfileFallback>
      <TextBold fontSize={24}>유저 정보를 조회하지 못했습니다.</TextBold>
      <TextRegular fontSize={17}>{error.message}</TextRegular>
      <RetryButton resetError={resetError} />
    </S.UserProfileFallback>
  );
};
