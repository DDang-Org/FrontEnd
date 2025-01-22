import { Separator } from '~components/Common/Seperator';
import * as S from './styles';
interface DogProfileProps {
  dog: {
    id: string;
    name: string;
    breed: string;
    age: string;
    gender: string;
    imageUrl: string;
  };
  showWalkCount?: boolean;
  walkCount?: number;
}

export const DogProfile = ({ dog, showWalkCount = false, walkCount = 0 }: DogProfileProps) => {
  return (
    <S.ProfileContainer>
      <S.ProfileImage source={{ uri: dog.imageUrl }} />
      <S.InfoContainer>
        <S.DogName fontSize={17}>{dog.name}</S.DogName>

        <S.DogInfo fontSize={14}>
          {dog.breed} <Separator $height={8} /> {dog.age} <Separator $height={8} /> {dog.gender}
        </S.DogInfo>
        {showWalkCount && <S.WalkCount>산책 횟수 {walkCount}회</S.WalkCount>}
      </S.InfoContainer>
    </S.ProfileContainer>
  );
};
