import styled from '@emotion/native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextBold } from '~components/Common/Text';

export const MyPage = styled(SafeAreaView)`
  flex: 1;
  padding: 0 20px;
  gap: 20px;
`;

export const Header = styled.View`
  padding: 15px 20px;
  position: relative;
`;

export const Title = styled(TextBold)`
  text-align: center;
`;

export const GearWrapper = styled(View)`
  position: absolute;
  right: 0;
  top: 14px;
`;
