export const RootNavigations = {
  BOTTOM_TAB: 'BottomTab',
  REGISTER_DOG: 'RegisterDog',
} as const;

export const AuthNavigations = {
  LOGIN: 'Login',
  KAKAO_LOGIN: 'KakaoLogin',
  GOOGLE_LOGIN: 'GoogleLogin',
  OWNER_PROFILE: 'OwnerProfile',
} as const;

export const RegisterDogNavigations = {
  HOME: 'Home',
  BASIC_PROFILE: 'BasicProfile',
  DETAIL_PROFILE: 'DetailProfile',
  INVITE_CODE: 'InviteCode',
  DOG_CONFIRMATION: 'DogConfirmation',
} as const;

export const TabNavigations = {
  HOME: 'Home',
  LOG: 'Log',
  SOCIAL: 'Social',
  FAMILYDANG: 'FamilyDang',
  MYPAGE: 'MyPage',
  PROFILE: 'Profile',
} as const;

export const HomeNavigations = {
  MAIN: 'Main',
  WALK: 'Walk',
  NOTIFICATION: 'Notification',
} as const;

export const WalkLogNavigations = {
  LOG_HOME: 'LogHome',
  STATS: 'Stats',
} as const;

export const SocialNavigations = {
  SOCIAL_HOME: 'SocialHome',
  CHATROOM: 'ChatRoom',
} as const;
