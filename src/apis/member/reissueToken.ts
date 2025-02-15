import { api } from '~apis/api';
import { APIResponse } from '~types/api';
import { removeAccessToken, storeAccessToken } from '~utils/controlAccessToken';

export const reissueToken = async (): Promise<APIResponse<string> | undefined> => {
  try {
    const response = await api.post('member/reissue');

    const authorizationHeader = response.headers.get('authorization');
    if (authorizationHeader) {
      const accessToken = authorizationHeader.replace('Bearer ', '');
      console.log('New Access Token:', accessToken);
      await storeAccessToken(accessToken);
    } else {
      console.warn('Authorization 헤더가 존재하지 않습니다.');
    }

    const responseData = await response.json<APIResponse<string>>();
    console.log('response로 들어온 data', responseData);
    return responseData;
  } catch (error) {
    console.error('Reissue Token Error: 재시도 초과');
    await removeAccessToken();
    throw error;
  }
};
