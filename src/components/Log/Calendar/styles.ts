import styled from '@emotion/native';
import Animated from 'react-native-reanimated';
import { TextBold } from '~components/Common/Text';

export const Calendar = styled.View`
  background-color: ${props => props.theme.colors.gc_4};
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
  overflow: hidden;
`;

export const CalendarBody = styled(Animated.View)`
  padding: 0 24px 24px;
  overflow: hidden;
  gap: 8px;
  position: relative;
`;

export const Week = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const DayOfWeek = styled(TextBold)`
  flex: 1;
  text-align: center;
  width: 12px;
  height: 20px;
`;

export const DragIndicator = styled.View`
  background-color: ${props => props.theme.colors.gc_1};
  position: absolute;
  width: 32px;
  height: 4px;
  align-self: center;
  bottom: 8px;
  border-radius: 24px;
`;
