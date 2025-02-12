import styled from '@emotion/native';

export const WalkLogCard = styled.View`
  padding: 12px 16px;
  width: 100%;
  background-color: ${props => props.theme.colors.gc_4};
  border-radius: 16px;
  align-items: center;
`;

export const UserProfile = styled.View`
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
`;

export const WalkImage = styled.Image`
  margin-top: 12px;
  margin-bottom: 8px;
  width: 100%;
  height: 120px;
`;

export const WalkLogDetails = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const WalkLogDetailItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const Separator = styled.View`
  width: 1px;
  height: 20px;
  background-color: ${props => props.theme.colors.gc_1};
`;
