import { useState, useEffect, useCallback } from 'react';
import { Platform } from 'react-native';
import { checkNotifications, requestNotifications } from 'react-native-permissions';

type NotificationPermissionStatus = 'unavailable' | 'denied' | 'limited' | 'granted' | 'blocked';

export const useNotificationPermission = () => {
  const [permissionStatus, setPermissionStatus] = useState<NotificationPermissionStatus>('denied');

  const checkPermission = useCallback(async () => {
    try {
      const { status } = await checkNotifications();
      setPermissionStatus(status);
      return status;
    } catch (error) {
      return 'denied' as NotificationPermissionStatus;
    }
  }, []);

  const requestPermission = useCallback(async () => {
    try {
      const { status } = await requestNotifications(Platform.OS === 'ios' ? ['alert', 'sound', 'badge'] : []);
      setPermissionStatus(status);
      return status;
    } catch (error) {
      return 'denied' as NotificationPermissionStatus;
    }
  }, []);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  return {
    permissionStatus,
    checkPermission,
    requestPermission,
  };
};
