import styled from '@emotion/native';

export const HeaderContainer = styled.View<{ backgroundColorType: 'white' | 'default' }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme, backgroundColorType }) =>
    backgroundColorType === 'default' ? theme.colors.lighten_3 : '#ffffff'}; // 옵션에 따라 배경색 설정
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
