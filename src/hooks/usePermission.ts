import { Alert, Linking, Platform } from 'react-native';
import { check, request, PERMISSIONS, Permission, RESULTS } from 'react-native-permissions';
import { permissionMessages } from '~/constants/permission-message';

type PermissionType = 'LOCATION' | 'PHOTO' | 'CAMERA';

type PermissionOSType = {
  [key in PermissionType]: Permission;
};

const androidPermission: PermissionOSType = {
  LOCATION: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  PHOTO: PERMISSIONS.ANDROID.READ_MEDIA_VISUAL_USER_SELECTED,
  CAMERA: PERMISSIONS.ANDROID.CAMERA,
};

const iosPermission: PermissionOSType = {
  LOCATION: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  PHOTO: PERMISSIONS.IOS.PHOTO_LIBRARY,
  CAMERA: PERMISSIONS.IOS.CAMERA,
};

export const usePermission = () => {
  const showPermissionAlert = (type: PermissionType) => {
    Alert.alert(permissionMessages[`${type}_PERMISSION`].TITLE, permissionMessages[`${type}_PERMISSION`].DESCRIPTION, [
      {
        text: '설정하기',
        onPress: () => Linking.openSettings(),
      },
      {
        text: '취소',
        style: 'cancel',
      },
    ]);
  };

  const checkPermission = async (type: PermissionType) => {
    const isAndroid = Platform.OS === 'android';
    const permissionOS = isAndroid ? androidPermission[type] : iosPermission[type];

    const checked = await check(permissionOS);

    return checked;
  };

  const requestPermission = async (type: PermissionType, status: string) => {
    const isAndroid = Platform.OS === 'android';
    const permissionOS = isAndroid ? androidPermission[type] : iosPermission[type];

    switch (status) {
      case RESULTS.DENIED:
        if (isAndroid) {
          showPermissionAlert(type);
          return;
        }
        await request(permissionOS);
        break;
      case RESULTS.BLOCKED:
      case RESULTS.LIMITED:
        showPermissionAlert(type);

        break;
      default:
        break;
    }
  };

  const requestAndCheckPermission = async (type: PermissionType) => {
    const status = await checkPermission(type);

    if (status === RESULTS.GRANTED) {
      return true;
    }

    await requestPermission(type, status);

    const finalStatus = await checkPermission(type);
    return finalStatus === RESULTS.GRANTED;
  };

  return { requestAndCheckPermission };
};
