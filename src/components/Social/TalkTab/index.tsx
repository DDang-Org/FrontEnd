import { Profile } from '~components/Common/Profile';
import { Separator } from '~components/Common/Seperator';
import * as S from './styles';
import { UnreadChatCount } from '~components/Common/UnreadChatCount';
import { Pressable } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useChatRooms } from '~apis/chat/useChatRooms';
import { FetchChatRoomsResponseType } from '~apis/chat/fetchChatRooms';
import { getKoreanRole } from '~utils/getKoreanRoleWithName';
import { useDogInfoByMemberId } from '~apis/dog/useDogInfoByMemberId';
import { SocialNavigations } from '~constants/navigations';
import { SocialParamList } from '~navigation/SocialNavigator';

export const TalkTab = () => {
  const chatRooms = useChatRooms();
  console.log({ chatRooms }); // 더미 데이터 없음
  return (
    <S.TalkTab>
      {chatRooms?.map(chatRoom => (
        <TalkItem key={chatRoom.chatRoomId} {...chatRoom} />
      ))}
    </S.TalkTab>
  );
};

const TalkItem = ({ lastMessage, members, name, unreadMessageCount }: FetchChatRoomsResponseType[number]) => {
  const navigation = useNavigation<NavigationProp<SocialParamList>>();
  const opponentDogInfos = useDogInfoByMemberId({ memberId: members[0].memberId });
  return (
    <Pressable onPress={() => navigation.navigate(SocialNavigations.CHATROOM, { userId: members[0].memberId })}>
      <S.TalkItem>
        <Profile size={48} avatarNumber={members[0].memberProfileImg} />
        <S.MainContainer>
          <S.TypoWrapper>
            <S.Name fontSize={17}>{name}</S.Name>
            <S.FamilyRoleGenderWrapper>
              <S.FamilyRole fontSize={13} color="font_2">
                {getKoreanRole({
                  dogGender: opponentDogInfos ? opponentDogInfos[0]?.dogGender : 'MALE',
                  familyRole: members[0].familyRole,
                })}
              </S.FamilyRole>
              <Separator $height={8} />
              <S.Gender fontSize={13} color="font_2">
                {members[0].memberGender === 'MALE' ? '남' : '여'}
              </S.Gender>
            </S.FamilyRoleGenderWrapper>
          </S.TypoWrapper>
          <S.TalkContent fontSize={14}>{lastMessage}</S.TalkContent>
        </S.MainContainer>
        <S.UnreadChatCountWrapper>
          <UnreadChatCount unreadCount={unreadMessageCount} />
        </S.UnreadChatCountWrapper>
      </S.TalkItem>
    </Pressable>
  );
};
