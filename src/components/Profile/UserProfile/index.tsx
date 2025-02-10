import { useUserById } from '~apis/member/useUserById';
import { Profile } from '~components/Common/Profile';
import { Separator } from '~components/Common/Seperator';
import { getKoreanRole } from '~utils/getKoreanRoleWithName';
import * as S from './styles';

interface UserProfileProps {
  userId: number;
}

export const UserProfile = ({ userId }: UserProfileProps) => {
  const { address, familyRole, avatarNumber, memberGender, memberName } = useUserById({ memberId: userId });

  return (
    <S.UserProfile paddingVertical={24} paddingHorizontal={20}>
      <Profile size={140} avatarNumber={avatarNumber} />
      <S.Name fontSize={24}>{memberName}</S.Name>
      <S.Address fontSize={15}>{address}</S.Address>
      <S.GenderRoleWrapper>
        <S.Gender fontSize={13}>{memberGender === 'MALE' ? '남자' : '여자'}</S.Gender>
        <Separator $height={8} />
        {/* 임시 dogGender */}
        <S.Role fontSize={13}>{getKoreanRole({ dogGender: 'FEMALE', familyRole })}</S.Role>
      </S.GenderRoleWrapper>
    </S.UserProfile>
  );
};
