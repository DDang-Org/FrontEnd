import styled from '@emotion/native';
import { ResizeButton } from '~components/Common/ResizeButton';
import { TextBold } from '~components/Common/Text';

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: white;
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
`;

export const StartButtonText = styled.Text`
  color: white;
  font-weight: bold;
  width: 95px;
`;

export const LocationButton = styled(ResizeButton)`
  position: absolute;
  bottom: 100px;
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

export const WalkingInfoContainer = styled.View`
  position: absolute;
  bottom: 12px;
  align-self: center;
  flex-direction: row;
  align-items: center;
  background-color: white;
  padding: 12px 20px;
  border-radius: 100px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
  width: 335px;
`;

export const WalkingInfo = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const InfoText = styled(TextBold)`
  flex: 1;
  text-align: center;
`;

export const StopButton = styled(ResizeButton)`
  width: 100px;
`;
