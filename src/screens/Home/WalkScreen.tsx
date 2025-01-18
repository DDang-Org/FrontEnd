import styled from '@emotion/native';
import { NaverMapView } from '@mj-studio/react-native-naver-map';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: white;
  height: 80px;
`;

const BackButton = styled.TouchableOpacity`
  padding: 8px;
`;

const BackIcon = styled.Text`
  font-size: 24px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

const ProfileContainer = styled.View`
  width: 40px;
  height: 40px;
`;

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const MapContainer = styled.View`
  flex: 1;
`;

const WalkMessage = styled.View`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: white;
  padding: 12px;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  width: 222px;
`;

const MessageText = styled.Text`
  font-size: 14px;
  color: #666;
`;

const StartButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 24px;
  align-self: center;
  background-color: #8b4513;
  padding: 15px 30px;
  border-radius: 25px;
`;

const StartButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const WalkScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeContainer>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon>←</BackIcon>
        </BackButton>
        <Title>강남구 논현동</Title>
        <ProfileContainer>
          <ProfileImage source={{ uri: 'https://avatars.githubusercontent.com/u/65541546?v=4' }} />
        </ProfileContainer>
      </Header>

      <MapContainer>
        <NaverMapView style={{ width: '100%', height: '100%' }} />

        <WalkMessage>
          <MessageText>
            주변에 5마리가 산책을 하고 있어요. {'\n'}
            <MessageText>같이 산책을 해보세요!</MessageText>
          </MessageText>
        </WalkMessage>

        <StartButton>
          <StartButtonText>산책 시작</StartButtonText>
        </StartButton>
      </MapContainer>
    </SafeContainer>
  );
};
