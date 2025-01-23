import React, { useEffect, useRef, useState } from 'react';
import { Modal, Animated, Pressable } from 'react-native';
import * as S from './styles';
import DatePicker from 'react-native-date-picker';
import { TextRegular } from '~components/Common/Text';

interface DatePickerProps {
  isVisible: boolean;
  date: Date;
  onChangeDate: (date: Date) => void;
  onConfirmDate: () => void;
}

export const DatePickerModal = ({ isVisible, date, onChangeDate, onConfirmDate }: DatePickerProps) => {
  const [modalVisible, setModalVisible] = useState(isVisible);
  const slideAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    if (isVisible) {
      setModalVisible(true);
      slideAnim.setValue(300);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 300,
        duration: 200,
        useNativeDriver: true,
      }).start();
      setTimeout(() => setModalVisible(false), 10);
    }
  }, [isVisible]);

  const handleConfirm = () => {
    Animated.timing(slideAnim, {
      toValue: 300,
      duration: 200,
      useNativeDriver: true,
    }).start();

    setTimeout(onConfirmDate, 150);
  };

  return (
    <Modal visible={modalVisible} transparent animationType="none">
      <S.DatePickerBackground>
        <Animated.View style={{ transform: [{ translateY: slideAnim }] }}>
          <S.ConfirmButtonWrapper>
            <S.ConfirmButton onPress={handleConfirm}>
              <TextRegular fontSize={17} color="darken">
                확인
              </TextRegular>
            </S.ConfirmButton>
          </S.ConfirmButtonWrapper>
          <S.DatePickerContainer>
            <S.DatePickerWrapper>
              <DatePicker
                mode="date"
                date={date}
                onDateChange={onChangeDate}
                locale="ko"
                theme="light"
                minimumDate={new Date(2000, 0, 1)}
                maximumDate={new Date()}
              />
            </S.DatePickerWrapper>
          </S.DatePickerContainer>
        </Animated.View>
      </S.DatePickerBackground>
    </Modal>
  );
};
