import { useBlockedUsers } from '~apis/member/useBlockedUsers';
import { UserInfo } from '~components/Common/UserInfo';

export const BlockedUsers = () => {
  const blockedUsers = useBlockedUsers();

  return (
    <UserInfo.Container>
      {blockedUsers?.map((user, idx) => (
        <UserInfo.Item
          key={user.memberId}
          avatarNumber={user.avatarNumber}
          buttonText={user.buttonText}
          dogGender={user.dogGender}
          familyRole={user.familyRole}
          gender={user.gender}
          name={user.name}
          onPressButton={() => {}}
          userId={user.memberId}
          isLast={idx === blockedUsers.length - 1}
        />
      ))}
    </UserInfo.Container>
  );
};
