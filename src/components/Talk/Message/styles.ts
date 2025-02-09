import styled from '@emotion/native';
import { View } from 'react-native';

const Message = styled(View)`
  position: relative;
  padding: 9.5px 16px;
  border-radius: 12px;
  white-space: pre-line;
  margin: 8px 0;
  z-index: 1;
`;
export const IncomingMessage = styled(Message)`
  width: fit-content;
  align-self: flex-start;
  background-color: ${({ theme }) => theme.colors.lighten_2};
  border-top-left-radius: 0;
`;
export const OutgoingMessage = styled(Message)`
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.gc_4};
  width: fit-content;
  border-bottom-right-radius: 0;
`;
