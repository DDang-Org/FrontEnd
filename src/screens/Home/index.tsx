import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Suspense } from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import Avatar1 from '~assets/avatars/Avatar1.svg';
import DogHand from '~assets/dogs/dog-hand.svg';
import { ActionButton } from '~components/Common/ActionButton';
import { Icon } from '~components/Common/Icons';
import { Heading } from '~components/Home/Heading';
import { HeadingFallback } from '~components/Home/Heading/fallback';
import { HeadingLoader } from '~components/Home/Heading/loader';
import { WalkInfo } from '~components/Home/WalkInfo';
import { WalkInfoFallback } from '~components/Home/WalkInfo/fallback';
import { WalkInfoLoader } from '~components/Home/WalkInfo/loader';
import { HomeStackProps } from '~navigation/HomeNavigator';
import * as S from './styles';

type Props = NativeStackScreenProps<HomeStackProps, 'Main'>;

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <S.HomeScreen>
      <S.Header>
        {/* Profile로 변경하기 */}
        <Avatar1 width={32} height={32} />
        <Icon.Bell onPress={() => navigation.navigate('Notification')} />
      </S.Header>
      <ErrorBoundary FallbackComponent={HeadingFallback}>
        <Suspense fallback={<HeadingLoader />}>
          <Heading />
        </Suspense>
      </ErrorBoundary>
      <DogHand />
      <ErrorBoundary FallbackComponent={WalkInfoFallback}>
        <Suspense fallback={<WalkInfoLoader />}>
          <WalkInfo />
        </Suspense>
      </ErrorBoundary>
      <ActionButton type="semiRoundedRect" text="산책 시작하기" onPress={() => navigation.navigate('Walk')} />
    </S.HomeScreen>
  );
};
