import React, { useState } from 'react';
import * as S from '../styles';
import { TextBold } from '~components/Common/Text';
import { RadioButton } from './radionbutton';

type ClickFamilyProps = {
  onSelect: (isSelected: boolean) => void;
};

export const ClickFamily = ({ onSelect }: ClickFamilyProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    const newState = !isSelected;
    setIsSelected(newState);
    onSelect(newState);
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
