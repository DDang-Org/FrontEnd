import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Suspense, useState } from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { BlockedUsersFallback } from '~components/MyPage/Block/BlockedUsers/fallback';
import { BlockedUsersLoader } from '~components/MyPage/Block/BlockedUsers/loader';
import { Friend } from '~components/Social/Friend';
import { Tab } from '~components/Social/Tab';
import { Talk } from '~components/Social/Talk';
import { TabBarParamList } from '~navigation/BottomTabNavigator';
import * as S from './styles';

type Props = BottomTabScreenProps<TabBarParamList, 'Social'>;

export const SocialScreen = ({}: Props) => {
  const [selectedTab, setSelectedTab] = useState<'댕친' | '댕톡'>('댕친');

  return (
    <S.SocialScreen>
      <S.Header>
        <S.HeaderText fontSize={17}>소셜</S.HeaderText>
      </S.Header>
      <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === '댕친' ? (
        <ErrorBoundary FallbackComponent={BlockedUsersFallback}>
          <Suspense fallback={<BlockedUsersLoader />}>
            <Friend />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <Talk />
      )}
    </S.SocialScreen>
  );
};
