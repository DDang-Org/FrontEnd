import styled from '@emotion/native';
import { TextBold, TextRegular } from '~components/Common/Text';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gc_4};
  padding: 16px 20px 16px 32px;
  width: 100%;
  height: 100px;
  justify-content: center;
  gap: 2px;
`;

export const DotWrapper = styled.View`
  position: absolute;
  left: -8px;
  top: 10px;
`;

export const DescriptionWrapper = styled.View`
  position: relative;
`;

export const Description = styled(TextBold)``;

export const Time = styled(TextRegular)``;
