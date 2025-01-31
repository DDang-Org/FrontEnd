import { Profile } from '~components/Common/Profile';
import { Separator } from '~components/Common/Seperator';
import * as S from './styles';
import { UnreadChatCount } from '~components/Common/UnreadChatCount';

export const Talk = () => {
  return (
    <S.Talk>
      <TalkItem />
      <TalkItem />
      <TalkItem />
      <TalkItem />
      <TalkItem />
      <TalkItem />
    </S.Talk>
  );
};

const TalkItem = () => {
  return (
    <S.TalkItem>
      <Profile.Mine size={48} />
      <S.MainContainer>
        <S.TypoWrapper>
          <S.Name fontSize={17}>감자탕수육</S.Name>
          <S.FamilyRoleGenderWrapper>
            <S.FamilyRole fontSize={13} color="font_2">
              이모
            </S.FamilyRole>
            <Separator $height={8} />
            <S.Gender fontSize={13} color="font_2">
              여
            </S.Gender>
          </S.FamilyRoleGenderWrapper>
        </S.TypoWrapper>
        <S.TalkContent fontSize={14}>안녕하세요!</S.TalkContent>
      </S.MainContainer>
      <S.UnreadChatCountWrapper>
        <UnreadChatCount unreadCount={15} />
      </S.UnreadChatCountWrapper>
    </S.TalkItem>
  );
};
