import { Alert } from 'react-native';
import { useBlock } from '~apis/block/useBlock';
import { UserInfo } from '~components/Common/UserInfo';
import { useToast } from '~hooks/useToast';
import { queryClient } from '~providers/QueryClientProvider';
import { NoBlockedUsers } from '~components/MyPage/NoBlockedUsers';

export const BlockedUsers = () => {
  const { blockedUsers, unblockUserMutation } = useBlock();
  const { successToast } = useToast();

  const handleUnblock = (id: number) => {
    Alert.alert('차단 해제하시겠습니까?', '', [
      {
        text: '취소',
        style: 'cancel',
      },
      {
        text: '차단 해제',
        onPress: () =>
          unblockUserMutation.mutate(id, {
            onSuccess: () => {
              successToast('차단이 해제되었습니다');
              queryClient.invalidateQueries({ queryKey: ['allBlockedUsers'] });
            },
          }),
      },
    ]);
  };

  return (
    <UserInfo.Container contentContainerStyle={{ flex: 1 }}>
      {blockedUsers.length === 0 ? (
        <NoBlockedUsers />
      ) : (
        blockedUsers.map((user, idx) => (
          <UserInfo.Item
            key={user.blockId}
            avatarNumber={4}
            buttonText={'차단 해제'}
            familyRole={user.familyRole}
            gender={user.memberGender}
            name={user.blockedMemberName}
            onPressButton={() => handleUnblock(user.blockId)}
            userId={user.blockId}
            isLast={idx === blockedUsers.length - 1}
          />
        ))
      )}
    </UserInfo.Container>
  );
};
