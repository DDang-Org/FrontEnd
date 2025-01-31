import * as S from './styles';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { View } from 'react-native';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Calendar } from '~components/Log/Calendar';
import { WalkLogCard } from '~components/Log/WalkLogCard';
import { WalkLogNavigations } from '~constants/navigations';
import { TabBarParamList } from '~navigation/BottomTabNavigator';
import { WalkLogParamList } from '~navigation/WalkLogNavigator';

type LogProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabBarParamList, 'Log'>,
  NativeStackNavigationProp<WalkLogParamList, typeof WalkLogNavigations.LogHome>
>;

export const LogHome = () => {
  const navigation = useNavigation<LogProps>;
  const [date, setDate] = useState(new Date());
  return (
    <GestureHandlerRootView>
      <S.LogHome>
        <Calendar date={date} setDate={setDate} />
        <FlatList
          contentContainerStyle={{
            padding: 20,
            paddingBottom: 26,
          }}
          data={['item1', 'item2', 'item3', 'item4']}
          renderItem={() => <WalkLogCard />}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        />
      </S.LogHome>
    </GestureHandlerRootView>
  );
};
