import { TextBold } from '~components/Common/Text';
import * as S from './styles';
import { Icon } from '~components/Common/Icons';
import { useState } from 'react';
import { CustomDatePicker } from '~components/Common/CustomDatePicker';

interface CalendarHeaderProps {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
}

export const CalendarHeader = ({ currentDate, setCurrentDate }: CalendarHeaderProps) => {
  const [datePickerOpened, setDatePickerOpened] = useState(false);

  const handleConfirmDatePicker = (date: Date) => {
    setCurrentDate(date);
    setDatePickerOpened(false);
  };

  return (
    <S.CalendarHeader>
      <TextBold fontSize={20}>
        {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
      </TextBold>
      <S.DatePickerTriggerButton onPress={() => setDatePickerOpened(true)}>
        <Icon.ArrowDown />
      </S.DatePickerTriggerButton>
      <CustomDatePicker
        open={datePickerOpened}
        date={currentDate}
        onConfirm={handleConfirmDatePicker}
        onCancel={() => setDatePickerOpened(false)}
        minimumDate={new Date(2020, 0, 1)}
      />
    </S.CalendarHeader>
  );
};
