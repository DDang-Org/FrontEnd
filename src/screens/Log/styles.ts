import styled from '@emotion/native';

export const LogHome = styled.SafeAreaView<{ statusBarHeight: number }>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: ${({ statusBarHeight }) => `${statusBarHeight + 56}px`};
`;

export const CustomHeader = styled.View`
  height: 56px;
  background-color: yellow;
  border: solid 1px red;
`;
