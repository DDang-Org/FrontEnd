import { HTTPError } from 'ky';
import { api } from '~apis/api';
import { APIResponse } from '~types/api';
import { BooleanString } from '~types/boolean-string';
import { FamilyRole } from '~types/family-role';
import { Gender } from '~types/gender';

interface Sort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}

interface Pageble {
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
  offset: number;
  sort: Sort;
}

interface MemberInfo {
  memberId: number;
  memberName: string;
  email: string;
  memberGender: Gender;
  familyRole: FamilyRole;
  memberProfileImg: number;
}

interface ChatContent {
  chatId: number;
  createdAt: string;
  updatedAt: string;
  chatRoomId: number;
  memberInfo: MemberInfo;
  chatType: string;
  isRead: BooleanString;
  text: string;
}

export interface ResponseFetchChatMessages {
  pageable: Pageble;
  numberOfElements: number;
  size: number;
  content: ChatContent[];
  number: number;
  sort: Sort;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export const fetchChatMessages = async (
  chatRoomId: number,
  lastMessageCreatedAt: string,
): Promise<APIResponse<ResponseFetchChatMessages>> => {
  try {
    const response = await api
      .get(`chat/message/${chatRoomId}`, {
        json: { chatRoomId, lastMessageCreatedAt },
      })
      .json<APIResponse<ResponseFetchChatMessages>>();
    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorData = await error.response.json();
      console.error(errorData);
    }
    throw error;
  }
};
