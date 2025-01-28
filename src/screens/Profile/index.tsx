import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useQuery } from '@tanstack/react-query';
import { Suspense, useEffect } from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { fetchUserById } from '~apis/member/fetchUserById';
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

interface ProfileScreenProps extends BottomTabScreenProps<TabBarParamList> {}

export const ProfileScreen = ({ navigation, route }: ProfileScreenProps) => {
  const memberId = route.params!.userId; //! 항상 params로 userId를 넘겨줌
  const { data: userInfoById } = useQuery({
    queryKey: ['userInfoById', memberId],
    queryFn: () => fetchUserById({ memberId }),
    select: ({ data }) => data,
  });

  useEffect(() => {
    navigation.setOptions({
      headerTitle: userInfoById?.memberName,
    });
  }, [navigation, userInfoById?.memberName]);

  return (
    <S.Profile>
      <ErrorBoundary FallbackComponent={UserProfileFallback}>
        <Suspense fallback={<UserProfileLoader />}>
          <UserProfile userId={memberId} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={WalkInfoFallback}>
        <Suspense fallback={<WalkInfoLoader />}>
          <WalkInfo dogId={1} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={DogProfileFallback}>
        <Suspense fallback={<DogProfileLoader />}>
          <DogProfile dogId={1} />
        </Suspense>
      </ErrorBoundary>
    </S.Profile>
  );
};
