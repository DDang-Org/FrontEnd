import { api } from '~apis/api';
import { APIResponse } from '~types/api';
import { FamilyRole } from '~types/family-role';

export interface FamilyWalkRecordsResponse {
  memberId: number;
  familyRole: FamilyRole;
  memberName: string;
  count: number;
}

export const fetchFamilyWalkRecords = async (): Promise<APIResponse<FamilyWalkRecordsResponse>> => {
  const response = await api.get(`log/year/family`).json<APIResponse<FamilyWalkRecordsResponse>>();
  return response;
};
