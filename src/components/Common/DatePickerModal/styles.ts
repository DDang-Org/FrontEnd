import styled from '@emotion/native';

export const DatePickerBackground = styled.Pressable`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const DatePickerContainer = styled.View`
  padding: 0 10px 30px 10px;
  background-color: ${props => props.theme.colors.gc_4};
  overflow: hidden;
`;

export const DatePickerWrapper = styled.View`
  align-items: center;
`;

export const ConfirmButtonWrapper = styled.View`
  position: relative;
  background-color: ${props => props.theme.colors.gc_4};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  gap: 5px;
  /* border-bottom: solid 1px ${props => props.theme.colors.default}; */
  /* border: solid 1px red; */
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.gc_1};
`;

export const ConfirmButton = styled.Pressable`
  position: absolute;
  /* border: solid 1px blue; */
  right: 0;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
