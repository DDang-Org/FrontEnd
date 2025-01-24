import { useUser } from '~apis/member/useUser';
import Profile from '~components/Common/Profile';
import { Separator } from '~components/Common/Seperator';
import { getKoreanRole } from '~utils/getKoreanRoleWithName';
import * as S from './styles';

export const UserProfile = () => {
  const { address, familyRole, name, gender, profileImg } = useUser();

  return (
    <S.UserProfile paddingVertical={24} paddingHorizontal={20}>
      <Profile size={140} src={profileImg} />
      <S.Name fontSize={24}>{name}</S.Name>
      <S.Address fontSize={15}>{address}</S.Address>
      <S.GenderRoleWrapper>
        <S.Gender fontSize={13}>{gender === 'MALE' ? '남자' : '여자'}</S.Gender>
        <Separator $height={8} />
        <S.Role fontSize={13}>{getKoreanRole({ dogGender: gender, familyRole })}</S.Role>
      </S.GenderRoleWrapper>
    </S.UserProfile>
  );
};
