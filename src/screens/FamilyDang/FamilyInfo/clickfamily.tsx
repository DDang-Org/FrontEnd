import React, { useState } from 'react';
import * as S from '../styles';
import { TextBold } from '~components/Common/Text';
import { RadioButton } from './radionbutton'; // 라디오 버튼 컴포넌트 임포트

type ClickFamilyProps = {
  onSelect: (isSelected: boolean) => void; // 선택 상태를 부모로 전달하는 콜백
};

export const ClickFamily = ({ onSelect }: ClickFamilyProps) => {
  const [isSelected, setIsSelected] = useState(false); // 선택 상태 관리

  const handlePress = () => {
    const newState = !isSelected;
    setIsSelected(newState);
    onSelect(newState); // 새로운 선택 상태를 부모로 전달
  };

  return (
    <S.ClickFamily>
      <S.TextAtrea>
        <TextBold fontSize={17}>닉네임 1</TextBold>
        <RadioButton isSelected={isSelected} onPress={handlePress} />
      </S.TextAtrea>
    </S.ClickFamily>
  );
};
