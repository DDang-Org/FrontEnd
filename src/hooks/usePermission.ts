import { useEffect } from 'react';
import { Alert, Linking, Platform } from 'react-native';
import { check, request, PERMISSIONS, Permission, RESULTS } from 'react-native-permissions';
import { permissionMessages } from '~/constants/permission-message';

type PermissionType = 'LOCATION' | 'PHOTO';

type PermissionOSType = {
  [key in PermissionType]: Permission;
};

const androidPermission: PermissionOSType = {
  LOCATION: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  PHOTO: PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
};

const iosPermission: PermissionOSType = {
  LOCATION: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  PHOTO: PERMISSIONS.IOS.PHOTO_LIBRARY,
};

export const usePermission = (type: PermissionType) => {
  useEffect(() => {
    (async () => {
      const isAndroid = Platform.OS === 'android';
      const permissionOS = isAndroid ? androidPermission[type] : iosPermission[type];

      const checked = await check(permissionOS);

      const showPermissionAlert = () => {
        Alert.alert(
          permissionMessages[`${type}_PERMISSION`].TITLE,
          permissionMessages[`${type}_PERMISSION`].DESCRIPTION,
          [
            {
              text: '설정하기',
              onPress: () => Linking.openSettings(),
            },
            {
              text: '취소',
              style: 'cancel',
            },
          ],
        );
      };

      switch (checked) {
        case RESULTS.DENIED:
          if (isAndroid) {
            showPermissionAlert();
            return;
          }

          await request(permissionOS);
          break;
        case RESULTS.BLOCKED:
        case RESULTS.LIMITED:
          showPermissionAlert();
          break;
        default:
          break;
      }
    })();
  }, []);
};
