import styled from '@emotion/native';
import { View } from 'react-native';
import { BgBox } from '~components/Common/BgBox';
import { TextBold, TextExtraBold, TextMedium } from '~components/Common/Text';

export const UserProfile = styled(BgBox)`
  justify-content: center;
  align-items: center;
  height: 285px;
`;

export const Name = styled(TextExtraBold)`
  margin-top: 8px;
`;

export const Address = styled(TextMedium)``;

export const GenderRoleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
`;

export const Gender = styled(TextBold)``;
export const Role = styled(TextBold)``;

export const EditWrapper = styled(View)`
  border-radius: 10px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.lighten_2};
  position: absolute;
  right: 32px;
  top: 32px;
`;

//! Fallback
export const UserProfileFallback = styled(BgBox)`
  background-color: ${({ theme }) => theme.colors.gc_1};
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
