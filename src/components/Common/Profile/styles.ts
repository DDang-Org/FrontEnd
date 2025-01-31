import styled from '@emotion/native';
import { View } from 'react-native';
import { Image } from 'react-native';

export const ProfileWithSrc = styled(Image)`
  border-radius: 1000px;
`;

//! Fallback
export const ProfileImageFallback = styled(View)`
  background-color: red;
  border-radius: 1000px;
  width: 32px;
  height: 32px;
`;

//! Loader
export const ProfileImageLoader = styled(View)`
  background-color: ${({ theme }) => theme.colors.lighten_2};
  border-radius: 1000px;
`;
