import { useUser } from '~apis/members/useUser';
import { getKoreanRoleWithName } from '~utils/getKoreanRoleWithName';
import * as S from './styles';
import { getParticle } from '~utils/getParticle';

export const Heading = () => {
  const { familyRole, name } = useUser();
  return (
    <S.Heading>
      <S.HeadingText fontSize={24}>
        오늘은{' '}
        {getParticle(
          getKoreanRoleWithName({
            dogGender: 'FEMALE',
            familyRole,
            name: name[name.length - 2] + name[name.length - 1],
          }),
        )}
        랑
      </S.HeadingText>
      <S.HeadingText fontSize={24}>산책가는 날!</S.HeadingText>
    </S.Heading>
  );
};
