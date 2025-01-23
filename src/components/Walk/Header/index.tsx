import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const WalkHeader = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <S.Header style={{ top: insets.top }}>
      <S.HeaderGradient
        colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 1 }}
      />
      <S.HeaderContent>
        <S.BackButton onPress={() => navigation.goBack()}>
          <S.BackIcon>←</S.BackIcon>
        </S.BackButton>
        <S.Title fontSize={20}>강남구 논현동</S.Title>
        <S.ProfileContainer>
          <S.ProfileImage source={{ uri: 'https://avatars.githubusercontent.com/u/65541546?v=4' }} />
        </S.ProfileContainer>
      </S.HeaderContent>
    </S.Header>
  );
};

export default WalkHeader;
