import { Profile } from '~components/Common/Profile';
import { Separator } from '~components/Common/Seperator';
import * as S from './styles';
import { UnreadChatCount } from '~components/Common/UnreadChatCount';
import { Pressable } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TabBarParamList } from '~navigation/BottomTabNavigator';

export const TalkTab = () => {
  return (
    <S.TalkTab>
      <TalkItem userId={1} />
      <TalkItem userId={1} />
      <TalkItem userId={1} />
      <TalkItem userId={1} />
      <TalkItem userId={1} />
      <TalkItem userId={1} />
    </S.TalkTab>
  );
};

const TalkItem = ({ userId }: { userId: number }) => {
  const navigation = useNavigation<NavigationProp<TabBarParamList>>();

  return (
    <Pressable onPress={() => navigation.navigate('Talk', { userId })}>
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
    </Pressable>
  );
};
