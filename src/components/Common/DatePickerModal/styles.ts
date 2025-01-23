import styled from '@emotion/native';

export const DatePickerBackground = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const DatePickerContainer = styled.View`
  border-radius: 15px;
  margin: 0 10px 10px 10px;
  background-color: ${props => props.theme.colors.gc_1};
  overflow: hidden;
`;

export const ConfirmButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  gap: 5px;
`;
