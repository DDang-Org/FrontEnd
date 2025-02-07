import React from 'react';
// import { TextBold, TextRegular } from '~components/Common/Text';
import * as S from '../styles';
import { ClickFamily } from '../../FamilyInfo/clickfamily';

export const FamilyCaptain = () => {
  return (
    <S.FamilySetting>
      <S.StyledView>
        <ClickFamily />
      </S.StyledView>
    </S.FamilySetting>
  );
};
