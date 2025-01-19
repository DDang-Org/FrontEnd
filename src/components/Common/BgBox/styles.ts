import styled from '@emotion/native';

export const Container = styled.View<{
  paddingHorizontal?: number;
  paddingVertical?: number;
}>`
  background-color: ${({ theme }) => theme.colors.gc_4};
  padding: ${({ paddingVertical = 20, paddingHorizontal = 30 }) => `${paddingVertical}px ${paddingHorizontal}px`};
  border-radius: 16px;
`;
