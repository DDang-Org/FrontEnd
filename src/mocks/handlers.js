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
  http.get(`${BASE_URL}/member/block`, () => {
    return HttpResponse.json({
      data: [
        {
          name: 'User88',
          gender: 'MALE',
          dogGender: 'MALE',
          familyRole: 'MOTHER',
          avatarNumber: 3,
          memberId: 5,
        },
        {
          name: 'User64',
          gender: 'MALE',
          dogGender: 'MALE',
          familyRole: 'MOTHER',
          avatarNumber: 5,
          memberId: 13,
        },
        {
          name: 'User100',
          gender: 'MALE',
          dogGender: 'MALE',
          familyRole: 'MOTHER',
          avatarNumber: 4,
          memberId: 5,
        },
        {
          name: 'User100',
          gender: 'MALE',
          dogGender: 'MALE',
          familyRole: 'MOTHER',
          avatarNumber: 1,
          memberId: 5,
        },
        {
          name: 'User100',
          gender: 'MALE',
          dogGender: 'MALE',
          familyRole: 'MOTHER',
          avatarNumber: 2,
          memberId: 5,
        },
        {
          name: 'User100',
          gender: 'MALE',
          dogGender: 'MALE',
          familyRole: 'MOTHER',
          avatarNumber: 10,
          memberId: 5,
        },
        {
          name: 'User100',
          gender: 'MALE',
          dogGender: 'MALE',
          familyRole: 'MOTHER',
          avatarNumber: 9,
          memberId: 5,
        },
        {
          name: 'User100',
          gender: 'MALE',
          dogGender: 'MALE',
          familyRole: 'MOTHER',
          avatarNumber: 8,
          memberId: 5,
        },
        {
          name: 'User100',
          gender: 'MALE',
          dogGender: 'MALE',
          familyRole: 'MOTHER',
          avatarNumber: 7,
          memberId: 5,
        },
        {
          name: 'User100',
          gender: 'MALE',
          dogGender: 'MALE',
          familyRole: 'MOTHER',
          avatarNumber: 6,
          memberId: 5,
        },
        {
          name: 'User100',
          gender: 'MALE',
          dogGender: 'MALE',
          familyRole: 'MOTHER',
          avatarNumber: 5,
          memberId: 5,
        },
        {
          name: 'User100',
          gender: 'MALE',
          dogGender: 'MALE',
          familyRole: 'MOTHER',
          avatarNumber: 4,
          memberId: 5,
        },
        {
          name: 'User100',
          gender: 'MALE',
          dogGender: 'MALE',
          familyRole: 'MOTHER',
          avatarNumber: 3,
          memberId: 5,
        },
      ],
    });
  }),
  http.get(`${BASE_URL}/member/:memberId`, () => {
    return HttpResponse.json({
      data: {
        memberId: 1,
        memberName: '홍길동',
        email: 'test@naver.com',
        address: '서울시 강남구',
        memberGender: 'MALE',
        familyRole: 'FATHER',
        memberProfileImg: 'https://example.com/profile.jpg',
        avatarNumber: 1,
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
        avatarNumber: 1,
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
  http.get(`${BASE_URL}/dogs/:id`, () => {
    return HttpResponse.json({
      data: {
        dogId: 0,
        dogName: '도토리',
        breed: '시베리안 허스키',
        dogBirthDate: '2022-11-20',
        weight: 23,
        dogGender: 'MALE',
        dogProfileImg:
          'https://www.yomidog.com/preSaleUpFile/190228_%EB%B6%80%EC%82%B0%ED%97%88%EC%8A%A4%ED%82%A4_638.jpg',
        isNeutered: 'TRUE',
        familyId: 0,
        comment: '시베리안 허스키 도토리에요.',
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
        dogProfileImg: 'https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg',
        isNeutered: 'TRUE',
        familyId: 0,
        comment: '우리아이 안 물어요 착해요. 강아지껌을 너무 좋아해요 같이 놀아요.',
      },
    });
  }),
];
