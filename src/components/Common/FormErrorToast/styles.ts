import styled from '@emotion/native';
import { TextBold } from '~components/Common/Text';

export const FormErrorToast = styled.View`
  padding: 10px 16px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: #fdf1f1;
`;

export const ErrorMessage = styled(TextBold)`
  text-align: center;
  color: red;
`;
