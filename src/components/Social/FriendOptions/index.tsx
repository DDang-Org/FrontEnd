import { useUserById } from '~apis/member/useUserById';
import { CompoundOption } from '~components/Common/CompoundOptions';
import { Profile } from '~components/Common/Profile';
import { TextBold } from '~components/Common/Text';
import * as S from './styles';
import { useDeleteFriend } from '~apis/friend/useDeleteFriend';
import { Alert } from 'react-native';

interface FriendOptionsProps {
  isVisible: boolean;
  hideOption: () => void;
  friendId: number;
}

export const FriendOptions = ({ isVisible, hideOption, friendId }: FriendOptionsProps) => {
  const { data: friendInfo, isPending, isError } = useUserById({ memberId: friendId });
  const deleteFrinedMutation = useDeleteFriend();
  const handleDeleteFriend = () => {
    Alert.alert(`'${friendInfo?.memberName}'님을 친구 목록에서 삭제하시겠습니까?`, '', [
      {
        text: '취소',
        style: 'cancel',
      },
      {
        text: '삭제하기',
        onPress: () => {
          deleteFrinedMutation.mutate(friendId, {
            onSuccess: hideOption,
            onError: error => console.error(error),
            onSettled: () => console.log(friendId),
          });
        },
      },
    ]);
  };

  if (isPending || isError) {
    return <></>;
  }

  return (
    <CompoundOption isVisible={isVisible} hideOption={hideOption}>
      <CompoundOption.Background>
        <CompoundOption.Container>
          <S.FriendProfile>
            <Profile size={80} avatarNumber={friendInfo.memberProfileImg} />
            <TextBold fontSize={15}>{friendInfo.memberName}</TextBold>
          </S.FriendProfile>
          <CompoundOption.Divider />
          <CompoundOption.Button onPress={() => null}>상세 프로필 보기(미구현)</CompoundOption.Button>
          <CompoundOption.Divider />
          <CompoundOption.Button onPress={handleDeleteFriend} isDanger>
            친구 삭제
          </CompoundOption.Button>
        </CompoundOption.Container>
        <CompoundOption.Container>
          <CompoundOption.Button onPress={hideOption}>취소</CompoundOption.Button>
        </CompoundOption.Container>
      </CompoundOption.Background>
    </CompoundOption>
  );
};
