import { HTTPError } from 'ky';
import { api } from '~apis/api.ts';
import { DogProfileType } from '~providers/DogProfileProvider';
import { APIResponse } from '~types/api';
import { ResponseDogProfile } from '~types/dog-profile';

export const createDog = async (dogProfile: DogProfileType): Promise<APIResponse<ResponseDogProfile>> => {
  try {
    const formData = new FormData();

    formData.append(
      'request',
      JSON.stringify({
        dogName: dogProfile.name,
        breed: dogProfile.breed,
        dogBirthDate: dogProfile.birthDate.split('. ').join('-'),
        weight: dogProfile.weight,
        dogGender: dogProfile.gender,
        isNeutered: dogProfile.isNeutered,
        comment: dogProfile.comment,
      }),
    );

    formData.append('profileImgFile', dogProfile.profileImgFile);

    const response = await api
      .post('dogs/create', {
        body: formData,
      })
      .json<APIResponse<ResponseDogProfile>>();

    return response;
  } catch (error) {
    console.error(error as HTTPError);
    throw error;
  }
};
