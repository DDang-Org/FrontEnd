import React from 'react';
import * as S from './styles';

interface UnreadChatCountProps {
  unreadCount: number;
}

export const UnreadChatCount = ({ unreadCount }: UnreadChatCountProps) => {
  return (
    <S.UnreadChatCount>
      <S.UnreadCountText fontSize={11} color="gc_4">
        {unreadCount}
      </S.UnreadCountText>
    </S.UnreadChatCount>
  );
};
//      <UnreadChatCount unreadCount={unreadCount} />
