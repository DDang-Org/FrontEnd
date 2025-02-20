import ky from 'ky';
import { logout } from '~apis/member/logout';
import { reissueToken } from '~apis/member/reissueToken';
import { getAccessToken } from '~utils/controlAccessToken';
import { Config } from 'react-native-config';

export const api = ky.create({
  prefixUrl: Config.BASE_URL,
  timeout: 5000,
  hooks: {
    beforeRequest: [
      async request => {
        const accessToken = (await getAccessToken()) || 'a';

        if (accessToken) {
          request.headers.set(
            'Authorization',
            `Bearer ${accessToken}`,
            // `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInByb3ZpZGVyIjoiS0FLQU8iLCJleHAiOjE3Mzk3NjQwMDIsImVtYWlsIjoibWtoNjc5M0BuYXZlci5jb20ifQ.EF03NpevMSZ2DcM5Q-trEEmRa0KEb5HpJ1HlD-Vj8xy3N2JoFvdQFoWDJRM3IGVwx58L9T2oV7GBTr6wJOevnA`,
            // `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInByb3ZpZGVyIjoiR09PR0xFIiwiZXhwIjoxNzQwMjQ4MjA3LCJlbWFpbCI6ImJibGJibGFuNjlAZ21haWwuY29tIn0.CpauBw9_yXlYQjr-BZP7xqm1u63pj1g1aM3kX9HwCm37BMhpOQGz1Mq8R42CihtC8henTRy0OHaxa7q9-1Svzw`,
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
