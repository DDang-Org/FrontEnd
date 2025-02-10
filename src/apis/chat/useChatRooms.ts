import { useQuery } from '@tanstack/react-query';
import { fetchChatRooms } from '~apis/chat/fetchChatRooms';

export const useChatRooms = () => {
  const { data } = useQuery({
    queryKey: ['chatRooms'],
    queryFn: fetchChatRooms,
  });
  return data?.data;
};
