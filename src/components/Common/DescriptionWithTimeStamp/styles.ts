import styled from '@emotion/native';

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
  top: 6px;
`;

export const DescriptionWrapper = styled.View`
  position: relative;
`;
export const Description = styled.Text`
  position: relative;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Time = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.font_3};
`;
