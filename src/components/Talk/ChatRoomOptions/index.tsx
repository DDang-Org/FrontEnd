import { Alert } from 'react-native';
import { useBlock } from '~apis/block/useBlock';
import { CompoundOption } from '~components/Common/CompoundOptions';
import { useToast } from '~hooks/useToast';
import { queryClient } from '~providers/QueryClientProvider';

interface ChatRoomOptionsProps {
  isVisible: boolean;
  hideOption: () => void;
  chatPartnerId: number;
}

export const ChatRoomOptions = ({ isVisible, hideOption, chatPartnerId }: ChatRoomOptionsProps) => {
  const { blockedUsers, blockUserMutation, unblockUserMutation } = useBlock();
  const { successToast } = useToast();

  const isBlocked = blockedUsers.some(blockedUser => blockedUser.blockId === chatPartnerId);

  const handleBlock = () => {
    Alert.alert(
      '상대방을 차단하시겠습니까?',
      '차단하면 차단한 상대방의 메시지를 더 이상 받지 않게 됩니다. 친구로 등록되어 있다면 친구 목록에서도 삭제됩니다.',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '차단하기',
          onPress: () =>
            blockUserMutation.mutate(chatPartnerId, {
              onSuccess: () => {
                successToast('차단되었습니다');
                queryClient.invalidateQueries({ queryKey: ['allBlockedUsers'] });
              },
              onSettled: () => hideOption(),
            }),
        },
      ],
    );
  };

  const handleUnblock = () => {
    Alert.alert('차단 해제하시겠습니까?', '', [
      {
        text: '취소',
        style: 'cancel',
      },
      {
        text: '차단 해제',
        onPress: () =>
          unblockUserMutation.mutate(chatPartnerId, {
            onSuccess: () => {
              successToast('차단이 해제되었습니다');
              queryClient.invalidateQueries({ queryKey: ['allBlockedUsers'] });
            },
            onSettled: () => hideOption(),
          }),
      },
    ]);
  };

  return (
    <CompoundOption isVisible={isVisible} hideOption={hideOption}>
      <CompoundOption.Background>
        <CompoundOption.Container>
          <CompoundOption.Button onPress={() => null}>채팅방 나가기</CompoundOption.Button>
          <CompoundOption.Divider />
          {isBlocked ? (
            <CompoundOption.Button onPress={handleUnblock}>차단 해제</CompoundOption.Button>
          ) : (
            <CompoundOption.Button onPress={handleBlock} isDanger>
              차단하기
            </CompoundOption.Button>
          )}
        </CompoundOption.Container>
        <CompoundOption.Container>
          <CompoundOption.Button onPress={hideOption}>취소</CompoundOption.Button>
        </CompoundOption.Container>
      </CompoundOption.Background>
    </CompoundOption>
  );
};
