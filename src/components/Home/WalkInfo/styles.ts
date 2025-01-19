import styled from '@emotion/native';
import { BgBox } from '~components/Common/BgBox';
import { TextBold } from '~components/Common/Text';

export const WalkInfo = styled(BgBox)`
  width: 100%;
  gap: 20px;
  margin-top: 32px;
  margin-bottom: 20px;
`;
export const Heading = styled(TextBold)``;
export const WalkInfoLabel = styled(TextBold)``;
export const WalkInfoValue = styled(TextBold)``;
export const WalkInfoItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;
export const WalkInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;
