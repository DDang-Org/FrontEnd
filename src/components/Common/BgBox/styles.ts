import styled from '@emotion/native';

export const Container = styled.View<{
  paddingHorizontal?: number;
  paddingVertical?: number;
}>`
  background-color: ${({ theme }) => theme.colors.gc_4};
  padding: ${({ paddingHorizontal = 30, paddingVertical = 20 }) => `${paddingHorizontal}px ${paddingVertical}px`};
  border-radius: 16px;
`;
