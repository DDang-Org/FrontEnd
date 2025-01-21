import { RetryButton } from '~components/Common/RetryButton';
import * as S from './styles';
import { TextBold } from '~components/Common/Text';

interface HeadingFallbackProps {
  error: Error;
  resetError: () => void;
}

export const HeadingFallback = ({ error, resetError }: HeadingFallbackProps) => {
  return (
    <S.Heading>
      <S.HeadingText fontSize={17}>유저 정보를 불러오지 못했어요.</S.HeadingText>
      <TextBold fontSize={15} numberOfLines={2}>
        {error.message}
      </TextBold>
      <RetryButton resetError={resetError} />
    </S.Heading>
  );
};
