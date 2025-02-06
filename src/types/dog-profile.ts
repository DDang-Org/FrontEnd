import { Gender } from '~types/gender';

export interface RequestDogProfile {
  dogName: string;
  breed: string;
  dogBirthDate: string;
  weight: number;
  dogGender: 'MALE' | 'FEMALE';
  isNeutered: 'TRUE' | 'FALSE';
  comment: string;
}

export interface ResponseDogProfile {
  dogId: number;
  dogName: string;
  breed: string;
  dogBirthDate: string;
  weight: number;
  dogGender: Gender;
  dogProfileImg: 'string';
  isNeutered: 'TRUE' | 'FALSE';
  walkCount: number;
  familyId: number;
  comment: string;
}
