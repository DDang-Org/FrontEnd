import ky from 'ky';
import { getAccessToken } from '~utils/controlAccessToken';

export const api = ky.create({
  prefixUrl: 'https://api.example.com',
  timeout: 5000,
  hooks: {
    beforeRequest: [
      async request => {
        const accessToken = await getAccessToken();
        if (accessToken) {
          request.headers.set('Authorization', `Bearer ${accessToken}`);
        }
      },
    ],
  },
});
