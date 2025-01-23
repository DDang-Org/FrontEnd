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
          request.headers.set('Authorization', `Bearer ${accessToken}`);
        }
      },
    ],
  },
});
