import { FamilyRole } from '~types/family-role';

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

export const getKoreanRole = ({ dogGender, familyRole }: { dogGender: 'MALE' | 'FEMALE'; familyRole: FamilyRole }) => {
  return roleMap[dogGender][familyRole];
};
