import styled from '@emotion/native';
import { TextBold } from '~components/Common/Text';
import { Icon } from '~components/Common/Icons';

export const StyledScrollView = styled.ScrollView`
  padding: 24px 20px 36px 20px;
  background-color: ${props => props.theme.colors.gc_4};
`;

export const Title = styled(TextBold)`
  margin-bottom: 8px;
`;

export const TextArea = styled.View`
  width: 100%;
  height: 238px;
  position: relative;
`;

export const DogImage = styled(Icon.StandingDog)`
  position: absolute;
  right: 12px;
  bottom: 0;
`;

export const CopyInviteCode = styled.Pressable`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  background-color: #ecf9da;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const TimerWrapper = styled.View`
  flex-direction: row;
  margin-top: 8px;
  gap: 10px;
  justify-content: center;
`;

export const Separator = styled.View`
  width: 100%;
  height: 2px;
  background-color: #e5e5ec;
  margin-top: 40px;
`;

export const InviteGuideArea = styled.View`
  align-items: center;
  padding: 53px 0;
  gap: 27px;
`;

export const Bar = styled.View`
  border-radius: 50px;
  width: 60px;
  height: 3px;
  background-color: ${props => props.theme.colors.default};
`;

export const DescriptionTiTle = styled(TextBold)`
  margin-top: 16px;
`;

export const DescriptionSubtitle = styled(TextBold)`
  margin: 10px 0;
`;

export const InvitationGuideBackground = styled.View`
  width: 100%;
  border-radius: 24px;
  background-color: ${props => props.theme.colors.lighten_3};
  align-items: center;
  padding: 20px;
`;

export const GrayBackground = styled.View`
  width: 100%;
  height: 151px;
  border-radius: 12px;
  background-color: #d9d9d9;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const Gap = styled.View`
  height: 20px;
`;

export const Description = styled.View`
  margin: 16px 0;
  align-items: center;
`;
