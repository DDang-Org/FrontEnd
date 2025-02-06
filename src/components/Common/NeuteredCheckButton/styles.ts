import styled from '@emotion/native';

export const NeuteredCheckButton = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`;

export const NotChecked = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: solid 1px ${props => props.theme.colors.gc_1};
`;
