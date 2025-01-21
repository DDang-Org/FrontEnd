import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';
import { BooleanString } from '~types/boolean-string';

//! 임시 Response
export type FetchNotificationPermissionResponseType = {
  gangbunttaNotificationAllowed: BooleanString;
  walkNotificationAllowed: BooleanString;
  chatNotificationAllowed: BooleanString;
  friendNotificationAllowed: BooleanString;
  familyNotificationAllowed: BooleanString;
};

export const fetchNotificationPermission = async (): Promise<APIResponse<FetchNotificationPermissionResponseType>> => {
  try {
    const response = await api
      .get('notification-settings')
      .json<APIResponse<FetchNotificationPermissionResponseType>>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
