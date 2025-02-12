import { HTTPError } from 'ky';
import { APIResponse } from '~types/api';
import { api } from '~apis/api';

export interface RequestCompleteWalk {
  request: {
    totalDistanceMeter: number;
    totalWalkTimeSecond: number;
  };
  walkImgFile: string;
}

export interface ResponseCompleteWalk {
  code: string;
  status: string;
  message: string;
  data: {
    date: string;
    memberName: string;
    dogName: string;
    totalDistanceMeter: number;
    timeDuration: {
      hours: number;
      minutes: number;
      seconds: number;
    };
    totalCalorie: number;
    walkImg: string;
    walkWithDogInfo: {
      dogId: number;
      dogProfileImg: string;
      dogName: string;
      breed: string;
      dogAge: number;
      dogGender: string;
      memberId: number;
    };
  };
}

export const completeWalk = async (userInfo: RequestCompleteWalk): Promise<APIResponse<ResponseCompleteWalk>> => {
  try {
    const response = api
      .post('walk/complete', {
        json: userInfo,
      })
      .json<APIResponse<ResponseCompleteWalk>>();
    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorData = await error.response.json();
      console.error(errorData);
    } else {
      console.error(error);
    }
    throw error;
  }
};
