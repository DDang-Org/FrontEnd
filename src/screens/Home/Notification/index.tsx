import { useInfiniteNotifications } from '~apis/notification/useInfiniteNotifications';
import { DescriptionWithTimeStamp } from '~components/Common/DescriptionWithTimeStamp';
import * as S from './styles';

export const NotificationScreen = () => {
  const notifications = useInfiniteNotifications();

  return (
    <S.NotificationScreen>
      {notifications?.pages.map(n =>
        n.data.content.map(d => <DescriptionWithTimeStamp description={d.content} time={d.createdAt.slice(0, 10)} />),
      )}
    </S.NotificationScreen>
  );
};
