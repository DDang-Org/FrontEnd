import styled from '@emotion/native';
import { TextBold } from '~components/Common/Text';

export const NotificationScreen = styled.ScrollView`
  flex: 1;
`;

export const EmptyNotification = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 34px;
`;

export const EmptyNotificationText = styled(TextBold)`
  text-align: center;
`;
