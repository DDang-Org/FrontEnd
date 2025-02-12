import { Gender } from '~types/gender';

export interface UserProfileType {
  memberName: string;
  address: string;
  memberGender: Gender | null;
  memberBirthDate: string;
  familyRole: string;
  memberProfileImg: number | null;
}
