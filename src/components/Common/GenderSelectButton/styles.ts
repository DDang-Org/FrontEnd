import styled from '@emotion/native';
import { Dimensions } from 'react-native';
import { TextBold, TextRegular } from '~components/Common/Text';

interface GenderBtnProps {
  isActive: boolean;
  direction: 'row' | 'column';
}

export const GenderBtn = styled.Pressable<GenderBtnProps>`
  border-width: 2px;
  border-style: solid;
  border-color: ${({ isActive, direction, theme }) =>
    isActive ? theme.colors.darken : direction === 'column' ? theme.colors.gc_1 : theme.colors.gc_4};
  border-radius: 8px;
  width: 164px;
  height: ${({ direction }) => (direction === 'column' ? '102px' : '63px')};

  flex-direction: ${({ direction }) => direction};
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const StyledTextBold = styled(TextBold)<{ isActive: boolean }>`
  text-align: center;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.darken : theme.colors.font_3)};
`;

export const StyledTextRegular = styled(TextRegular)<{ isActive: boolean }>`
  text-align: center;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.darken : theme.colors.font_3)};
`;
