import styled from '@emotion/native';
import { TextBold, TextMedium } from '~components/Common/Text';

export const TalkTab = styled.View`
  padding: 0 20px;
  justify-content: center;
`;

export const TalkItem = styled.View`
  height: 80px;
  flex-direction: row;
  gap: 12px;
  position: relative;
  padding: 16px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gc_2};
`;
export const TypoWrapper = styled.View`
  flex-direction: row;
  gap: 6px;
`;
export const MainContainer = styled.View`
  justify-content: center;
`;
export const Name = styled(TextBold)``;
export const FamilyRoleGenderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
export const FamilyRole = styled(TextMedium)``;
export const Gender = styled(TextMedium)``;
export const TalkContent = styled(TextMedium)``;
export const UnreadChatCountWrapper = styled.View`
  position: absolute;
  top: 30px;
  right: 0;
`;
