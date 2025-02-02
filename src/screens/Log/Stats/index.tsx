import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { WalkLogStatContainer } from '~components/Log/WalkLogStatContainer';
import { LineChart } from '~components/Log/LineChart';
import { BarChart } from '~components/Log/BarChart';

interface StatsProps {}

const sampleData = [
  { label: '1월', value: 0 },
  { label: '2월', value: 3 },
  { label: '3월', value: 2 },
  { label: '4월', value: 3 },
  { label: '5월', value: 4 },
  { label: '6월', value: 3 },
  { label: '7월', value: 3 },
  { label: '8월', value: 1 },
  { label: '9월', value: 4 },
  { label: '10월', value: 5 },
  { label: '11월', value: 4 },
  { label: '12월', value: 3 },
];

const sampleData2 = [
  { label: '나', value: 2 },
  { label: '망고', value: 4 },
  { label: '엄마', value: 5 },
  { label: '아빠', value: 2 },
  { label: '할아버지', value: 1 },
];

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
        <LineChart data={sampleData} />
        <BarChart data={sampleData2} />
        <WalkLogStatContainer title="총 산책 내역" />
        <WalkLogStatContainer title="이번달 통계" />
      </ScrollView>
    </GestureHandlerRootView>
  );
};
