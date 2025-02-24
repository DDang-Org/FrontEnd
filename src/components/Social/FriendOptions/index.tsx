import { View } from 'react-native';
import { useUserById } from '~apis/member/useUserById';
import { CompoundOption } from '~components/Common/CompoundOptions';
import { Profile } from '~components/Common/Profile';

interface FriendOptionsProps {
  isVisble: boolean;
  hideOption: () => void;
  friendId: number;
}

export const FriendOptions = ({ isVisble, hideOption, friendId }: FriendOptionsProps) => {
  const friendInfo = useUserById({ memberId: friendId });
  const handleDeleteFriend = () => {};

  return (
    <CompoundOption isVisible={isVisble} hideOption={hideOption}>
      <CompoundOption.Background>
        <CompoundOption.Container>
          <View style={{ width: '100%', height: 150 }}>
            <Profile size={30} avatarNumber={friendInfo.memberProfileImg} />
          </View>
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
