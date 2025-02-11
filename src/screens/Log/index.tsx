import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { useState } from 'react';
import { View } from 'react-native';
import { FlatList, GestureHandlerRootView, Pressable } from 'react-native-gesture-handler';
import { useWalkLog } from '~apis/log/useWalkLog';
import { Calendar } from '~components/Log/Calendar';
import { DogProfile } from '~components/Log/DogProfile';
import { NoWalkLog } from '~components/Log/NoWalkLog';
import { WalkLogCard } from '~components/Log/WalkLogCard';
import { dateToString } from '~utils/dateFormat';
import { Icon } from '~components/Common/Icons';
import { Header } from '~components/Common/Header';
import { WalkLogNavigations } from '~constants/navigations';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { WalkLogParamList } from '~navigation/WalkLogNavigator';

type NavigationProps = NativeStackNavigationProp<WalkLogParamList>;

export const LogHome = () => {
  const [date, setDate] = useState(new Date());
  const { logDetails } = useWalkLog(dateToString(date, '-'));
  const navigation = useNavigation<NavigationProps>();
  return (
    <GestureHandlerRootView>
      <Header
        left={
          <DogProfile dogName="밤톨이" imageUri="https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg" />
        }
        right={
          <Pressable onPress={() => navigation.navigate(WalkLogNavigations.Stats)}>
            <Icon.Graph />
          </Pressable>
        }
      />
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
