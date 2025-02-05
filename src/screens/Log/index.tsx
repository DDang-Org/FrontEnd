import * as S from './styles';
import { useState } from 'react';
import { View } from 'react-native';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useWalkLog } from '~apis/log/useWalkLog';
import { Calendar } from '~components/Log/Calendar';
import { NoWalkLog } from '~components/Log/NoWalkLog';
import { WalkLogCard } from '~components/Log/WalkLogCard';
import { dateToString } from '~utils/dateFormat';

export const LogHome = () => {
  const [date, setDate] = useState(new Date());
  const { logDetails } = useWalkLog(dateToString(date, '-'));
  return (
    <GestureHandlerRootView>
      <S.LogHome>
        <Calendar setDate={setDate} />
        <FlatList
          contentContainerStyle={{
            padding: 20,
            paddingBottom: 26,
            flex: 1,
          }}
          data={logDetails}
          renderItem={({ item }) => <WalkLogCard logDetail={item} />}
          keyExtractor={item => item.walkId.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          ListEmptyComponent={<NoWalkLog />}
        />
      </S.LogHome>
    </GestureHandlerRootView>
  );
};
