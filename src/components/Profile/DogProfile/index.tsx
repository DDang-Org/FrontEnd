import { useDogInfoById } from '~apis/dog/useDogInfoById';
import { Profile } from '~components/Common/Profile';
import { Separator } from '~components/Common/Seperator';
import { getAge } from '~utils/getAge';
import * as S from './styles';

export const DogProfile = ({ dogId }: { dogId: number }) => {
  const { dogName, breed, dogBirthDate, dogGender, isNeutered, weight, comment, dogProfileImg } = useDogInfoById({
    dogId,
  });
  return (
    <S.DogProfile paddingHorizontal={25} paddingVertical={14}>
      <Profile src={dogProfileImg} size={80} />
      <S.Info>
        <S.Heading>
          <S.Name fontSize={20}>{dogName}</S.Name>
          <S.Wrapper>
            <S.Breed fontSize={13}>{breed}</S.Breed>
            <Separator $height={8} />
            <S.Age fontSize={13}>{getAge(dogBirthDate)}살</S.Age>
            <Separator $height={8} />
            <S.Gender fontSize={13}>{dogGender === 'MALE' ? '남' : '여'}</S.Gender>
          </S.Wrapper>
        </S.Heading>
        <S.Wrapper>
          <S.IsNeutered fontSize={13} color="font_2">
            중성화 {isNeutered ? 'O' : 'X'}
          </S.IsNeutered>
          <Separator $height={8} />
          <S.Weight fontSize={13} color="font_2">
            {weight}
          </S.Weight>
        </S.Wrapper>
        <S.Comment fontSize={9} color="font_2">
          {comment}
        </S.Comment>
      </S.Info>
    </S.DogProfile>
  );
};
