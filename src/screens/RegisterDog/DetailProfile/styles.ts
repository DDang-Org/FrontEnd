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

export const NeuteredCheckButton = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`;

export const NotChecked = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: solid 1px ${props => props.theme.colors.gc_1};
`;

export const ActionButtonWrapper = styled.View`
  margin-top: 20px;
`;
