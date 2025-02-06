import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchWalkRecordsByMonth } from '~apis/log/ fetchWalkRecordsByMonth';
import { FamilyWalkRecordsResponse, fetchFamilyWalkRecords } from '~apis/log/fetchFamilyWalkRecords';
import { fetchTotalRecords, WalkData } from '~apis/log/fetchTotalRecords';
import { fetchWalkRecordsThisMonth } from '~apis/log/fetchWalkRecordsThisMonth';
import { APIResponse } from '~types/api';

export const useFetchData = <T>(queryKey: string, queryFn: () => Promise<APIResponse<T>>) => {
  const { data } = useSuspenseQuery({
    queryKey: [queryKey],
    queryFn,
    select: ({ data }: { data: T }) => data,
  });

  return data;
};

export const useWalkStats = () => {
  const walkRecordsByMonth = useFetchData<number[]>('walkRecordsByMonth', fetchWalkRecordsByMonth);
  const familyWalkRecords = useFetchData<FamilyWalkRecordsResponse>('familyWalkRecords', fetchFamilyWalkRecords);
  const totalRecords = useFetchData<WalkData>('totalRecords', fetchTotalRecords);
  const walkRecordsThisMonth = useFetchData<WalkData>('walkRecordsThisMonth', fetchWalkRecordsThisMonth);

  return { walkRecordsByMonth, familyWalkRecords, totalRecords, walkRecordsThisMonth };
};
