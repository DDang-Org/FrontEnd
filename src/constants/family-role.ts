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

export const REVERSE_FAMILY_ROLE = Object.fromEntries(
  Object.entries(FAMILY_ROLE).map(([key, value]) => [value, key]),
) as { [key in (typeof FAMILY_ROLE)[keyof typeof FAMILY_ROLE]]: keyof typeof FAMILY_ROLE };
