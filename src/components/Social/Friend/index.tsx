import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useDogInfoByMemberId } from '~apis/dog/useDogInfoByMemberId';
import { FetchFriendsResponseType } from '~apis/friend/fetchFriends';
import { useFriends } from '~apis/friend/useFriends';
import { UserInfo } from '~components/Common/UserInfo';
import { TabBarParamList } from '~navigation/BottomTabNavigator';

export const FriendTab = () => {
  const friends = useFriends();
  console.log(friends);
  return (
    <UserInfo>
      (
      <UserInfo.Container>
        {friends?.map((friend, idx) => (
          <Item key={friend.memberId} friend={friend} memberId={friend.memberId} isLast={idx === friends.length - 1} />
        ))}
      </UserInfo.Container>
      ),
    </UserInfo>
  );
};

const Item = ({
  friend,
  memberId,
  isLast,
}: {
  friend: FetchFriendsResponseType[number];
  memberId: number;
  isLast: boolean;
}) => {
  const dogInfos = useDogInfoByMemberId({ memberId });
  const navigation = useNavigation<NavigationProp<TabBarParamList>>();
  console.log({ dogInfos }); //todo 3번 멤버 강아지 없어서 에러 발생. 데이터 추가 요청하기
  if (!dogInfos || !dogInfos.length) {
    return null;
  }
  return (
    <UserInfo.Item
      avatarNumber={friend.memberProfileImg}
      buttonText="메시지"
      dogGender={dogInfos[0].dogGender}
      familyRole={friend.familyRole}
      gender={friend.memberGender}
      name={friend.memberName}
      onPressButton={() => navigation.navigate('Talk', { userId: friend.memberId })}
      userId={friend.memberId}
      isLast={isLast}
    />
  );
};
