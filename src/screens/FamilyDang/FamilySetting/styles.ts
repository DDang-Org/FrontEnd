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
  padding: 24px 20px 36px 20px;
`;
