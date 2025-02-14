import { Pressable } from 'react-native';
import { useState } from 'react';
import { useMyDogInfo } from '~apis/dog/useMyDogInfo';
import { useFirstMyDogInfo } from '~apis/dog/useFirstMyDogInfo';
import { Icon } from '~components/Common/Icons';
import { Separator } from '~components/Common/Seperator';
import { getAge } from '~utils/getAge';
import * as S from './styles';
import { Profile } from '~components/Common/Profile';
import { FetchMyDogInfoResponseType } from '~apis/dog/fetchMyDogInfo';
interface DogProfileProps {
  navigateToDogProfileEdit: () => void;
}

export const DogProfile = ({ navigateToDogProfileEdit }: DogProfileProps) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedDog, setSelectedDog] = useState<FetchMyDogInfoResponseType | null>(null);
  const { data: allDogs, isPending, isError } = useMyDogInfo();
  const firstDog = useFirstMyDogInfo();
  const currentDog = selectedDog || firstDog;

  if (isPending || isError) {
    return <></>;
  }

  console.log('allDogs : ', allDogs);
  console.log('firstDog : ', firstDog);

  const toggleExpand = () => setExpanded(!expanded);
  const handleSelectDog = (dog: FetchMyDogInfoResponseType) => {
    setSelectedDog(dog);
    setExpanded(false);
  };

  return (
    <S.DogProfile expanded={expanded} paddingHorizontal={25} paddingVertical={14}>
      <S.FirstDogProfile>
        <Profile src={currentDog.dogProfileImg} size={80} />
        <S.Info>
          <S.Heading>
            <S.Name fontSize={20}>{currentDog.dogName}</S.Name>
            <S.Wrapper>
              <S.Breed fontSize={13}>{currentDog.breed}</S.Breed>
              <Separator $height={8} />
              <S.Age fontSize={13}>{getAge(currentDog.dogBirthDate)}살</S.Age>
              <Separator $height={8} />
              <S.Gender fontSize={13}>{currentDog.dogGender === 'MALE' ? '남' : '여'}</S.Gender>
            </S.Wrapper>
          </S.Heading>
          <S.Wrapper>
            <S.IsNeutered fontSize={13} color="font_2">
              중성화 {currentDog.isNeutered ? 'O' : 'X'}
            </S.IsNeutered>
            <Separator $height={8} />
            <S.Weight fontSize={13} color="font_2">
              {currentDog.weight}
            </S.Weight>
          </S.Wrapper>
          <S.Comment fontSize={9} color="font_2">
            {currentDog.comment}
          </S.Comment>
        </S.Info>
        <S.EditButton onPress={navigateToDogProfileEdit}>
          <Icon.Edit />
        </S.EditButton>

        {/* 확장/축소 버튼 */}
        <S.EditOtherButton onPress={toggleExpand}>
          <S.StyledIcon expanded={expanded} />
          {expanded ? '접기' : '모두 보기'}
        </S.EditOtherButton>
      </S.FirstDogProfile>

      {/* 구분선 */}
      <S.Line />

      {/* 확장 시 모든 강아지 목록 표시 */}
      {expanded && (
        <S.OtherDogWrapper>
          {allDogs
            .filter(dog => dog.dogId !== currentDog.dogId) // 현재 선택된 강아지를 제외
            .map(dog => (
              <Pressable key={dog.dogId} onPress={() => handleSelectDog(dog)}>
                {/* 다른 강아지 프로필 렌더링 */}
                <S.OtherDogProfile>
                  <Profile src={dog.dogProfileImg} size={80} />
                  <S.Info>
                    <S.Heading>
                      <S.Name fontSize={20}>{dog.dogName}</S.Name>
                      <S.Wrapper>
                        <S.Breed fontSize={13}>{dog.breed}</S.Breed>
                        <Separator $height={8} />
                        <S.Age fontSize={13}>{getAge(dog.dogBirthDate)}살</S.Age>
                        <Separator $height={8} />
                        <S.Gender fontSize={13}>{dog.dogGender === 'MALE' ? '남' : '여'}</S.Gender>
                      </S.Wrapper>
                    </S.Heading>
                    <S.Wrapper>
                      <S.IsNeutered fontSize={13} color="font_2">
                        중성화 {dog.isNeutered === 'FALSE' ? 'O' : 'X'}
                      </S.IsNeutered>
                      <Separator $height={8} />
                      <S.Weight fontSize={13} color="font_2">
                        {dog.weight}kg
                      </S.Weight>
                    </S.Wrapper>
                    <S.Comment fontSize={11} color="font_2">
                      {dog.comment}
                    </S.Comment>
                  </S.Info>
                </S.OtherDogProfile>
              </Pressable>
            ))}
        </S.OtherDogWrapper>
      )}
    </S.DogProfile>
  );
};
