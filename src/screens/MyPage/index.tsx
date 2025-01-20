import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Suspense } from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { Icon } from '~components/Common/Icons';
import { UserProfile } from '~components/MyPage/UserProfile';
import { UserProfileFallback } from '~components/MyPage/UserProfile/fallback';
import { UserProfileLoader } from '~components/MyPage/UserProfile/loader';
import { WalkInfo } from '~components/MyPage/WalkInfo';
import { WalkInfoFallback } from '~components/MyPage/WalkInfo/fallback';
import { WalkInfoLoader } from '~components/MyPage/WalkInfo/loader';
import { MyPageStackProps } from '~navigation/MyPageNavigator';
import * as S from './styles';

type Props = NativeStackScreenProps<MyPageStackProps, 'Main'>;

export const MyPageScreen = ({ navigation }: Props) => {
  return (
    <S.MyPage>
      <S.Header>
        <S.Title fontSize={17}>마이페이지</S.Title>
        <S.GearWrapper>
          <Icon.Gear onPress={() => navigation.navigate('Entry')} />
        </S.GearWrapper>
      </S.Header>
      <ErrorBoundary FallbackComponent={UserProfileFallback}>
        <Suspense fallback={<UserProfileLoader />}>
          <UserProfile />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={WalkInfoFallback}>
        <Suspense fallback={<WalkInfoLoader />}>
          <WalkInfo />
        </Suspense>
      </ErrorBoundary>
    </S.MyPage>
  );
};
