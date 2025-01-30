import styled from '@emotion/native';

export const Tag = styled.View`
  border: solid 2px ${({ theme }) => theme.colors.gc_1};
  padding: 6px 12px;
  border-radius: 30px;
  width: fit-content;
  height: 32px;

  justify-content: center;
  align-items: center;
`;
