import { Dot } from '~components/Common/Dot';
import * as S from './styles';

interface DescriptionWithTimeStampProps {
  description: string;
  time: string;
}

export const DescriptionWithTimeStamp = ({ description, time }: DescriptionWithTimeStampProps) => {
  return (
    <S.Container>
      <S.DescriptionWrapper>
        <S.DotWrapper>
          <Dot />
        </S.DotWrapper>
        <S.Description>{description}</S.Description>
      </S.DescriptionWrapper>
      <S.Time>{time}</S.Time>
    </S.Container>
  );
};
