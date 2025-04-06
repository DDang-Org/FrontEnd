import styled from '@emotion/native';
import { Pressable } from 'react-native';
import { BgBox } from '~components/Common/BgBox';
import { Icon } from '~components/Common/Icons';
import { TextBold } from '~components/Common/Text';

export const SettingScreen = styled.View`
  flex: 1;
  padding: 26px 20px;
  gap: 20px;
  position: relative;
`;

export const DeleteAccountButton = styled(Pressable)``;

export const DeleteAccountTypo = styled(TextBold)`
  text-align: center;
  color: #dcccc2;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  position: absolute;
  left: 20px;
  bottom: 12px;
  gap: 6px;
`;

export const NavigationToBlockScreen = styled(BgBox)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TypoWrapper = styled.View``;
export const NextButton = styled(Icon.Prev)`
  transform: rotate(180deg);
`;
