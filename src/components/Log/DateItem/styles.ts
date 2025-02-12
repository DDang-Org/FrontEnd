import styled from '@emotion/native';

export const DateItem = styled.Pressable<{
  isActive: boolean;
  size: number;
}>`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isActive ? props.theme.colors.sub : 'transparent')};
  border-radius: 18px;
`;
