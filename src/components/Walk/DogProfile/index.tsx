import styled from '@emotion/native';

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

const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const InfoContainer = styled.View`
  margin-left: 12px;
`;

const DogName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const DogInfo = styled.Text`
  font-size: 14px;
  color: #666;
`;

const WalkCount = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 2px;
`;

export const DogProfile = ({ dog, showWalkCount = false, walkCount = 0 }: DogProfileProps) => {
  return (
    <ProfileContainer>
      <ProfileImage source={{ uri: dog.imageUrl }} />
      <InfoContainer>
        <DogName>{dog.name}</DogName>
        <DogInfo>
          {dog.breed} {dog.age} {dog.gender}
        </DogInfo>
        {showWalkCount && <WalkCount>산책 횟수 {walkCount}회</WalkCount>}
      </InfoContainer>
    </ProfileContainer>
  );
};
