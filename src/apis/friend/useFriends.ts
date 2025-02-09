import { useQuery } from '@tanstack/react-query';
import { fetchFriends } from '~apis/friend/fetchFriends';

export const useFriends = () => {
  const { data } = useQuery({
    queryKey: ['friends'],
    queryFn: fetchFriends,
  });
  return data?.data;
};
