import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Suspense, useEffect } from 'react';
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
import { TabBarParamList } from '~navigation/BottomTabNavigator';
import * as S from './styles';
import { useUserById } from '~apis/member/useUserById';

interface ProfileScreenProps extends BottomTabScreenProps<TabBarParamList> {}

export const ProfileScreen = ({ navigation, route }: ProfileScreenProps) => {
  const memberId = route.params!.userId;
  const { data: user, isPending, isError } = useUserById({ memberId });

  useEffect(() => {
    navigation.setOptions({
      headerTitle: user?.memberName,
    });
  }, [navigation, user?.memberName]);

  if (isPending || isError) {
    return <></>;
  }

  return (
    <S.Profile>
      <ErrorBoundary FallbackComponent={UserProfileFallback}>
        <Suspense fallback={<UserProfileLoader />}>
          <UserProfile userId={memberId} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={WalkInfoFallback}>
        <Suspense fallback={<WalkInfoLoader />}>
          <WalkInfo memberId={memberId} />
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
