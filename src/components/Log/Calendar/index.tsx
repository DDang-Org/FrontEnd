import { Dimensions, LayoutChangeEvent } from 'react-native';
import * as S from './styles';
import React, { useCallback, useEffect, useState } from 'react';
import { useCalendar } from '~hooks/useCalendar';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { CalendarHeader } from '~components/Log/CalendarHeader';
import { DateItem } from '~components/Log/DateItem';

interface CalendarProps {
  setDate: (date: Date) => void;
  walkDates: string[] | undefined;
}

const deviceWidth = Dimensions.get('window').width;
const ITEM_SPACING = 8;
const SIDE_PADDING = 24;

export const Calendar = React.memo(({ setDate, walkDates }: CalendarProps) => {
  const { activeIndex, weekDays, weekCalendarList, currentDate, setCurrentDate } = useCalendar(new Date());
  const dateItemSize = (deviceWidth - (ITEM_SPACING * (weekDays.length - 1) + SIDE_PADDING * 2)) / weekDays.length;
  const [isOpen, setIsOpen] = useState(false);
  const [maxAdditionalHeight, setMaxAdditionalHeight] = useState(
    (dateItemSize + ITEM_SPACING) * (weekCalendarList.length - 1),
  );
  const MIN_CALENDAR_SIZE = dateItemSize + 52;
  const [startHeight, setStartHeight] = useState(MIN_CALENDAR_SIZE);

  const calendarHeight = useSharedValue(MIN_CALENDAR_SIZE);
  const isOpenShared = useSharedValue(isOpen);

  // const { walkDates } = useWalkLog(dateToString(currentDate, '-'));

  useEffect(() => {
    setDate(currentDate);
    setMaxAdditionalHeight((dateItemSize + ITEM_SPACING) * (weekCalendarList.length - 1));

    if (isOpen) {
      calendarHeight.value = MIN_CALENDAR_SIZE + maxAdditionalHeight;
    }
  }, [
    currentDate,
    dateItemSize,
    isOpen,
    MIN_CALENDAR_SIZE,
    maxAdditionalHeight,
    setDate,
    weekCalendarList,
    calendarHeight,
  ]);

  const hasWalkRecord = (walkDates: string[], date: number) => {
    return walkDates.some(walkDate => {
      const [y, m, d] = walkDate.split('-').map(Number);
      if (y != currentDate.getFullYear()) return false;
      if (m != currentDate.getMonth() + 1) return false;
      if (d != date) return false;
      return true;
    });
  };

  const handleDatePress = useCallback(
    (date: number) => {
      setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth(), date));
    },
    [setCurrentDate],
  );

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
                      <DateItem
                        key={dateIdx}
                        date={date}
                        disabled={isDisabled}
                        isActive={isActive}
                        hasRecord={hasWalkRecord(walkDates ?? [], date)}
                        size={dateItemSize}
                        onPress={handleDatePress}
                      />
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
});
