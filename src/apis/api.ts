import ky from 'ky';
import { BASE_URL } from '~constants/base-url';
// import { getAccessToken } from '~utils/controlAccessToken';

export const api = ky.create({
  prefixUrl: BASE_URL,
  timeout: 5000,
  hooks: {
    beforeRequest: [
      async request => {
        // const accessToken = await getAccessToken();
        // if (accessToken) {
        request.headers.set(
          'Authorization',
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInByb3ZpZGVyIjoiS0FLQU8iLCJleHAiOjE3Mzk3NjQwMDIsImVtYWlsIjoibWtoNjc5M0BuYXZlci5jb20ifQ.EF03NpevMSZ2DcM5Q-trEEmRa0KEb5HpJ1HlD-Vj8xy3N2JoFvdQFoWDJRM3IGVwx58L9T2oV7GBTr6wJOevnA',
        ); // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInByb3ZpZGVyIjoiS0FLQU8iLCJleHAiOjE3Mzk3NjQwMDIsImVtYWlsIjoibWtoNjc5M0BuYXZlci5jb20ifQ.EF03NpevMSZ2DcM5Q-trEEmRa0KEb5HpJ1HlD-Vj8xy3N2JoFvdQFoWDJRM3IGVwx58L9T2oV7GBTr6wJOevnA
        // }
      },
    ],
  },
});
