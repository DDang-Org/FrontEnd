import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Suspense } from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { Icon } from '~components/Common/Icons';
import { DogProfile } from '~components/MyPage/Main/DogProfile';
import { DogProfileFallback } from '~components/MyPage/Main/DogProfile/fallback';
import { UserProfile } from '~components/MyPage/Main/UserProfile';
import { UserProfileFallback } from '~components/MyPage/Main/UserProfile/fallback';
import { UserProfileLoader } from '~components/MyPage/Main/UserProfile/loader';
import { WalkInfo } from '~components/MyPage/Main/WalkInfo';
import { WalkInfoFallback } from '~components/MyPage/Main/WalkInfo/fallback';
import { WalkInfoLoader } from '~components/MyPage/Main/WalkInfo/loader';
import { MyPageStackProps } from '~navigation/MyPageNavigator';
import * as S from './styles';
import { DogProfileLoader } from '~components/MyPage/Main/DogProfile/loader';
import { ScrollView } from 'react-native';
type Props = NativeStackScreenProps<MyPageStackProps, 'Main'>;

export const MyPageScreen = ({ navigation }: Props) => {
  return (
    <S.MyPage>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 10, gap: 20 }}>
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
            <WalkInfo />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={DogProfileFallback}>
          <Suspense fallback={<DogProfileLoader />}>
            {/* 여기에 강아지 아이디 넣어줄것 */}
            <DogProfile navigateToDogProfileEdit={() => navigation.navigate('DogProfileEdit', { dogId: 0 })} />
          </Suspense>
        </ErrorBoundary>
      </ScrollView>
    </S.MyPage>
  );
};
