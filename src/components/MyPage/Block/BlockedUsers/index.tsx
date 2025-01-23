import { useBlockedUsers } from '~apis/member/useBlockedUsers';
import { UserInfo } from '~components/Common/UserInfo';

export const BlockedUsers = () => {
  const blockedUsers = useBlockedUsers();

  return (
    <UserInfo.Container
      data={blockedUsers?.map(user => ({ ...user, onPressButton: () => {}, isLast: false }))}
      keyExtractor={(item, index) => `${item.name}-${index}`}
      renderItem={({ item, index }) => (
        <UserInfo.Item
          name={item.name}
          gender={item.gender}
          dogGender={item.dogGender}
          familyRole={item.familyRole}
          buttonText={item.buttonText}
          isLast={index === blockedUsers.length - 1} // Mark the last item
          onPressButton={() => console.log(`${item.name} button clicked`)}
        />
      )}
    />
  );
};
