import React, { useState } from 'react';
import * as S from '../styles';
import { TextBold } from '~components/Common/Text';
import { RadioButton } from './radionbutton'; // 라디오 버튼 컴포넌트 임포트

export const ClickFamily = () => {
  const [isSelected, setIsSelected] = useState(false); // 선택 상태 관리

  return (
    <S.ClickFamily>
      <S.TextAtrea>
        <TextBold fontSize={17}>닉네임 1</TextBold>
        <RadioButton
          isSelected={isSelected}
          onPress={() => setIsSelected(!isSelected)} // 클릭 시 선택 상태 토글
        />
      </S.TextAtrea>
    </S.ClickFamily>
  );
};
