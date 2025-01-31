import * as S from './styles';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Calendar } from '~components/Log/Calendar';
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
    <S.LogHome>
      <Calendar date={date} setDate={setDate} />
    </S.LogHome>
  );
};
