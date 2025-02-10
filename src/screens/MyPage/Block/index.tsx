import { Suspense } from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { BlockedUsers } from '~components/MyPage/Block/BlockedUsers';
import { BlockedUsersFallback } from '~components/MyPage/Block/BlockedUsers/fallback';
import { BlockedUsersLoader } from '~components/MyPage/Block/BlockedUsers/loader';
import * as S from './styles';

export const BlockScreen = () => {
  return (
    <S.BlockScreen>
      <ErrorBoundary FallbackComponent={BlockedUsersFallback}>
        <Suspense fallback={<BlockedUsersLoader />}>
          <BlockedUsers />
        </Suspense>
      </ErrorBoundary>
    </S.BlockScreen>
  );
};
