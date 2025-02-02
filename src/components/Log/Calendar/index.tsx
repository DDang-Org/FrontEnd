import { Dimensions, LayoutChangeEvent } from 'react-native';
import * as S from './styles';
import { useEffect, useState } from 'react';
import { useCalendar } from '~hooks/useCalendar';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { CalendarHeader } from '~components/Log/CalendarHeader';

interface CalendarProps {
  date: Date;
  setDate: (date: Date) => void;
}

export const Calendar = ({ date, setDate }: CalendarProps) => {
  const { activeIndex, weekDays, weekCalendarList, currentDate, setCurrentDate } = useCalendar(date);
  const deviceWidth = Dimensions.get('window').width;
  const ITEM_SPACING = 8;
  const SIDE_PADDING = 24;
  const dateItemSize = (deviceWidth - (ITEM_SPACING * (weekDays.length - 1) + SIDE_PADDING * 2)) / weekDays.length;
  const MIN_CALENDAR_SIZE = dateItemSize + 52;

  const [isOpen, setIsOpen] = useState(false);
  const [startHeight, setStartHeight] = useState(MIN_CALENDAR_SIZE);
  const [maxAdditionalHeight, setMaxAdditionalHeight] = useState(
    (dateItemSize + ITEM_SPACING) * (weekCalendarList.length - 1),
  );

  const calendarHeight = useSharedValue(MIN_CALENDAR_SIZE);
  const isOpenShared = useSharedValue(isOpen);

  useEffect(() => {
    setDate(currentDate);
    setMaxAdditionalHeight((dateItemSize + ITEM_SPACING) * (weekCalendarList.length - 1));
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

  const calculateFinalHeight = (newHeight: number): number => {
    'worklet';
    const maxAllowedHeight = MIN_CALENDAR_SIZE + maxAdditionalHeight;
    const minAllowedHeight = MIN_CALENDAR_SIZE;

    return Math.max(minAllowedHeight, Math.min(newHeight, maxAllowedHeight));
  };

  const calendarGesture = Gesture.Pan()
    .onUpdate(event => {
      const heightDelta = event.translationY;
      const newHeight = startHeight + heightDelta;
      const finalHeight = calculateFinalHeight(newHeight);

      calendarHeight.value = finalHeight;

      const CLOSE_THRESHOLD = 100;
      const OPEN_THRESHOLD = 100;

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

  return (
    <>
      <GestureDetector gesture={calendarGesture}>
        <S.Calendar>
          <CalendarHeader currentDate={currentDate} setCurrentDate={setCurrentDate}></CalendarHeader>
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
    </>
  );
};
