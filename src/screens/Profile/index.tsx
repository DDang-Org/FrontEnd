import { Suspense } from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { DogProfile } from '~components/Profile/DogProfile';
import { DogProfileFallback } from '~components/Profile/DogProfile/fallback';
import { DogProfileLoader } from '~components/Profile/DogProfile/loader';
import { UserProfile } from '~components/Profile/UserProfile';
import { UserProfileFallback } from '~components/Profile/UserProfile/fallback';
import { UserProfileLoader } from '~components/Profile/UserProfile/loader';
import { WalkInfo } from '~components/Profile/WalkInfo';
import { WalkInfoFallback } from '~components/Profile/WalkInfo/fallback';
import { WalkInfoLoader } from '~components/Profile/WalkInfo/loader';
import * as S from './styles';

export const ProfileScreen = () => {
  return (
    <S.Profile>
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
      <ErrorBoundary FallbackComponent={DogProfileFallback}>
        <Suspense fallback={<DogProfileLoader />}>
          <DogProfile />
        </Suspense>
      </ErrorBoundary>
    </S.Profile>
  );
};
