import styled from '@emotion/native';
import { BgBox } from '~components/Common/BgBox';

//! Loader
export const WalkInfoLoader = styled(BgBox)`
  height: 92px;
  justify-content: center;
`;

//! Fallback
export const WalkInfoFallback = styled(BgBox)`
  background-color: ${({ theme }) => theme.colors.gc_1};
  justify-content: center;
  height: 92px;
`;
