import styled from '@emotion/native';
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
  padding: 0px 0px 36px 0px;
`;

export const FamilystyledView = styled.View`
  padding: 20px 16px;
`;

export const ActionButtonWrapper = styled.View`
  padding: 30px 16px;
`;
