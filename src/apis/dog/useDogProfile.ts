import { useNavigation } from '@react-navigation/native';
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

const queryClient = useQueryClient();
const navigation = useNavigation();

export const useCreateDog = (mutationOptions?: UseMutationCustomOptions) => {
  const { successToast } = useToast();
  return useMutation({
    mutationFn: createDog,
    onSuccess: () => successToast(successMessage['CREATE_DOG']),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['myDogInfo'] }),
    ...mutationOptions,
  });
};

export const useDogProfile = (dogId: number, mutationOptions?: UseMutationCustomOptions) => {
  const { successToast } = useToast();
  const useUpdateDog = (dogId: number, mutationOptions?: UseMutationCustomOptions) => {
    return useMutation({
      mutationFn: (dogProfile: DogProfileType) => updateDog(dogId, dogProfile),
      onSuccess: () => successToast(successMessage['UPDATE_DOG']),
      onSettled: () => queryClient.invalidateQueries({ queryKey: ['myDogInfo'] }),
      ...mutationOptions,
    });
  };

  const useDeleteDog = (dogId: number, mutationOptions?: UseMutationCustomOptions) => {
    return useMutation({
      mutationFn: () => deleteDog(dogId),
      onSuccess: () => successToast(successMessage['DELETE_DOG']),
      onSettled: () => queryClient.invalidateQueries({ queryKey: ['myDogInfo'] }),
      ...mutationOptions,
    });
  };

  const updateDogMutation = useUpdateDog(dogId, mutationOptions);
  const deleteDogMutation = useDeleteDog(dogId, mutationOptions);

  return {
    updateDog: updateDogMutation,
    deleteDog: deleteDogMutation,
  };
};
