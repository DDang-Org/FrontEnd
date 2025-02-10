import { TextBold } from '~components/Common/Text';
import * as S from './styles';
import { Platform } from 'react-native';

interface DogProfileProps {
  imageUri: string;
  dogName: string;
}

export const DogProfile = ({ imageUri, dogName }: DogProfileProps) => {
  return (
    <S.DogProfile>
      <S.DogImage source={{ uri: imageUri }} resizeMode="cover" />
      <TextBold fontSize={Platform.OS === 'ios' ? 15 : 17}>{dogName} 일기</TextBold>
    </S.DogProfile>
  );
};
