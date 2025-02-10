import styled from '@emotion/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextBold } from '~components/Common/Text';

export const SocialScreen = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.gc_4};
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.gc_4};
  padding: 15px 0;
`;
export const HeaderText = styled(TextBold)`
  text-align: center;
`;
