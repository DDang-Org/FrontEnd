import { NaverMapView } from '@mj-studio/react-native-naver-map';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import * as S from './walk-styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const WalkScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <S.SafeContainer>
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

      <S.MapContainer>
        <NaverMapView
          style={{ width: '100%', height: '100%' }}
          isShowLocationButton={false}
          isShowZoomControls={false}
          isShowCompass={false}
        />

        <S.WalkMessage>
          <S.MessageText fontSize={14}>
            주변에 5마리가 산책을 하고 있어요. {'\n'}
            같이 산책을 해보세요!
          </S.MessageText>
          <S.MessageTail />
        </S.WalkMessage>

        <S.LocationButton onPress={() => {}} text="⊕ 내 위치로" bgColor="font_1" />

        <S.StartButton text="산책 시작" onPress={() => console.log('산책 시작')} />
      </S.MapContainer>
    </S.SafeContainer>
  );
};
