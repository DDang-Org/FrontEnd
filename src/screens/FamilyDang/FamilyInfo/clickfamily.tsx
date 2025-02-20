// import React, { useState } from 'react';
import * as S from '../styles';
import { TextBold } from '~components/Common/Text';
import { RadioButton } from './radionbutton';

type ClickFamilyProps = {
  memberId: number;
  memberName: string;
  isSelected: boolean;
  onSelect: (isSelected: number) => void;
};

export const ClickFamily = ({ onSelect, memberId, memberName, isSelected }: ClickFamilyProps) => {
  const handlePress = () => {
    onSelect(memberId);
  };

  return (
    <S.ClickFamily>
      <S.TextAtrea>
        <TextBold fontSize={17}>{memberName}</TextBold>
        <RadioButton isSelected={isSelected} onPress={handlePress} />
      </S.TextAtrea>
    </S.ClickFamily>
  );
};
