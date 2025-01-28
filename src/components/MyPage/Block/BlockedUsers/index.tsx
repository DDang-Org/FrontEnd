import { useBlockedUsers } from '~apis/member/useBlockedUsers';
import { UserInfo } from '~components/Common/UserInfo';

export const BlockedUsers = () => {
  const blockedUsers = useBlockedUsers();

  return (
    <UserInfo.Container
      data={blockedUsers?.map(user => ({
        ...user,
        userId: user.memberId,
        onPressButton: () => {},
        buttonText: '차단 해제',
        isLast: false,
      }))}
      keyExtractor={(item, index) => `${item.name}-${index}`}
      renderItem={({ item, index }) => (
        <UserInfo.Item
          {...item}
          isLast={index === blockedUsers.length - 1} // Mark the last item
          onPressButton={() => console.log(`${item.name} button clicked`)}
        />
      )}
    />
  );
};
