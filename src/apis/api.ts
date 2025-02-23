import ky from 'ky';
import { logout } from '~apis/member/logout';
import { reissueToken } from '~apis/member/reissueToken';
import { getAccessToken } from '~utils/controlAccessToken';
import { Config } from 'react-native-config';
import { Platform } from 'react-native';

export const api = ky.create({
  prefixUrl: Config.BASE_URL,
  timeout: 5000,
  hooks: {
    beforeRequest: [
      async request => {
        const accessToken = await getAccessToken();
        if (accessToken) {
          request.headers.set(
            'Authorization',
            Platform.OS === 'ios'
              ? `Bearer ${accessToken}`
              : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInByb3ZpZGVyIjoiS0FLQU8iLCJleHAiOjE3NDE1Mjc2NTAsImVtYWlsIjoibWtoNjc5M0BuYXZlci5jb20ifQ.8668QTufFEUCtqZ_R4WUIOatzU2hLPVmGFIoMl3CI2Jvd3bJ7lz3Mf93vmX0CHtI6YLshZx4vUimvE57UAyFdA',
          );
        }
      },
    ],

    afterResponse: [
      async (request, _, response) => {
        if (request.url.endsWith('member/reissue')) {
          return response;
        }

        const accessToken = await getAccessToken();

        if (response.status === 401 && accessToken) {
          console.warn('401 Unauthorized: Access Token 만료, 재발급 시도 중...');

          try {
            const newAccessToken = await reissueToken();
            request.headers.set('Authorization', `Bearer ${newAccessToken}`);

            const retryResponse = await ky(request);
            return retryResponse;
          } catch (error) {
            console.error('토큰 재발급 실패:', error);
            console.error('로그아웃합니다.');
            await logout();
            throw error;
          }
        }
        return response;
      },
    ],
  },
});
