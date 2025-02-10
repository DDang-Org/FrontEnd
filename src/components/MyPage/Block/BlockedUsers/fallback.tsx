import { RetryButton } from '~components/Common/RetryButton';
import * as S from './styles';
import { TextBold, TextRegular } from '~components/Common/Text';

interface BlockedUsersFallbackProps {
  error: Error;
  resetError: () => void;
}

export const BlockedUsersFallback = ({ error, resetError }: BlockedUsersFallbackProps) => {
  return (
    <S.BlockedUsersFallback>
      <TextBold fontSize={17}>차단 유저 목록을 불러오는 데 실패했습니다.</TextBold>
      <TextRegular fontSize={15} numberOfLines={3}>
        {error.message}
      </TextRegular>
      <RetryButton resetError={resetError} />
    </S.BlockedUsersFallback>
  );
};
