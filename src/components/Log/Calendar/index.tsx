import { Dimensions, LayoutChangeEvent } from 'react-native';
import * as S from './styles';
import { useState } from 'react';
import { useCalendar } from '~hooks/useCalendar';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { TextBold } from '~components/Common/Text';
import { Icon } from '~components/Common/Icons';

interface CalendarProps {
  date: Date;
  setDate: (date: Date) => void;
}

export const Calendar = ({ date, setDate }: CalendarProps) => {
  const { activeIndex, weekDays, weekCalendarList, currentDate, setCurrentDate } = useCalendar(date);
  const deviceWidth = Dimensions.get('window').width;
  const dateItemSize = (deviceWidth - 96) / weekDays.length;
  const MIN_CALENDAR_SIZE = dateItemSize + 52;

  const [isOpen, setIsOpen] = useState(false);
  const [startHeight, setStartHeight] = useState(MIN_CALENDAR_SIZE);

  const calendarHeight = useSharedValue<number | undefined>(undefined);
  const isOpenShared = useSharedValue(isOpen);

  const handleDatePress = (date: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), date);
    setCurrentDate(newDate);
    setDate(newDate);
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

  const MAX_ADDITIONAL_HEIGHT = dateItemSize * 4 + 40;
  const CLOSE_THRESHOLD = 100;
  const OPEN_THRESHOLD = 100;

  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      const heightDelta = event.translationY;
      const newHeight = startHeight + heightDelta;

      let finalHeight = newHeight;

      finalHeight = Math.min(finalHeight, MIN_CALENDAR_SIZE + MAX_ADDITIONAL_HEIGHT);
      finalHeight = Math.max(finalHeight, MIN_CALENDAR_SIZE);

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
      const finalCalendarHeight = isOpenShared.value ? MIN_CALENDAR_SIZE + MAX_ADDITIONAL_HEIGHT : MIN_CALENDAR_SIZE;
      calendarHeight.value = finalCalendarHeight;
      runOnJS(setIsOpen)(isOpenShared.value);
      runOnJS(setStartHeight)(finalCalendarHeight);
    });

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={panGesture}>
        <S.Calendar>
          <S.CalendarHeader>
            <TextBold fontSize={20}>
              {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
            </TextBold>
            <S.DatePickerTriggerButton>
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
    </GestureHandlerRootView>
  );
};
