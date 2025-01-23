import styled from '@emotion/native';
import { TextBold } from '~components/Common/Text';

export const WalkMessage = styled.View`
  position: absolute;
  top: 80px;
  right: 20px;
  padding: 10px 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.lighten_2};

  shadow-color: #000000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;

  elevation: 3;

  z-index: 2;
`;

export const MessageTail = styled.View`
  position: absolute;
  right: 10px;
  top: -5px;
  width: 15px;
  height: 15px;
  background-color: ${({ theme }) => theme.colors.lighten_2};
  transform: rotate(45deg);
`;

export const MessageText = styled(TextBold)``;
