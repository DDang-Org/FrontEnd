import styled from '@emotion/native';

export const WalkLogStatContainer = styled.View`
  width: 100%;
  height: 136px;
  background-color: ${props => props.theme.colors.gc_4};
  border-radius: 16px;
  padding: 20px 24px 30px 24px;
  gap: 11px;
`;

export const StatContainerInner = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
