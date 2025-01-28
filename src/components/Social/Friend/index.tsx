import { useBlockedUsers } from '~apis/member/useBlockedUsers';
import { UserInfo } from '~components/Common/UserInfo';

export const Friend = () => {
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
            onPressButton={() => console.log(`${item.name} button clicked`)}
          />
        )}
      />
      ),
    </UserInfo>
  );
};
