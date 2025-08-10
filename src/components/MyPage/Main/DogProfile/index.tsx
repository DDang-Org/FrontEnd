import { Pressable } from 'react-native';
import { useMyDogInfo } from '~apis/dog/useMyDogInfo';
import { Separator } from '~components/Common/Seperator';
import { getAge } from '~utils/getAge';
import * as S from './styles';
import { Profile } from '~components/Common/Profile';
import { Icon } from '~components/Common/Icons';
interface DogProfileProps {
  navigateToDogProfileEdit: () => void;
}

export const DogProfile = ({ navigateToDogProfileEdit }: DogProfileProps) => {
  const { data: allDogs, isPending, isError } = useMyDogInfo();

  if (isPending || isError) {
    return <></>;
  }

  console.log('allDogs : ', allDogs);


  return (
        <S.OtherDogWrapper>
          {allDogs
            .map(dog => (
              <Pressable key={dog.dogId} onPress={() => navigateToDogProfileEdit()}>
                <S.OtherDogProfile>
                  <Profile src={dog.dogProfileImg} size={80} />
                  <S.Info>
                    <S.Heading>
                      <S.Name fontSize={20}>{dog.dogName}</S.Name>
                      <S.Wrapper>
                        {/* <S.Breed fontSize={13}>{dog.breed}</S.Breed> */}
                        <Separator $height={8} />
                        <S.Gender fontSize={13}>{dog.dogGender === 'MALE' ? <Icon.Male width={18} height={18} color={'#6586FF'}/> : <Icon.Female width={18} height={18} color={'#FF7575'}/>}</S.Gender>
                      </S.Wrapper>
                    </S.Heading>
                    <S.Wrapper>
                      {/* <S.IsNeutered fontSize={13} color="font_2">
                        중성화 {dog.isNeutered === 'FALSE' ? 'O' : 'X'}
                      </S.IsNeutered> */}
                      <S.Age fontSize={13}>{getAge(dog.dogBirthDate)}살</S.Age>
                      <Separator $height={8} />
                      <S.Weight fontSize={13} color="font_2">
                        {dog.weight}kg
                      </S.Weight>
                    </S.Wrapper>
                    {/* <S.Comment fontSize={11} color="font_2">
                      {dog.comment}
                    </S.Comment> */}
                  </S.Info>
                  <S.ArrowBtnWrapper>
                    <Icon.ArrowToDetail/>
                  </S.ArrowBtnWrapper>
                </S.OtherDogProfile>
              </Pressable>
            ))}
        </S.OtherDogWrapper>
  );
};
