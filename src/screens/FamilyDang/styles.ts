import styled from '@emotion/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActionButton } from '~components/Common/ActionButton';
import { TextBold } from '~components/Common/Text';

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 0 20px;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.lighten_3};
`;

export const HeaderArea = styled.View`
  padding: 15px 20px;
  position: relative;
`;
// 텍스트
export const HeaderTitle = styled(TextBold)`
  text-align: center;
`;

export const InviteComment = styled(TextBold)`
  text-align: start;
`;

export const GearWrapper = styled.View`
  position: absolute;
  right: 0;
  top: 14px;
`;

export const ProfileWrapper = styled.View<{ isLast: boolean }>`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-bottom-width: ${({ isLast }) => (isLast ? '0px' : '1px')}; /* 마지막 항목은 라인 제거 */
  border-bottom-color: #ccc;
`;

export const ProfileImage = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const FamilyInfoArea = styled.View`
  flex-shrink: 1;
  margin-left: 16px;
  gap: 1px;
`;

export const LineWrapper = styled.View`
  flex-direction: row;
  gap: 5px;
`;

export const MemberName = styled(TextBold)``;

export const MemberDetails = styled(TextBold)``;

export const LabelText = styled(TextBold)``;

export const ValueText = styled(TextBold)``;

export const InviteSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InviteButton = styled(ActionButton)``;

export const FamilyContainer = styled.View`
  gap: 100px;
`;
