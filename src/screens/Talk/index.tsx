import { Separator } from '~components/Common/Seperator';
import { Profile } from '~components/Common/Profile';
import { getKoreanRole } from '~utils/getKoreanRoleWithName';
import * as S from './styles';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabBarParamList } from '~navigation/BottomTabNavigator';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUserById } from '~apis/member/fetchUserById';
import { TalkArea } from '~components/Talk/TalkArea';
import { Icon } from '~components/Common/Icons';

interface TalkScreenProps extends BottomTabScreenProps<TabBarParamList> {}

export const TalkScreen = ({ navigation, route }: TalkScreenProps) => {
  const memberId = route.params!.userId; //! 항상 params로 userId를 넘겨줌
  const { data: userInfoById } = useQuery({
    queryKey: ['userInfoById', memberId],
    queryFn: () => fetchUserById({ memberId }),
    select: ({ data }) => data,
  });
  const avatarNumber = 1;
  const userId = 1;
  const name = '감자탕수육';
  const gender = 'MALE';
  const dogGender = 'FEMALE';
  const familyRole = 'FATHER';

  useEffect(() => {
    navigation.setOptions({
      headerTitle: userInfoById?.memberName,
    });
  }, [navigation, userInfoById?.memberName]);
  return (
    <S.Talk>
      <S.Header>
        <S.LeftContentContainer>
          <Icon.Prev style={{ marginRight: 8 }} onPress={() => navigation.navigate('Social')} />
          <Profile size={40} avatarNumber={avatarNumber} userId={userId} />
          <S.TypoWrapper>
            <S.Name fontSize={15}>{name}</S.Name>
            <S.GenderFamilyRoleWrapper>
              <S.Gender fontSize={11}>{gender === 'MALE' ? '남자' : '여자'}</S.Gender>
              <Separator $height={8} />
              <S.FamilyRole fontSize={11}>{getKoreanRole({ dogGender, familyRole })}</S.FamilyRole>
            </S.GenderFamilyRoleWrapper>
          </S.TypoWrapper>
        </S.LeftContentContainer>
        <Icon.Ellipsis style={{ position: 'absolute', right: 20, top: 24 }} />
      </S.Header>
      <TalkArea />
      <S.TalkInputWrapper>
        <S.TalkInput fontSize={15} placeholder="채팅 내용 입력" />
      </S.TalkInputWrapper>
      {/* 전송 버튼 만들기 */}
    </S.Talk>
  );
};
