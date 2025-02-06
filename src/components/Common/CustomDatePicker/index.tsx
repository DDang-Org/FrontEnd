import DatePicker from 'react-native-date-picker';

interface CustomDatePickerProps {
  open: boolean;
  date: Date;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  minimumDate?: Date;
  maximumDate?: Date;
}

export const CustomDatePicker = ({
  open,
  date,
  onConfirm,
  onCancel,
  minimumDate = new Date(2000, 0, 1),
  maximumDate = new Date(),
}: CustomDatePickerProps) => {
  return (
    <DatePicker
      title={' '}
      modal
      open={open}
      date={date}
      onConfirm={onConfirm}
      onCancel={onCancel}
      mode="date"
      locale="ko"
      confirmText="확인"
      cancelText="취소"
      minimumDate={minimumDate}
      maximumDate={maximumDate}
    />
  );
};
