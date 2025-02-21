import { useUser } from '~apis/member/useUser';
import { getKoreanRoleWithName } from '~utils/getKoreanRoleWithName';
import * as S from './styles';
import { getParticle } from '~utils/getParticle';
import { useMyDogInfo } from '~apis/dog/useMyDogInfo';

export const Heading = ({ selectedDogIndex }: { selectedDogIndex: number }) => {
  const { familyRole, memberName: name } = useUser();
  const { data: myDogs, isPending, isError } = useMyDogInfo();

  if (isPending || isError) {
    return <></>;
  }

  console.log({ familyRole, name });
  return (
    <S.Heading>
      <S.HeadingText fontSize={24}>
        오늘은{' '}
        {getParticle(
          getKoreanRoleWithName({
            dogGender: myDogs[selectedDogIndex].dogGender,
            familyRole,
            name: name.length >= 2 ? name[name.length - 2] + name[name.length - 1] : name,
          }),
        )}
        랑
      </S.HeadingText>
      <S.HeadingText fontSize={24}>산책가는 날!</S.HeadingText>
    </S.Heading>
  );
};
