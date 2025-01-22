import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';
import { ResizeButton } from '~components/Common/ResizeButton';
import { TextBold } from '~components/Common/Text';

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const Header = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  height: 80px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 100%;
`;
export const HeaderGradient = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 8px;
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.gc_2};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const BackIcon = styled.Text`
  font-size: 24px;
  color: black;
`;

export const Title = styled(TextBold)``;

export const ProfileContainer = styled.View`
  width: 40px;
  height: 40px;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

export const MapContainer = styled.View`
  flex: 1;
`;

export const WalkMessage = styled.View`
  position: absolute;
  top: 80px;
  right: 20px;
  padding: 10px 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.lighten_2};

  shadow-color: #000000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;

  elevation: 3;

  z-index: 2;
`;

export const MessageTail = styled.View`
  position: absolute;
  right: 10px;
  top: -5px;
  width: 15px;
  height: 15px;
  background-color: ${({ theme }) => theme.colors.lighten_2};
  transform: rotate(45deg);
`;

export const MessageText = styled(TextBold)``;

export const StartButton = styled(ResizeButton)`
  position: fixed;
  bottom: 80px;
  align-self: center;
  width: 118px;
  background-color: ${({ theme }) => theme.colors.default};
`;

export const StartButtonText = styled.Text`
  color: white;
  font-weight: bold;
  width: 95px;
`;

export const LocationButton = styled(ResizeButton)`
  position: absolute;
  bottom: 90px;
  align-self: center;
  padding: 8px 16px;
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
