import React from 'react';
import * as S from '../styles';
import { TextBold, TextMedium } from '~components/Common/Text';

type FamilyCommentProps = {
  title: string; // 첫 번째 텍스트
  description: string; // 두 번째 텍스트
};

export const FamilyComment = ({ title, description }: FamilyCommentProps) => {
  return (
    <S.FamilyComment>
      <S.FamilyCommentTextAtrea>
        <TextBold fontSize={17}>{title}</TextBold> {/* 동적으로 제목 설정 */}
        <TextMedium fontSize={15}>{description}</TextMedium> {/* 동적으로 설명 설정 */}
      </S.FamilyCommentTextAtrea>
    </S.FamilyComment>
  );
};
