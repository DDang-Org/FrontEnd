import styled from '@emotion/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBarParamList } from '~navigation/BottomTabNavigator';

type Props = BottomTabScreenProps<TabBarParamList, 'MyPage'>;

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MyPageScreen = ({}: Props) => {
  return (
    <S.MyPage>
      <S.Header>
        <S.Title fontSize={17}>마이페이지</S.Title>
        <S.GearWrapper>
          <Icon.Gear onPress={() => navigation.navigate('Setting')} />
        </S.GearWrapper>
      </S.Header>
      <ErrorBoundary FallbackComponent={UserProfileFallback}>
        <Suspense fallback={<UserProfileLoader />}>
          <UserProfile navigateToProfileEdit={() => navigation.navigate('ProfileEdit')} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={WalkInfoFallback}>
        <Suspense fallback={<WalkInfoLoader />}>
          <WalkInfo dogId={1} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={DogProfileFallback}>
        <Suspense fallback={<DogProfileLoader />}>
          {/* 여기에 강아지 아이디 넣어줄것 */}
          <DogProfile navigateToDogProfileEdit={() => navigation.navigate('DogProfileEdit', { dogId: 0 })} />
        </Suspense>
      </ErrorBoundary>
    </S.MyPage>
  );
};
