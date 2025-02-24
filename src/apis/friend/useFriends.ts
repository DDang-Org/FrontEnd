import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchFriends } from '~apis/friend/fetchFriends';

export const useFriends = () => {
  const { data } = useQuery({
    queryKey: ['friends'],
    queryFn: fetchFriends,
    placeholderData: keepPreviousData,
  });
  return data?.data;
};
