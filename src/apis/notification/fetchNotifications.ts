import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';
import { BooleanString } from '~types/boolean-string';

export type FetchNotificationsRequestType = {
  page: number;
};

export type FetchNotificationsResponseType = {
  pageable: {
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    offset: number;
    sort: {
      unsorted: boolean;
      sorted: boolean;
      empty: boolean;
    };
    unpaged: boolean;
  };
  numberOfElements: number;
  size: number;
  content: [
    {
      notificationId: number;
      type: string;
      content: string;
      isRead: BooleanString;
      memberId: number;
      createdAt: string;
    },
  ];
  number: number;
  sort: {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
  };
  first: boolean;
  last: boolean;
  empty: boolean;
};

export const fetchNotifications = async (
  params: FetchNotificationsRequestType,
): Promise<APIResponse<FetchNotificationsResponseType>> => {
  try {
    const response = await api
      .get('notification/list', { searchParams: params })
      .json<APIResponse<FetchNotificationsResponseType>>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
