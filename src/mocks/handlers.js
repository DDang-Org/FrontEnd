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
  http.get(`${BASE_URL}/dogs/:id/walks`, () => {
    return HttpResponse.json({
      data: {
        totalDistance: 12.5,
        walkCount: 5,
        countWalksWithMember: 3,
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
  http.get(`${BASE_URL}/notification-settings`, () => {
    return HttpResponse.json({
      data: {
        walkNotificationAllowed: 'TRUE',
        chatNotificationAllowed: 'FALSE',
        friendNotificationAllowed: 'TRUE',
        familyNotificationAllowed: 'TRUE',
      },
    });
  }),
  http.get(`${BASE_URL}/dogs`, () => {
    return HttpResponse.json({
      data: {
        dogId: 0,
        dogName: '밤톨이',
        breed: '포메라니안',
        dogBirthDate: '2024-12-24',
        weight: 6,
        dogGender: 'MALE',
        dogProfileImg: 'string',
        isNeutered: 'TRUE',
        familyId: 0,
        comment: '우리아이 안 물어요 착해요. 강아지껌을 너무 좋아해요 같이 놀아요.',
      },
    });
  }),
  http.get(`${BASE_URL}/member/block`, () => {
    return HttpResponse.json({
      data: {
        name: 'John Doe',
        gender: 'MALE',
        dogGender: 'FEMALE',
        familyRole: 'BROTHER',
        buttonText: 'Edit',
        isLast: false,
      },
    });
  }),
];
