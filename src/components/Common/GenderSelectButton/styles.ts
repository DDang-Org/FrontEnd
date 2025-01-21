import styled from '@emotion/native';

interface GenderBtnProps {
  $isActive: boolean;
  $direction: 'row' | 'column';
}

export const GenderBtn = styled.Pressable<GenderBtnProps>`
  border: solid 2px ${({ $isActive, theme }) => ($isActive ? theme.colors.darken : theme.colors.gc_1)};
  border-radius: 8px;
  width: auto;
  height: 102px;
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.darken : theme.colors.font_3)};

  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

export const GenderIcon = styled.Image``;
