import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchNotifications } from '~apis/notification/fetchNotifications';

export const useInfiniteNotifications = () => {
  const query = useInfiniteQuery({
    queryKey: ['notifications', 0],
    queryFn: ({ pageParam }) => fetchNotifications({ page: pageParam as number }),
    initialPageParam: 0,
    getNextPageParam: lastPage => (lastPage.data.last ? undefined : lastPage.data.pageable.pageNumber + 1),
  });

  return query.data;
};
