import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useBlockedUsers } from '~apis/member/useBlockedUsers';
import { UserInfo } from '~components/Common/UserInfo';
import { TabBarParamList } from '~navigation/BottomTabNavigator';

export const FriendTab = () => {
  const navigation = useNavigation<NavigationProp<TabBarParamList>>();
  const blockedUsers = useBlockedUsers();

  return (
    <UserInfo>
      (
      <UserInfo.Container
        data={blockedUsers?.map(user => ({
          ...user,
          userId: user.memberId,
          onPressButton: () => {},
          buttonText: '메시지',
          isLast: false,
        }))}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item, index }) => (
          <UserInfo.Item
            {...item}
            isLast={index === blockedUsers.length - 1}
            // 채팅창 띄우기
            onPressButton={() => navigation.navigate('Talk', { userId: item.userId })}
          />
        )}
      />
      ),
    </UserInfo>
  );
};
