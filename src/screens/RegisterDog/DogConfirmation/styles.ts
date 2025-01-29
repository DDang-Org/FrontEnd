import styled from '@emotion/native';

export const DogConfirmation = styled.View`
  padding: 0px 20px 80px 20px;
  flex: 1;
  align-items: center;
  gap: 30px;
`;

export const TextWrapper = styled.View<{ deviceHeight: number }>`
  margin-top: ${props => (props.deviceHeight > 900 ? '70px' : '50px')};
  align-items: center;
`;

export const DogImage = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lighten_2};
`;

export const TagWrapper = styled.View`
  flex-direction: row;
  gap: 6px;
`;

export const DogProfileArea = styled.View`
  gap: 24px;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 170px;
`;
