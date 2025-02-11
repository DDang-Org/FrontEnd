import styled from '@emotion/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextBold, TextRegular } from '~components/Common/Text';
import { BgBox } from '~components/Common/BgBox';
import { ResizeButton } from '~components/Common/ResizeButton';

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  padding: -55px 20px;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.lighten_3};
`;

export const HeaderArea = styled.View`
  padding: 15px 20px;
  position: relative;
`;

export const HeaderTitle = styled(TextBold)`
  text-align: center;
`;

export const InviteComment = styled(TextBold)`
  text-align: start;
  padding-top: 6px;
  padding-left: 5px;
`;

export const GearWrapper = styled.View`
  position: absolute;
  right: 0;
  top: 14px;
`;

export const ProfileWrapper = styled.View<{ isLast: boolean }>`
  flex-direction: row;
  align-items: center;
  padding: 14px;
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

export const MemberDetails = styled(TextRegular)`
  line-height: 20px; /* 줄 간격 추가 */
  gap: 10px; /* 데이터 간의 간격 */
`;


export const LabelText = styled(TextBold)``;

export const ValueText = styled(TextBold)``;

export const BrownValueText = styled(TextBold)`
  color: ${({ theme }) => theme.colors.default};
`;

export const InviteSection = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const InviteButton = styled(ResizeButton)`
  display: flex;
  padding: 7.5px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background-color: #ecf9da;
  color: #6ca719;
  align-self: flex-end;
  font-weight: 900;
`;

export const ButtonText = styled(TextBold)`
  font-size: 17px;
  color: #6ca719;
`;

export const FamilyContainer = styled.View`
  gap: 100px;
`;

export const GapBox = styled(BgBox)`
  margin-top: 20px;
`;

export const StateBox = styled.View`
  margin-top: 15px;
`;

export const ClickFamily = styled.View`
  margin-top: 5px;
  background-color: white;
`;

export const RadioButton = styled.View``;

export const TextAtrea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 26px 30px;
`;

export const RadioButtonWrapper = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border-width: 2px;
  border-color: black;
  justify-content: center;
  align-items: center;
`;

export const RadioButtonInner = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: black;
`;
export const FamilyComment = styled.View`
  /* margin-top: 15px; */
  background-color: white;
`;
export const FamilyCommentTextAtrea = styled.View`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 26px 30px;
`;
export const FamilyCommentTextCommentAtrea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 26px 30px;
`;
