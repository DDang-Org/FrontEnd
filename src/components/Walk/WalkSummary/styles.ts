import styled from '@emotion/native';
import { Button } from 'react-native';
import { BgBox } from '~components/Common/BgBox';
import { TextBold, TextExtraBold, TextMedium } from '~components/Common/Text';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  pointer-events: box-none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.lighten_3};
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  elevation: 5;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 20px;
  align-items: start;
`;

export const Date = styled(TextBold)`
  margin-bottom: 23px;
  color: ${({ theme }) => theme.colors.font_1};
`;

export const Title = styled(TextExtraBold)`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.font_1};
`;

export const Minute = styled(TextExtraBold)`
  color: ${({ theme }) => theme.colors.default};
`;

export const InfoContainer = styled(BgBox)`
  margin-top: 25px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const InfoMain = styled(TextExtraBold)`
  flex-direction: row;
  align-items: center;
`;

export const InfoSub = styled(TextMedium)`
  flex-direction: row;
  align-items: center;
`;

export const InfoItem = styled.View`
  align-items: center; // 중앙 정렬
`;
