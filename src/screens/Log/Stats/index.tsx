import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { WalkLogStatContainer } from '~components/Log/WalkLogStatContainer';
import { LineChart } from '~components/Log/LineChart';
import { BarChart } from '~components/Log/BarChart';
import { useWalkStats } from '~apis/log/useWalkStats';

export const Stats = () => {
  const { walkRecordsByMonth, familyWalkRecords, totalRecords, walkRecordsThisMonth } = useWalkStats();

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
        <LineChart
          data={walkRecordsByMonth.map((record, index) => ({
            label: `${index + 1}월`,
            value: record,
          }))}
        />
        <BarChart data={Array.isArray(familyWalkRecords) ? familyWalkRecords : []} />
        <WalkLogStatContainer title="총 산책 내역" walkData={totalRecords} />
        <WalkLogStatContainer title="이번달 통계" walkData={walkRecordsThisMonth} />
      </ScrollView>
    </GestureHandlerRootView>
  );
};
