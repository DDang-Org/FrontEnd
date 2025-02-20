import styled from '@emotion/native';

export const DogConfirmation = styled.View`
  padding: 0px 20px 80px 20px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const TextWrapper = styled.View<{ deviceHeight: number }>`
  margin-top: ${props => (props.deviceHeight > 900 ? '70px' : '50px')};
  align-items: center;
`;

export const DogImage = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 180px;
  background-color: ${props => props.theme.colors.lighten_2};
`;

export const TagWrapper = styled.View<{ characterCount: number }>`
  flex-direction: ${props => (props.characterCount < 19 ? 'row' : 'column')};
  gap: 6px;
`;

export const DogProfileArea = styled.View<{ characterCount: number }>`
  gap: 24px;
  align-items: center;
  margin-bottom: ${props => `${props.characterCount < 19 ? 180 : 80}px`};
`;
