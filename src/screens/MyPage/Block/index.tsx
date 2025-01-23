import { BlockedUsers } from '~components/MyPage/Block/BlockedUsers';
import * as S from './styles';
import ErrorBoundary from 'react-native-error-boundary';
import { Suspense } from 'react';

export const BlockScreen = () => {
  return (
    <S.BlockScreen>
      <ErrorBoundary>
        <Suspense>
          <BlockedUsers />
        </Suspense>
      </ErrorBoundary>
    </S.BlockScreen>
  );
};
