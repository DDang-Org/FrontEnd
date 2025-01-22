import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';
import { TextBold } from '~components/Common/Text';

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
