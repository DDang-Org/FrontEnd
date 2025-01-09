import ky from 'ky';
import { getAccessToken } from '~/utils/controlAccessToken.ts';

export const api = ky.create({
  prefixUrl: 'https://api.example.com', //! 임시
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
  },
});
