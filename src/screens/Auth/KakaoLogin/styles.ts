import styled from '@emotion/native';

export const KakaoLogin = styled.SafeAreaView`
  flex: 1;
  position: relative;
`;

export const KaKaoLoadingContainer = styled.View`
  background-color: ${props => props.theme.colors.gc_4};
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  padding-bottom: 250px;
`;
