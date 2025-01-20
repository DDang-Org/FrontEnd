import { FamilyRole } from '~types/family-role';
import { Gender } from '~types/gender';
import { getParticle } from '~utils/getParticle';

const roleMap = {
  MALE: {
    FATHER: '아빠',
    MOTHER: '엄마',
    BROTHER: '형',
    SISTER: '누나',
    GRANDFATHER: '할아버지',
    GRANDMOTHER: '할머니',
    '': '',
  },
  FEMALE: {
    FATHER: '아빠',
    MOTHER: '엄마',
    BROTHER: '오빠',
    SISTER: '언니',
    GRANDFATHER: '할아버지',
    GRANDMOTHER: '할머니',
    '': '',
  },
};

export const getKoreanRole = ({ dogGender, familyRole }: { dogGender: Gender; familyRole: FamilyRole }) => {
  return roleMap[dogGender][familyRole];
};

export const getKoreanRoleWithName = ({
  dogGender,
  familyRole,
  name,
}: {
  dogGender: 'MALE' | 'FEMALE';
  familyRole: FamilyRole;
  name: string;
}) => {
  const koreanRole = roleMap[dogGender][familyRole];
  switch (familyRole) {
    case 'MOTHER':
    case 'FATHER':
    case 'GRANDMOTHER':
    case 'GRANDFATHER':
      return koreanRole;
    default:
      return dogGender === 'MALE' ? getParticle(name) + ' ' + koreanRole : name + ' ' + koreanRole;
  }
};
