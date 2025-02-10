import styled from '@emotion/native';

export const DetailProfile = styled.View`
  padding: 0px 20px 36px 20px;
  flex: 1;
  gap: 50px;
`;

export const TextWrapper = styled.View<{ deviceHeight: number }>`
  margin-top: ${props => (props.deviceHeight > 900 ? '70px' : '50px')};
  margin-bottom: 40px;
  align-items: center;
`;

export const GenderSelectArea = styled.View`
  gap: 20px;
`;

export const GenderButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 7px;
`;

export const ActionButtonWrapper = styled.View`
  width: 100%;
`;
