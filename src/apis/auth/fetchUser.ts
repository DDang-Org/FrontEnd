import { api } from '~apis/api';

export type FetchUserResponseType = {
  id: string;
  firstName: string;
  lastName: string;
};

export const fetchUser = async (): Promise<FetchUserResponseType> => {
  try {
    const response = await api.get('user').json<FetchUserResponseType>();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
