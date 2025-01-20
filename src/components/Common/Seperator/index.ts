import styled from '@emotion/native';

type SeparatorProps = {
  $height: number;
};

export const Separator = styled.View<SeparatorProps>`
  border: none;
  width: 1px;
  height: ${({ $height }) => $height + 'px'};
  background-color: ${({ theme }) => theme.colors.gc_1};
`;
