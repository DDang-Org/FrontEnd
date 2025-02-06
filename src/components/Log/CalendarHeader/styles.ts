import styled from '@emotion/native';

export const CalendarHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px 0 20px 0;
`;

export const DatePickerTriggerButton = styled.Pressable`
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.colors.lighten_3};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;
