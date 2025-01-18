import { NaverMapView } from '@mj-studio/react-native-naver-map';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import * as S from './walk-styles';

export const WalkScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <S.SafeContainer>
      <S.Header>
        <S.BackButton onPress={() => navigation.goBack()}>
          <S.BackIcon>←</S.BackIcon>
        </S.BackButton>
        <S.Title>강남구 논현동</S.Title>
        <S.ProfileContainer>
          <S.ProfileImage source={{ uri: 'https://avatars.githubusercontent.com/u/65541546?v=4' }} />
        </S.ProfileContainer>
      </S.Header>

      <S.MapContainer>
        <NaverMapView style={{ width: '100%', height: '100%' }} />

        <S.WalkMessage>
          <S.MessageText>
            주변에 5마리가 산책을 하고 있어요. {'\n'}
            <S.MessageText>같이 산책을 해보세요!</S.MessageText>
          </S.MessageText>
        </S.WalkMessage>

        <S.LocationButton onPress={() => {}}>
          <S.LocationIcon>⊕</S.LocationIcon>
          <S.LocationText>내 위치로</S.LocationText>
        </S.LocationButton>

        <S.StartButton>
          <S.StartButtonText>산책 시작</S.StartButtonText>
        </S.StartButton>
      </S.MapContainer>
    </S.SafeContainer>
  );
};
