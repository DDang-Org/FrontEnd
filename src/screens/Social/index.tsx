import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { Tab } from '~components/Social/Tab';
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
    </S.SocialScreen>
  );
};
