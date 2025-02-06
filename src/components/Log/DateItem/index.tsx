import React from 'react';
import * as S from './styles';
import { TextBold } from '~components/Common/Text';

interface DateItemProps {
  date: number;
  isActive: boolean;
  disabled: boolean;
  hasRecord: boolean;
  size: number;
  onPress: (date: number) => void;
}

export const DateItem = React.memo(({ date, isActive, disabled, hasRecord, size, onPress }: DateItemProps) => {
  let content;

  if (isActive) {
    content = (
      <TextBold fontSize={15} color="gc_4">
        {date}
      </TextBold>
    );
  } else if (hasRecord) {
    content = (
      <TextBold fontSize={15} color="sub">
        {date}
      </TextBold>
    );
  } else {
    content = (
      <TextBold fontSize={15} color={disabled ? 'font_4' : 'font_1'}>
        {date}
      </TextBold>
    );
  }

  return (
    <S.DateItem isActive={isActive} size={size} onPress={() => onPress(date)}>
      {content}
    </S.DateItem>
  );
});
