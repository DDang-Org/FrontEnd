import { UserProfileType } from '~types/user-profile';

const regex = /^[가-힣]{1,10}$/;

export const validateUserProfile = (
  userProfile: UserProfileType,
  options?: { skipAddress?: boolean },
): string | null => {
  if (userProfile.memberProfileImg == null) return '아바타를 선택해 주세요';
  if (!userProfile.memberName) return '견주님의 닉네임을 입력해주세요';
  if (!regex.test(userProfile.memberName)) return '닉네임은 한글로 10자 이내로 작성해 주세요';
  if (!userProfile.familyRole) return '견주님의 역할을 선택해주세요';
  if (!options?.skipAddress && !userProfile.address) return '견주님의 위치 인증을 해주세요'; // address 검사 조건 추가
  if (!userProfile.memberBirthDate) return '견주님의 생년월일을 선택해주세요';
  if (!userProfile.memberGender) return '견주님의 성별을 선택해주세요';
  return null;
};
