import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';
import { AvatarNumber } from '~types/avatar-number';
import { FamilyRole } from '~types/family-role';
import { Gender } from '~types/gender';

interface Member {
  memberId: number;
  memberName: string;
  email: string;
  memberGender: Gender;
  familyRole: FamilyRole;
  memberProfileImg: AvatarNumber;
}
export interface ResponseFetchChatRooms {
  chatRoomId: number;
  name: string;
  lastMessage: string;
  unreadMessageCount: number;
  members: Member[];
}
[];
export const fetchChatRooms = async (): Promise<APIResponse<ResponseFetchChatRooms>> => {
  try {
    const response = await api.get('chat/rooms').json<APIResponse<ResponseFetchChatRooms>>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
