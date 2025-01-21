import styled from '@emotion/native';
import { TextBold, TextMedium } from '~components/Common/Text';

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
`;

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const InfoContainer = styled.View`
  margin-left: 12px;
  flex-direction: column;
`;

export const DogName = styled(TextBold)`
  margin-bottom: 4px;
  color: #111111;
  font-size: 17px;
`;

export const DogInfo = styled(TextMedium)`
  color: ${props => props.theme.colors.font_2};
  font-size: 14px;
`;

export const WalkCount = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 2px;
`;
