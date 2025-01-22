import styled from '@emotion/native';

export const Dot = styled.View`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.sub};
`;
