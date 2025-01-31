import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchNotificationPermission } from '~apis/notification/fetchNotificationPermission';

export const useNotificationPermission = () => {
  const { data: notificationPermission } = useSuspenseQuery({
    queryKey: ['notificationPermission'],
    queryFn: fetchNotificationPermission,
    select: ({ data }) => data,
  });
  return notificationPermission;
};
