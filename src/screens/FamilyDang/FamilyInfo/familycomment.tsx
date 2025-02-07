import React from 'react';
import * as S from '../styles';
import { TextBold, TextMedium } from '~components/Common/Text';

type FamilyCommentProps = {
  title: string;
  description: string;
};

export const FamilyComment = ({ title, description }: FamilyCommentProps) => {
  return (
    <S.FamilyComment>
      <S.FamilyCommentTextAtrea>
        <TextBold fontSize={17}>{title}</TextBold>
        <TextMedium fontSize={15}>{description}</TextMedium>
      </S.FamilyCommentTextAtrea>
    </S.FamilyComment>
  );
};
