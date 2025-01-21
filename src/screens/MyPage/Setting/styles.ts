import styled from '@emotion/native';
import { Pressable } from 'react-native';
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
  position: absolute;
  left: 20px;
  bottom: 12px;
  gap: 6px;
`;
