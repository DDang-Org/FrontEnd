import styled from '@emotion/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextBold } from '~components/Common/Text';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding: 12px 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Heading = styled.View`
  text-align: center;
  margin-bottom: 32px;
`;

export const HeadingText = styled(TextBold)`
  text-align: center;
`;

export const WalkTime = styled(TextBold)``;
export const WalkDistance = styled(TextBold)``;
