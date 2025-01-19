import styled from '@emotion/native';
import { Pressable } from 'react-native';
import { TextBold } from '~components/Common/Text';

export const RetryButton = styled(Pressable)`
  background-color: ${({ theme }) => theme.colors.font_1};
  padding: 4px;
  border-radius: 8px;
`;

export const ButtonText = styled(TextBold)`
  text-align: center;
  color: ${({ theme }) => theme.colors.gc_4};
`;
