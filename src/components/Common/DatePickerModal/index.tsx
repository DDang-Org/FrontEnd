import { Modal } from 'react-native';
import * as S from './styles';
import DatePicker from 'react-native-date-picker';

interface DatePickerProps {
  isVisible: boolean;
  date: Date;
  onChangeDate: (date: Date) => void;
  onConfirmDate: () => void;
}

export const DatePickerModal = ({ isVisible, date, onChangeDate, onConfirmDate }: DatePickerProps) => {
  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <S.DatePickerBackground>
        <S.DatePickerContainer>
          <S.ConfirmButton onPress={onConfirmDate} />
        </S.DatePickerContainer>
        <S.DatePickerContainer>
          <DatePicker mode="date" date={new Date()} onDateChange={onChangeDate} />
        </S.DatePickerContainer>
      </S.DatePickerBackground>
    </Modal>
  );
};
