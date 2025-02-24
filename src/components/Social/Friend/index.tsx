import { NavigationProp, useNavigation } from '@react-navigation/native';
import { createContext, useMemo, useState } from 'react';
import { useDogInfoByMemberId } from '~apis/dog/useDogInfoByMemberId';
import { FetchFriendsResponseType } from '~apis/friend/fetchFriends';
import { useFriends } from '~apis/friend/useFriends';
import { UserInfo } from '~components/Common/UserInfo';
import { FriendOptions } from '~components/Social/FriendOptions';
import { SocialNavigations } from '~constants/navigations';
import { SocialParamList } from '~navigation/SocialNavigator';

interface FriendOptionProps {
  setIsFriendOptionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setFriendId: React.Dispatch<React.SetStateAction<number>>;
}

export const FriendOptionContext = createContext<FriendOptionProps | undefined>(undefined);

export const FriendTab = () => {
  const friends = useFriends();
  const [isFriendOptionsVisible, setIsFriendOptionsVisible] = useState(false);
  const [friendId, setFriendId] = useState(1);

  const friendItems = useMemo(() => {
    return (
      <UserInfo>
        <UserInfo.Container>
          {friends?.map((friend, idx) => (
            <>
              <Item
                key={friend.memberId}
                friend={friend}
                memberId={friend.memberId}
                isLast={idx === friends.length - 1}
              />
            </>
          ))}
        </UserInfo.Container>
      </UserInfo>
    );
  }, [friends]);

  return (
    <>
      <FriendOptionContext.Provider value={{ setIsFriendOptionsVisible, setFriendId }}>
        {friendItems}
      </FriendOptionContext.Provider>
      <FriendOptions
        isVisible={isFriendOptionsVisible}
        hideOption={() => setIsFriendOptionsVisible(false)}
        friendId={friendId}
      />
    </>
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
  const navigation = useNavigation<NavigationProp<SocialParamList>>();
  if (!dogInfos || !dogInfos.length) {
    return null;
  }
  return (
    <>
      <UserInfo.Item
        avatarNumber={friend.memberProfileImg}
        buttonText="메시지"
        familyRole={friend.familyRole}
        gender={friend.memberGender}
        name={friend.memberName}
        onPressButton={() => navigation.navigate(SocialNavigations.CHATROOM, { userId: friend.memberId })}
        userId={friend.memberId}
        isLast={isLast}
        optionButton
      />
    </>
  );
};
