import React from 'react';
import * as S from '../styles';
import { Icon } from '~components/Common/Icons';

export const Header = () => {
  return (
    <S.HeaderArea>
      <S.HeaderTitle fontSize={17}>패밀리댕</S.HeaderTitle>
      <S.GearWrapper>
        <Icon.Gear />
      </S.GearWrapper>
    </S.HeaderArea>
  );
};
