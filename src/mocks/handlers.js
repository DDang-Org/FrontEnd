import { http, HttpResponse } from 'msw';
import { BASE_URL } from '~constants/base-url';

export const handlers = [
  http.get(`${BASE_URL}/user`, () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),
  http.get(`${BASE_URL}/dogs/:id/walk`, () => {
    return HttpResponse.json({
      data: {
        timeDuration: {
          hours: 1,
          minutes: 32,
          seconds: 15,
        },
        totalDistanceMeter: 5413,
        totalCalorie: 1234,
      },
    });
  }),
  http.get(`${BASE_URL}/member`, () => {
    return HttpResponse.json({
      data: {
        memberId: 1,
        name: '이성훈',
        email: 'test@naver.com',
        provider: 'NAVER',
        gender: 'MALE',
        address: '서울시 강남구',
        familyRole: 'BROTHER',
        profileImg: 'https://example.com/profile.jpg',
      },
    });
  }),
];
