import { createContext, ReactNode, useState } from 'react';
import { Gender } from '~types/gender';

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

type DogProfileContextType = {
  dogProfile: DogProfileType;
  setDogProfile: React.Dispatch<React.SetStateAction<DogProfileType>>;
};

type DogProfileProviderProps = {
  children: ReactNode;
};

export const DogProfileContext = createContext<DogProfileContextType | undefined>(undefined);

export const DogProfileProvider = ({ children }: DogProfileProviderProps) => {
  const [dogProfile, setDogProfile] = useState<DogProfileType>({
    name: '',
    profileImg: '',
    profileImgFile: undefined,
    birthDate: '',
    gender: null,
    isNeutered: 'FALSE',
    breed: '',
    weight: undefined,
    comment: '',
  });

  return <DogProfileContext.Provider value={{ dogProfile, setDogProfile }}>{children}</DogProfileContext.Provider>;
};
