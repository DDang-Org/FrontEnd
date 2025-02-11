import { TextBold } from '~components/Common/Text';
import * as S from './styles';

interface DogProfileProps {
  imageUri: string;
  dogName: string;
  onPress: () => void;
}

export const DogProfile = ({ imageUri, dogName, onPress }: DogProfileProps) => {
  return (
    <S.DogProfile onPress={onPress}>
      <S.DogImage source={{ uri: imageUri }} resizeMode="cover" />
      <TextBold fontSize={17}>{dogName} 일기</TextBold>
    </S.DogProfile>
  );
};
