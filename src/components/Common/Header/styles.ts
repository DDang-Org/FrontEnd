import styled from '@emotion/native';

export const HeaderContainer = styled.View`
  background-color: #f5f5f5;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const LeftContainer = styled.View`
  flex: 1;
  padding: 14px 0 14px 20px;
`;

export const CenterContainer = styled.View`
  flex: 2;
  align-items: center;
  padding: 15px 0;
`;

export const RightContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  padding: 14px 20px 14px 0;
`;

export const CenterText = styled.Text<{ fontSize?: number }>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '18px')};
  font-weight: bold;
`;
