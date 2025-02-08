import styled from '@emotion/native';
import { TextBold, TextMedium } from '~components/Common/Text';

export const Talk = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gc_4};
`;
export const LeftContentContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const TypoWrapper = styled.View`
  margin-left: 12px;
`;
export const Name = styled(TextBold)``;
export const GenderFamilyRoleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
export const Gender = styled(TextMedium)``;
export const FamilyRole = styled(TextMedium)``;
