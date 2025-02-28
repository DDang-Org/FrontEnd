import { useInfiniteNotifications } from '~apis/notification/useInfiniteNotifications';
import { DescriptionWithTimeStamp } from '~components/Common/DescriptionWithTimeStamp';
import * as S from './styles';
import { View } from 'react-native';
import { TextBold } from '~components/Common/Text';
import { Icon } from '~components/Common/Icons';

export const NotificationScreen = () => {
  const notifications = useInfiniteNotifications();
  const isEmpty = !notifications || !notifications.pages || !notifications.pages[0].data.content.length;

  return (
    <S.NotificationScreen contentContainerStyle={{ flex: 1 }}>
      {isEmpty ? (
        <S.EmptyNotification>
          <View>
            <S.EmptyNotificationText fontSize={20}>최근 5일동안</S.EmptyNotificationText>
            <TextBold fontSize={20}>도착한 알림이 없어요.</TextBold>
          </View>
          <Icon.DogTurnedBack />
        </S.EmptyNotification>
      ) : (
        notifications.pages.map(n =>
          n.data.content.map(d => <DescriptionWithTimeStamp description={d.content} time={d.createdAt.slice(0, 10)} />),
        )
      )}
    </S.NotificationScreen>
  );
};
