// import React, { useState } from 'react';
import * as S from '../styles'; // 위에서 정의한 스타일 임포트

export const RadioButton = ({ isSelected, onPress }: { isSelected: boolean; onPress: () => void }) => {
  return (
    <S.RadioButtonWrapper onPress={onPress}>
      {isSelected && <S.RadioButtonInner />} {/* 선택된 경우 내부 원 표시 */}
    </S.RadioButtonWrapper>
  );
};
