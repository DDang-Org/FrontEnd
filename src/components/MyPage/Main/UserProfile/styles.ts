import styled from '@emotion/native';
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

export const EditWrapper = styled.Pressable`
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  background-color: ${({ theme }) => theme.colors.gc_4};
  position: absolute;
  right: 0;
  top: 0;
`;

//! Fallback
export const UserProfileFallback = styled(BgBox)`
  background-color: ${({ theme }) => theme.colors.gc_1};
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
