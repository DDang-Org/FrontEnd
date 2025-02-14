import { DogProfileType } from '~providers/DogProfileProvider';
import { stringToDate } from '~utils/dateFormat';

const HangeulRegex = /^[가-힣]+$/;

const isFutureDate = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date > today;
};

export const validateBasicProfile = (dogProfile: DogProfileType): string | null => {
  const { name, profileImg, profileImgFile, birthDate, comment } = dogProfile;

  if (!name) return '반려견의 이름을 입력해주세요';
  if (!HangeulRegex.test(name) || name.length > 10) return '최대 10자의 한글이름만 사용해 주세요';
  if (!profileImg) return '반려견의 사진을 등록해주세요';
  if (profileImgFile && !profileImgFile.type.startsWith('image/')) return '올바른 이미지 파일이 아닙니다';
  if (!birthDate) return '반려견의 생일을 입력해주세요';
  if (isFutureDate(stringToDate(birthDate, '-'))) return '생일은 미래 날짜를 선택할 수 없습니다';
  if (!comment) return '한줄 소개를 적어주세요';
  if (comment.length < 2) return '한줄 소개는 최소 2자 이상 입력해주세요';
  if (comment.length > 30) return '한줄 소개는 최대 30자까지만 적어주세요';
  return null;
};

export const validateDetailProfile = (dogProfile: DogProfileType): string | null => {
  const { gender, breed, weight } = dogProfile;

  if (!gender) return '성별을 선택해주세요';
  if (!breed) return '견종을 선택해주세요';
  if (weight === undefined) return '몸무게를 입력해주세요';
  if (weight < 0.1) return '올바른 몸무게를 입력해주세요';
  if (weight > 100) return '100kg 이하의 몸무게만 입력 가능합니다';
  return null;
};

export const validateFamilyCode = (familyCode: string): string | null => {
  if (!familyCode) return '가족 코드를 입력해주세요';
  return null;
};
