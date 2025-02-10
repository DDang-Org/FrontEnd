import styled from '@emotion/native';
import { Switch, View } from 'react-native';
import { BgBox } from '~components/Common/BgBox';

export const ToggleBox = styled.View``;

export const Item = styled(BgBox)`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TypoWrapper = styled(View)``;

export const Toggle = styled(Switch)``;
export const Container = styled(BgBox)`
  border-radius: 16px;
  padding: 10px 4px;
`;
