import styled from '@emotion/native';
import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export const TalkArea = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.lighten_3};
`;
