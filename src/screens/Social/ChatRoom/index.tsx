import { Separator } from '~components/Common/Seperator';
import * as S from './styles';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TalkArea } from '~components/Talk/TalkArea';
import { Icon } from '~components/Common/Icons';
import { SocialParamList } from '~navigation/SocialNavigator';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { TextBold } from '~components/Common/Text';
import { useUserById } from '~apis/member/useUserById';
import { Profile } from '~components/Common/Profile';
import { FAMILY_ROLE } from '~constants/family-role';
import { useState } from 'react';
import { ChatRoomOptions } from '~components/Talk/ChatRoomOptions';

interface TalkScreenProps extends BottomTabScreenProps<SocialParamList> {}

export const ChatRoomScreen = ({ navigation, route }: TalkScreenProps) => {
  const memberId = route.params!.userId; //! 항상 params로 userId를 넘겨줌
  const chatPartner = useUserById({ memberId });
  const [isOptionVisible, setIsOptionVisible] = useState(false);

  return (
    <S.Talk>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}
      >
        <S.Header>
          <S.LeftContentContainer>
            <Icon.Prev style={{ marginRight: 8 }} onPress={() => navigation.goBack()} />
            <Profile size={40} avatarNumber={chatPartner.memberProfileImg!} userId={chatPartner.memberId} />
            <S.TypoWrapper>
              <S.Name fontSize={15}>{chatPartner.memberName}</S.Name>
              <S.GenderFamilyRoleWrapper>
                <S.Gender fontSize={11}>{chatPartner.memberGender === 'MALE' ? '남자' : '여자'}</S.Gender>
                <Separator $height={8} />
                <S.FamilyRole fontSize={11}>{FAMILY_ROLE[chatPartner.familyRole]}</S.FamilyRole>
              </S.GenderFamilyRoleWrapper>
            </S.TypoWrapper>
          </S.LeftContentContainer>
          <Icon.Ellipsis
            style={{ position: 'absolute', right: 20, top: 24 }}
            onPress={() => setIsOptionVisible(true)}
          />
        </S.Header>

        <TalkArea />
        <S.TalkInputWrapper>
          <S.TalkInput fontSize={15} placeholder="채팅 내용 입력" textAlignVertical="center" />
          <S.MessageSendButtonWrapper>
            <S.MessageSendButton>
              <TextBold fontSize={14}>전송</TextBold>
            </S.MessageSendButton>
          </S.MessageSendButtonWrapper>
        </S.TalkInputWrapper>
        <ChatRoomOptions
          isVisible={isOptionVisible}
          hideOption={() => setIsOptionVisible(false)}
          chatPartnerId={chatPartner.memberId}
        />
      </KeyboardAvoidingView>
    </S.Talk>
  );
};
