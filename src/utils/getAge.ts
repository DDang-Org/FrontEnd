export const getAge = (birthDate: string): number => {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();

  return age;
};
