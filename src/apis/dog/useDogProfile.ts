import { useMutation } from '@tanstack/react-query';
import { createDog } from '~apis/dog/createDog';
import { deleteDog } from '~apis/dog/deleteDog';
import { updateDog } from '~apis/dog/updateDog';
import { DogProfileType } from '~providers/DogProfileProvider';
import { UseMutationCustomOptions } from '~types/api';

export const useCreateDog = (mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: createDog,
    ...mutationOptions,
  });
};

export const useUpdateDog = (
  dogId: { dogId: number },
  dogProfile: DogProfileType,
  mutationOptions?: UseMutationCustomOptions,
) => {
  return useMutation({
    mutationFn: () => updateDog(dogId, dogProfile),
    ...mutationOptions,
  });
};

export const useDeleteDog = (dogId: { dogId: number }, mutationOption?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: () => deleteDog(dogId),
    ...mutationOption,
  });
};
