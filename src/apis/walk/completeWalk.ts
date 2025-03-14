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

const processImageForFormData = (imageUri: string): any => {
  console.log('[API] 이미지 처리 시작, URI 유형:', typeof imageUri);

  if (!imageUri) {
    console.error('[API] 이미지 URI가 없음');
    throw new Error('이미지 URI가 제공되지 않았습니다.');
  }

  try {
    if (imageUri.startsWith('file://')) {
      console.log('[API] 로컬 파일 URI 감지:', imageUri.substring(0, 40) + '...');
      return {
        uri: imageUri,
        name: `walk-map-${Date.now()}.png`,
        type: 'image/png',
      };
    }

    if (imageUri.startsWith('data:image/')) {
      console.log('[API] Data URI 감지 (base64)');
      return {
        uri: imageUri,
        name: `walk-map-${Date.now()}.png`,
        type: imageUri.split(';')[0].replace('data:', ''),
      };
    }

    console.log('[API] 기타 형식의 URI, 기본 처리 적용');
    return {
      uri: imageUri,
      name: `walk-map-${Date.now()}.png`,
      type: 'image/png',
    };
  } catch (error) {
    console.error('[API] 이미지 처리 실패:', error);
    throw new Error('이미지 변환에 실패했습니다: ' + (error instanceof Error ? error.message : '알 수 없는 오류'));
  }
};

export const completeWalk = async (userInfo: RequestCompleteWalk): Promise<APIResponse<ResponseCompleteWalk>> => {
  try {
    console.log('[API] completeWalk 요청 시작:', userInfo);

    const formData = new FormData();

    const mapImageFile = processImageForFormData(userInfo.walkImgFile);
    console.log('[API] 처리된 이미지 파일:', mapImageFile.name);
    formData.append('walkImgFile', mapImageFile);

    const requestData = JSON.stringify({
      totalDistanceMeter: userInfo.request.totalDistanceMeter,
      totalWalkTimeSecond: userInfo.request.totalWalkTimeSecond,
    });

    console.log('[API] JSON 요청 데이터:', requestData);
    formData.append('request', requestData);

    console.log('[API] FormData 구성 완료');

    console.log('[API] API 요청 시작');

    try {
      const response = await api
        .post('walk/complete', {
          body: formData,
          headers: {
            Accept: 'application/json',
          },
          timeout: 30000, // 30초 타임아웃 (파일 업로드는 시간이 더 걸릴 수 있음)
        })
        .json<APIResponse<ResponseCompleteWalk>>();

      console.log('[API] completeWalk 응답 성공:', response);
      return response;
    } catch (error) {
      if (error instanceof HTTPError) {
        const errorData = await error.response.json();
        console.error('[API] HTTP 오류:', errorData);
      } else {
        console.error('[API] 알 수 없는 오류:', error);
      }
      throw error;
    }
  } catch (error) {
    console.error('[API] completeWalk 오류:', error);
    throw error;
  }
};
