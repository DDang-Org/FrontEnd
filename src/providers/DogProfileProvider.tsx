import { Provider } from 'jotai';
import { Gender } from '~types/gender';
import { PropsWithChildren } from 'react';
import { atomWithReset } from 'jotai/utils';

export interface DogProfileType {
  name: string;
  profileImg: string;
  profileImgFile?: File;
  birthDate: string;
  gender: Gender | null;
  isNeutered: 'TRUE' | 'FALSE';
  breed: string;
  weight?: number;
  comment: string;
}

export const INITIAL_DOG_PROFILE: DogProfileType = {
  name: '',
  profileImg: '',
  profileImgFile: undefined,
  birthDate: '',
  gender: null,
  isNeutered: 'FALSE',
  breed: '',
  weight: undefined,
  comment: '',
};

export const dogProfileAtom = atomWithReset<DogProfileType>(INITIAL_DOG_PROFILE);

export const DogProfileProvider = ({ children }: PropsWithChildren) => {
  return <Provider>{children}</Provider>;
};
