import { Separator } from '~components/Common/Seperator';
import { Profile } from '~components/Common/Profile';
import { getKoreanRole } from '~utils/getKoreanRoleWithName';
import * as S from './styles';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabBarParamList } from '~navigation/BottomTabNavigator';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUserById } from '~apis/member/fetchUserById';

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
      <S.LeftContentContainer>
        <Profile size={48} avatarNumber={avatarNumber} userId={userId} />
        <S.TypoWrapper>
          <S.Name fontSize={17}>{name}</S.Name>
          <S.GenderFamilyRoleWrapper>
            <S.Gender fontSize={14}>{gender === 'MALE' ? '남자' : '여자'}</S.Gender>
            <Separator $height={8} />
            <S.FamilyRole fontSize={14}>{getKoreanRole({ dogGender, familyRole })}</S.FamilyRole>
          </S.GenderFamilyRoleWrapper>
        </S.TypoWrapper>
      </S.LeftContentContainer>
    </S.Talk>
  );
};
