import { fetchFamilyInfo } from '~apis/family/fetchFamilyInfo';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useFamilyInfo = () => {
    const { data: familyInfo } = useSuspenseQuery({
        queryKey: ['familyInfo'],
        queryFn: fetchFamilyInfo,
        select: ({ data }) => data,
    });
    return familyInfo;
};
