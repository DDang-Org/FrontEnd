import { api } from '~apis/api';
import { APIResponse } from '~types/api';
import { FamilyRole } from '~types/family-role';

export interface FamilyWalkRecordRequest {
  dogId: number;
}

export interface FamilyWalkRecordResponse {
  memberId: number;
  familyRole: FamilyRole;
  memberName: string;
  count: number;
}

export const fetchFamilyWalkRecord = async ({
  dogId,
}: FamilyWalkRecordRequest): Promise<APIResponse<FamilyWalkRecordResponse>> => {
  const response = await api.get(`log/year/family${dogId}`).json<APIResponse<FamilyWalkRecordResponse>>();
  return response;
};
