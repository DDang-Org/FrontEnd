import styled from '@emotion/native';
import { TextBold } from '~components/Common/Text';

export const LineChart = styled.View`
  width: 100%;
  height: 318px;
  background-color: ${props => props.theme.colors.gc_4};
  border-radius: 16px;
  padding: 20px 24px;
`;

export const Title = styled(TextBold)`
  margin-bottom: 12px;
`;
