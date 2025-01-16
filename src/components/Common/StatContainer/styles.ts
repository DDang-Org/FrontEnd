import styled from '@emotion/native';

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
  width: 76px;
  background-color: ${({ theme }) => theme.colors.gc_4};
  gap: 2px;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
`;

export const Label = styled.Text`
  font-size: 13px;
`;
