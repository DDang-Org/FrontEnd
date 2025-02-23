import { HTTPError } from 'ky';
import { api } from '~apis/api';
import { APIResponse } from '~types/api';
import { FamilyRole } from '~types/family-role';
import { Gender } from '~types/gender';

interface BlockedUser {
  blockId: number;
  blockedMemberName: string;
  memberGender: Gender;
  familyRole: FamilyRole;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
  offset: number;
  sort: {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
  };
}

export interface ResponseBlockList {
  pageable: Pageable;
  numberOfElements: number;
  size: number;
  content: BlockedUser[];
  number: number;
  sort: {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
  };
  first: boolean;
  last: boolean;
  empty: boolean;
}

export const fetchBlockedUsers = async (page = 0): Promise<APIResponse<ResponseBlockList>> => {
  try {
    const response = await api
      .get('block/list', {
        json: { page },
      })
      .json<APIResponse<ResponseBlockList>>();
    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorData = error.response.json();
      console.error(errorData);
    }
    throw error;
  }
};
