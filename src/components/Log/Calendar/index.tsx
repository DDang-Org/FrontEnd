import { Dimensions, LayoutChangeEvent } from 'react-native';
import * as S from './styles';
import { useEffect, useState } from 'react';
import { useCalendar } from '~hooks/useCalendar';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { TextBold } from '~components/Common/Text';
import { Icon } from '~components/Common/Icons';
import { CustomDatePicker } from '~components/Common/CustomDatePicker';

interface CalendarProps {
  date: Date;
  setDate: (date: Date) => void;
}

export const Calendar = ({ date, setDate }: CalendarProps) => {
  const { activeIndex, weekDays, weekCalendarList, currentDate, setCurrentDate } = useCalendar(date);
  const deviceWidth = Dimensions.get('window').width;
  const itemSpacing = 8;
  const dateItemSize = (deviceWidth - (itemSpacing * (weekDays.length - 1) + 48)) / weekDays.length;
  const MIN_CALENDAR_SIZE = dateItemSize + 52;

  const [isOpen, setIsOpen] = useState(false);
  const [datePickerOpened, setDatePickerOpened] = useState(false);
  const [startHeight, setStartHeight] = useState(MIN_CALENDAR_SIZE);
  const [maxAdditionalHeight, setMaxAdditionalHeight] = useState(
    (dateItemSize + itemSpacing) * (weekCalendarList.length - 1),
  );

  const calendarHeight = useSharedValue<number | undefined>(undefined);
  const isOpenShared = useSharedValue(isOpen);

  useEffect(() => {
    setDate(currentDate);
    setMaxAdditionalHeight((dateItemSize + itemSpacing) * (weekCalendarList.length - 1));
    if (isOpen) {
      calendarHeight.value = MIN_CALENDAR_SIZE + maxAdditionalHeight;
    }
  }, [currentDate, weekCalendarList]);

  const handleDatePress = (date: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), date);
    setCurrentDate(newDate);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: calendarHeight.value,
    };
  });

  const handleLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    calendarHeight.value = height;
  };

  const CLOSE_THRESHOLD = 100;
  const OPEN_THRESHOLD = 100;

  const calculateFinalHeight = (newHeight: number) => {
    const maxAllowedHeight = Math.min(newHeight, MIN_CALENDAR_SIZE + maxAdditionalHeight);
    const minAllowedHeight = Math.min(maxAllowedHeight, MIN_CALENDAR_SIZE);

    return minAllowedHeight;
  };

  const calendarGesture = Gesture.Pan()
    .onUpdate(event => {
      const heightDelta = event.translationY;
      const newHeight = startHeight + heightDelta;

      const finalHeight = calculateFinalHeight(newHeight);

      calendarHeight.value = finalHeight;

      if (heightDelta < -CLOSE_THRESHOLD) {
        isOpenShared.value = false;
        runOnJS(setIsOpen)(false);
      } else if (heightDelta > OPEN_THRESHOLD) {
        isOpenShared.value = true;
        runOnJS(setIsOpen)(true);
      }
    })
    .onEnd(() => {
      const resolvedHeight = isOpenShared.value ? MIN_CALENDAR_SIZE + maxAdditionalHeight : MIN_CALENDAR_SIZE;

      calendarHeight.value = resolvedHeight;

      runOnJS(setIsOpen)(isOpenShared.value);
      runOnJS(setStartHeight)(resolvedHeight);
    });

  const handleConfirmDatePicker = (date: Date) => {
    setCurrentDate(date);
    setDatePickerOpened(false);
  };

  return (
    <>
      <GestureDetector gesture={calendarGesture}>
        <S.Calendar>
          <S.CalendarHeader>
            <TextBold fontSize={20}>
              {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
            </TextBold>
            <S.DatePickerTriggerButton onPress={() => setDatePickerOpened(true)}>
              <Icon.ArrowDown />
            </S.DatePickerTriggerButton>
          </S.CalendarHeader>
          <S.CalendarBody onLayout={handleLayout} style={animatedStyle}>
            <S.Week>
              {weekDays.map((day, index) => (
                <S.DayOfWeek fontSize={13} color="font_3" key={index}>
                  {day}
                </S.DayOfWeek>
              ))}
            </S.Week>
            {weekCalendarList.map((week, weekIdx) =>
              isOpen || weekIdx === activeIndex[0] ? (
                <S.Week key={weekIdx}>
                  {week.map((date, dateIdx) => {
                    const isDisabled = (weekIdx === 0 && date > 7) || (weekIdx === 4 && date < 22);
                    const isActive = weekIdx === activeIndex[0] && dateIdx === activeIndex[1];
                    return (
                      <S.DateItem
                        key={dateIdx}
                        disabled={isDisabled}
                        isActive={isActive}
                        hasWalkRecord={false}
                        onPress={() => handleDatePress(date)}
                        size={dateItemSize}
                      >
                        <S.DateText fontSize={15} isActive={isActive} disabled={isDisabled}>
                          {date}
                        </S.DateText>
                      </S.DateItem>
                    );
                  })}
                </S.Week>
              ) : null,
            )}
            <S.DragIndicator />
          </S.CalendarBody>
        </S.Calendar>
      </GestureDetector>
      <CustomDatePicker
        open={datePickerOpened}
        date={currentDate}
        onConfirm={handleConfirmDatePicker}
        onCancel={() => setDatePickerOpened(false)}
        minimumDate={new Date(2020, 0, 1)}
      />
    </>
  );
};
