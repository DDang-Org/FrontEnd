import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Suspense, useState } from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { BlockedUsersFallback } from '~components/MyPage/Block/BlockedUsers/fallback';
import { BlockedUsersLoader } from '~components/MyPage/Block/BlockedUsers/loader';
import { FriendTab } from '~components/Social/Friend';
import { Tab } from '~components/Social/Tab';
import { TalkTab } from '~components/Social/TalkTab';
import * as S from './styles';
import { SocialParamList } from '~navigation/SocialNavigator';
import { SocialNavigations } from '~constants/navigations';

type Props = BottomTabScreenProps<SocialParamList, typeof SocialNavigations.SOCIAL_HOME>;

export const SocialHomeScreen = ({}: Props) => {
  const [selectedTab, setSelectedTab] = useState<'댕친' | '댕톡'>('댕친');

  return (
    <S.SocialHomeScreen>
      <S.Header>
        <S.HeaderText fontSize={17}>소셜</S.HeaderText>
      </S.Header>
      <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === '댕친' ? (
        <ErrorBoundary FallbackComponent={BlockedUsersFallback}>
          <Suspense fallback={<BlockedUsersLoader />}>
            <FriendTab />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <TalkTab />
      )}
    </S.SocialHomeScreen>
  );
};
