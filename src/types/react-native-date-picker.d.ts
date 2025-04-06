declare module 'react-native-date-picker' {
  import { ComponentType } from 'react';
  import { ViewProps } from 'react-native';

  export interface DatePickerProps extends ViewProps {
    date?: Date;
    mode?: 'date' | 'time' | 'datetime';
    minimumDate?: Date;
    maximumDate?: Date;
    theme?: 'light' | 'dark' | 'auto';
    locale?: string;
    is24hourSource?: 'locale' | 'device';
    onDateChange?: (date: Date) => void;
    androidVariant?: 'iosClone' | 'nativeAndroid';
    modal?: boolean;
    open?: boolean;
    onConfirm?: (date: Date) => void;
    onCancel?: () => void;
    confirmText?: string;
    cancelText?: string;
    title?: string;
    minuteInterval?: 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30;
    timeZoneOffsetInMinutes?: number;
    fadeToColor?: string;
    textColor?: string;
    dividerHeight?: number;
    pickerStyles?: object;
    setDate?: (date: Date) => void;
    setMinimumDate?: (date: Date) => void;
    setMaximumDate?: (date: Date) => void;
  }

  const DatePicker: ComponentType<DatePickerProps>;
  export default DatePicker;
} 