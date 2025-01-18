import styled from '@emotion/native';

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: white;
  height: 80px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const BackIcon = styled.Text`
  font-size: 24px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

export const ProfileContainer = styled.View`
  width: 40px;
  height: 40px;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const MapContainer = styled.View`
  flex: 1;
`;

export const WalkMessage = styled.View`
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

export const MessageText = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const StartButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 24px;
  align-self: center;
  background-color: #8b4513;
  padding: 15px 30px;
  border-radius: 25px;
`;

export const StartButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const LocationButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 90px;
  align-self: center;
  background-color: #000000;
  padding: 8px 16px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const LocationIcon = styled.Text`
  color: white;
  font-size: 16px;
`;

export const LocationText = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 14px;
`;
