import { useUser } from '~apis/members/useUser';
import * as S from './styles';

export const Heading = () => {
  const { familyRole } = useUser();
  return (
    <S.Heading>
      <S.HeadingText fontSize={24}>오늘은 {familyRole}랑</S.HeadingText>
      <S.HeadingText fontSize={24}>산책가는 날!</S.HeadingText>
    </S.Heading>
  );
};
