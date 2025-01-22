import { PropsWithChildren } from 'react';
import Avatar1 from '~assets/avatars/Avatar1.svg';
import { Separator } from '~components/Common/Seperator';
import { FamilyRole } from '~types/family-role';
import { Gender } from '~types/gender';
import { getKoreanRole } from '~utils/getKoreanRoleWithName';
import * as S from './styles';

interface ItemProps {
  name: string;
  gender: Gender;
  dogGender: Gender;
  familyRole: FamilyRole;
  buttonText: string;
  isLast?: boolean;
  onPressButton: () => void;
}

export const UserInfo = ({ children }: PropsWithChildren) => {
  return <S.UserInfo>{children}</S.UserInfo>;
};

const Item = ({ buttonText, familyRole, gender, name, isLast = false, onPressButton, dogGender }: ItemProps) => {
  //! 유저 강아지 성별
  return (
    <S.Item>
      <S.ItemWrapper isLast={isLast}>
        {/* Profile로 변경하기 */}
        <S.LeftContentContainer>
          <Avatar1 width={48} height={48} />
          <S.TypoWrapper>
            <S.Name fontSize={17}>{name}</S.Name>
            <S.GenderFamilyRoleWrapper>
              <S.Gender fontSize={14}>{gender === 'MALE' ? '남자' : '여자'}</S.Gender>
              <Separator $height={8} />
              <S.FamilyRole fontSize={14}>{getKoreanRole({ dogGender, familyRole })}</S.FamilyRole>
            </S.GenderFamilyRoleWrapper>
          </S.TypoWrapper>
        </S.LeftContentContainer>
        <S.Button onPress={onPressButton}>
          <S.ButtonText fontSize={14}>{buttonText}</S.ButtonText>
        </S.Button>
      </S.ItemWrapper>
    </S.Item>
  );
};

UserInfo.Container = S.Container;
UserInfo.Item = Item;
