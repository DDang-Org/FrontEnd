import styled from '@emotion/native';
import { TextExtraBold, TextRegular } from '~components/Common/Text';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gc_4};
  border-radius: 16px;
  padding: 20px 30px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Item = styled.View`
  width: 80px;
  background-color: ${({ theme }) => theme.colors.gc_4};
  gap: 2px;
  align-items: center;
`;

export const Value = styled(TextExtraBold)``;

export const Label = styled(TextRegular)``;
