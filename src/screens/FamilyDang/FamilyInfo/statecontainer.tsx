import React from 'react';
import * as S from '../styles';
import { StatContainer } from '~components/Common/StatContainer';

export const StatSection = () => {
  return (
    <S.StateBox>
      <StatContainer>
        <StatContainer.Item>
          <StatContainer.Value value="23회" />
          <StatContainer.Label label="누적 산책 횟수" />
        </StatContainer.Item>

        <StatContainer.Item>
          <StatContainer.Value value="32km" />
          <StatContainer.Label label="총 산책 거리" />
        </StatContainer.Item>

        <StatContainer.Item>
          <StatContainer.Value value="16회" />
          <StatContainer.Label label="강번따 횟수" />
        </StatContainer.Item>
      </StatContainer>
    </S.StateBox>
  );
};
