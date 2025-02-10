import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createDog } from '~apis/dog/createDog';
import { deleteDog } from '~apis/dog/deleteDog';
import { updateDog } from '~apis/dog/updateDog';
import { useToast } from '~hooks/useToast';
import { DogProfileType } from '~providers/DogProfileProvider';
import { UseMutationCustomOptions } from '~types/api';

const successMessage = {
  CREATE_DOG: '반려견이 추가되었습니다',
  UPDATE_DOG: '반려견 정보가 수정되었습니다',
  DELETE_DOG: '반려견 삭제가 완료되었습니다',
};

export const useCreateDog = (mutationOptions?: UseMutationCustomOptions) => {
  const queryClient = useQueryClient();
  const { successToast } = useToast();
  return useMutation({
    mutationFn: createDog,
    onSuccess: () => successToast(successMessage['CREATE_DOG']),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['myDogInfo'] }),
    ...mutationOptions,
  });
};

export const useUpdateDog = (mutationOptions?: UseMutationCustomOptions) => {
  const queryClient = useQueryClient();
  const { successToast } = useToast();
  return useMutation({
    mutationFn: ({ dogId, dogProfile }: { dogId: number; dogProfile: DogProfileType }) => updateDog(dogId, dogProfile),
    onSuccess: () => successToast(successMessage['UPDATE_DOG']),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['myDogInfo'] }),
    ...mutationOptions,
  });
};

export const useDeleteDog = (mutationOptions?: UseMutationCustomOptions) => {
  const queryClient = useQueryClient();
  const { successToast } = useToast();
  return useMutation({
    mutationFn: (dogId: number) => deleteDog(dogId),
    onSuccess: () => successToast(successMessage['DELETE_DOG']),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['myDogInfo'] }),
    ...mutationOptions,
  });
};

export const useDogProfile = (dogId: number, mutationOptions?: UseMutationCustomOptions) => {
  const updateDogMutation = useUpdateDog(mutationOptions);
  const deleteDogMutation = useDeleteDog(mutationOptions);

  return {
    updateDog: (dogProfile: DogProfileType) => updateDogMutation.mutate({ dogId, dogProfile }),
    deleteDog: () => deleteDogMutation.mutate(dogId),
  };
};
