import { api } from '~apis/api.ts';
import { APIResponse } from '~types/api';
import { FamilyRole } from '~types/family-role';
import { Gender } from '~types/gender';

export type FetchChatRoomsResponseType = {
  chatRoomId: number;
  name: string;
  lastMessage: string;
  unreadMessageCount: number;
  members: [
    {
      memberId: number;
      memberName: string;
      email: string;
      memberGender: Gender;
      familyRole: FamilyRole;
      memberProfileImg: number;
    },
  ];
}[];
export const fetchChatRooms = async (): Promise<APIResponse<FetchChatRoomsResponseType>> => {
  try {
    const response = await api.get('chat/rooms').json<APIResponse<FetchChatRoomsResponseType>>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
