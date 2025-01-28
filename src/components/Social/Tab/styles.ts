import styled from '@emotion/native';
import { Animated, View } from 'react-native';
import { TextBold } from '~components/Common/Text';

export const TabContainer = styled.View`
  position: relative;
`;

export const Tab = styled.View`
  padding: 16.5px 0;
  flex-direction: row;
`;

export const TabItem = styled.View`
  flex: 1;
`;

export const TabItemText = styled(TextBold)`
  text-align: center;
`;

export const TabUnderBar = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  left: 25%;
  width: 32px;
  height: 4px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.font_1};
  transform: translateX(-16px);
`;
