import React from 'react';
import { TextBold, TextRegular } from '~components/Common/Text';
import * as S from './styles';
import { Timer } from '~components/FamilyDang/Timer';

interface CreateInviteCodeProps {}

export const CreateInviteCode = ({}: CreateInviteCodeProps) => {
  return (
    <S.CreateInviteCode>
      <S.StyledScrollView>
        <S.Title fontSize={24}>가족과 함께해요</S.Title>
        <S.TextArea>
          <TextRegular fontSize={17}>가족으로 등록된 회원의 앱에서도 동일한</TextRegular>
          <TextRegular fontSize={17}>반려견 프로필을 공유하여</TextRegular>
          <TextRegular fontSize={17}>산책을 효율적으로</TextRegular>
          <TextRegular fontSize={17}>관리할 수 있어요.</TextRegular>
          <S.DogImage />
        </S.TextArea>
        <S.CopyInviteCode onPress={() => console.log('초대 코드 복사')}>
          <TextBold fontSize={15} color="sub">
            초대 코드 복사
          </TextBold>
          <TextBold fontSize={15}>GaMJATaNG01</TextBold>
        </S.CopyInviteCode>
        <S.TimerWrapper>
          <TextBold fontSize={15}>유효 시간</TextBold>
          <Timer time={300} onTimeEnd={() => console.log('타이머 종료')} />
        </S.TimerWrapper>
        <S.Separator />
      </S.StyledScrollView>
    </S.CreateInviteCode>
  );
};
