import styled from '@emotion/native';
import { View } from 'react-native';

export const ProfileImageLoader = styled(View)`
  background-color: ${({ theme }) => theme.colors.lighten_2};
  border-radius: 50%;
`;
