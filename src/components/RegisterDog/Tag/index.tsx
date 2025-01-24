import { TextMedium } from '~components/Common/Text';
import * as S from './styles';

type TagProps = {
  content: string;
};

export const Tag = ({ content }: TagProps) => {
  return (
    <S.Tag>
      <TextMedium fontSize={14}>#{content}</TextMedium>
    </S.Tag>
  );
};
