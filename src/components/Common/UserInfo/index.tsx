import { PropsWithChildren, useContext } from 'react';
import { Profile } from '~components/Common/Profile';
import { Separator } from '~components/Common/Seperator';
import { FamilyRole } from '~types/family-role';
import { Gender } from '~types/gender';
import * as S from './styles';
import { AvatarNumber } from '~types/avatar-number';
import { FAMILY_ROLE } from '~constants/family-role';
import { Icon } from '~components/Common/Icons';
import { FriendOptionContext } from '~components/Social/Friend';

export interface UserItemProps {
  name: string;
  gender: Gender;
  familyRole: FamilyRole;
  buttonText: string;
  isLast?: boolean;
  avatarNumber: AvatarNumber;
  onPressButton: () => void;
  userId: number;
  optionButton?: boolean;
}

export const UserInfo = ({ children }: PropsWithChildren) => {
  return <S.UserInfo>{children}</S.UserInfo>;
};

const Item = ({
  buttonText,
  familyRole,
  gender,
  name,
  isLast = false,
  onPressButton,
  avatarNumber,
  userId,
  optionButton,
}: UserItemProps) => {
  const friendOptionContext = useContext(FriendOptionContext);
  if (!friendOptionContext) {
    throw new Error('No friendOptionContext!!!');
  }

  const { setIsFriendOptionsVisible } = friendOptionContext;

  return (
    <S.Item>
      <S.ItemWrapper isLast={isLast}>
        <S.LeftContentContainer>
          <Profile size={48} avatarNumber={avatarNumber} userId={userId} />
          <S.TypoWrapper>
            <S.Name fontSize={17}>{name}</S.Name>
            <S.GenderFamilyRoleWrapper>
              <S.Gender fontSize={14}>{gender === 'MALE' ? '남자' : '여자'}</S.Gender>
              <Separator $height={8} />
              <S.FamilyRole fontSize={14}>{FAMILY_ROLE[familyRole]}</S.FamilyRole>
            </S.GenderFamilyRoleWrapper>
          </S.TypoWrapper>
        </S.LeftContentContainer>
        <S.RightContainer>
          <S.Button onPress={onPressButton}>
            <S.ButtonText fontSize={14}>{buttonText}</S.ButtonText>
          </S.Button>
          {optionButton && (
            <S.FriendOptionButton onPress={() => setIsFriendOptionsVisible(true)}>
              <Icon.FriendOption />
            </S.FriendOptionButton>
          )}
        </S.RightContainer>
      </S.ItemWrapper>
    </S.Item>
  );
};

UserInfo.Container = S.Container;
UserInfo.Item = Item;
