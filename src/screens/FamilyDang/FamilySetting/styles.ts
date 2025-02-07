import styled from '@emotion/native';
import { TextBold } from '~components/Common/Text';
import { Icon } from '~components/Common/Icons';
import { BgBox } from '~components/Common/BgBox';

export const NavigationToSettingScreen = styled(BgBox)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const TypoWrapper = styled.View``;
export const NextButton = styled(Icon.Prev)`
  transform: rotate(180deg);
`;

export const FamilySetting = styled.SafeAreaView``;
export const StyledView = styled.View`
  padding: 24px 20px 36px 20px;
`;

export const Title = styled(TextBold)`
  margin-bottom: 8px;
`;

export const TextArea = styled.View`
  width: 100%;
  height: 238px;
  position: relative;
`;

export const DogImage = styled(Icon.DogInvite)`
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
