import { useQuery } from '@tanstack/react-query';
import { fetchChatMessages } from '~apis/chat/fetchChatMessages';
import { UseQueryCustomOptions } from '~types/api';

export const useChatMessages = (
  chatRoomId: number,
  lastMessageCreatedAt: string,
  queryOptions?: UseQueryCustomOptions,
) => {
  return useQuery({
    queryKey: ['chatMessages', chatRoomId, lastMessageCreatedAt],
    queryFn: ({ queryKey }) => {
      const [, chatRoomId, lastMessageCreatedAt] = queryKey;
      return fetchChatMessages(chatRoomId as number, lastMessageCreatedAt as string);
    },
    ...queryOptions,
  });
};
