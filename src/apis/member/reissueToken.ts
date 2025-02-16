import { api } from '~apis/api';
import { APIResponse } from '~types/api';
import { removeAccessToken, storeAccessToken } from '~utils/controlAccessToken';
import { getEmail } from '~utils/controlEmail';

export const reissueToken = async (): Promise<string> => {
  try {
    const email = await getEmail();
    const response = await api.post('member/reissue', {
      json: { email },
    });

    const authorizationHeader = response.headers.get('authorization');
    console.log('authorizationHeader', authorizationHeader);
    if (authorizationHeader) {
      const accessToken = authorizationHeader.replace('Bearer ', '');
      await storeAccessToken(accessToken);
    } else {
      console.warn('Authorization 헤더가 존재하지 않습니다.');
    }

    const accessToken = (await response.json<APIResponse<string>>()).data;
    return accessToken;
  } catch (error) {
    console.error('Reissue Token Error: 재시도 초과');
    await removeAccessToken();
    throw error;
  }
};
