import styled from '@emotion/native';

export const MultilineInput = styled.View<{ isMultiline: boolean }>`
  width: 100%;
  height: ${({ isMultiline }) => (isMultiline ? '86px' : '64px')};
`;
