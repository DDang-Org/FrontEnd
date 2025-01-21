import { Icon } from '~components/Common/Icons';
import * as S from './styles';
import Avatar1 from '~assets/avatars/Avatar1.svg';
import { Separator } from '~components/Common/Seperator';
import { useUser } from '~apis/member/useUser';
import { getKoreanRole } from '~utils/getKoreanRoleWithName';

interface UserProfileProps {
  navigateToProfileEdit: () => void;
}
export const UserProfile = ({ navigateToProfileEdit }: UserProfileProps) => {
  const { address, familyRole, name, gender } = useUser();

  return (
    <S.UserProfile paddingVertical={24} paddingHorizontal={20}>
      <Avatar1 width={140} height={140} />
      <S.EditWrapper>
        <Icon.Edit onPress={navigateToProfileEdit} />
      </S.EditWrapper>
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
