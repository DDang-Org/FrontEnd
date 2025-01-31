import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { WalkLogStatContainer } from '~components/Log/WalkLogStatContainer';

interface StatsProps {}

export const Stats = ({}: StatsProps) => {
  return (
    <GestureHandlerRootView>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 8,
          paddingHorizontal: 20,
          paddingBottom: 40,
          rowGap: 20,
        }}
      >
        <WalkLogStatContainer title="총 산책 내역" />
        <WalkLogStatContainer title="이번달 통계" />
      </ScrollView>
    </GestureHandlerRootView>
  );
};
