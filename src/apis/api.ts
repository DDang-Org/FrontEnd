import ky from 'ky';
import { BASE_URL } from '~constants/base-url';

import { getAccessToken } from '~utils/controlAccessToken';

export const api = ky.create({
  prefixUrl: BASE_URL,
  timeout: 5000,
  hooks: {
    beforeRequest: [
      async request => {
        const accessToken = await getAccessToken();
        if (accessToken) {
          request.headers.set('Authorization', `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInByb3ZpZGVyIjoiR09PR0xFIiwiZXhwIjoxNzQwMjQ4MjA3LCJlbWFpbCI6ImJibGJibGFuNjlAZ21haWwuY29tIn0.CpauBw9_yXlYQjr-BZP7xqm1u63pj1g1aM3kX9HwCm37BMhpOQGz1Mq8R42CihtC8henTRy0OHaxa7q9-1Svzw`);
        }
      },
    ],
  },
});
