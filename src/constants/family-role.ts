export const FAMILY_ROLE = {
  FATHER: '아빠',
  MOTHER: '엄마',
  BROTHER: '오빠(형)',
  SISTER: '언니(누나)',
  GRANDFATHER: '할아버지',
  GRANDMOTHER: '할머니',
  '': '',
} as const;

export type FamilyRole = keyof typeof FAMILY_ROLE;
