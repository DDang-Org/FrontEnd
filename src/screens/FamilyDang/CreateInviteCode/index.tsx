import React from 'react';
import { TextBold, TextRegular } from '~components/Common/Text';
import * as S from './styles';
import { Timer } from '~components/FamilyDang/Timer';
import { Icon } from '~components/Common/Icons';
import { SafeAreaView } from 'react-native';

interface CreateInviteCodeProps {}

export const CreateInviteCode = ({}: CreateInviteCodeProps) => {
  return (
    <SafeAreaView>
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
        <S.InviteGuideArea>
          <S.InvitationGuideBackground>
            <S.Bar />
            <S.DescriptionTiTle fontSize={24}>가족 초대 방법</S.DescriptionTiTle>
            <S.DescriptionSubtitle fontSize={17} color="default">
              가족 코드 복사
            </S.DescriptionSubtitle>
            <Icon.FamilyInvitationGuide />
            <S.Description>
              <TextRegular fontSize={14}>
                <TextBold fontSize={14}>[패밀리댕]</TextBold>에서 가족 초대 페이지로 이동해
              </TextRegular>
              <TextRegular fontSize={14}>초대 코드를 복사하고, 가족에게 코드를 공유하세요.</TextRegular>
            </S.Description>
          </S.InvitationGuideBackground>
          <S.InvitationGuideBackground>
            <S.Bar />
            <S.DescriptionTiTle fontSize={24}>패밀리댕 참가 방법</S.DescriptionTiTle>
            <S.DescriptionSubtitle fontSize={17} color="default">
              1. 가족 코드 입력
            </S.DescriptionSubtitle>
            <S.GrayBackground>
              <Icon.FamilyJoinGuide />
              <Icon.FamilyJoinGuide2 />
            </S.GrayBackground>
            <S.Description>
              <TextRegular fontSize={14}>
                반려견 프로필 선택해서 <TextBold fontSize={14}>[가족 반려견 등록하기]</TextBold>를
              </TextRegular>
              <TextRegular fontSize={14}>선택하고 공유받은 코드를 입력하세요</TextRegular>
            </S.Description>
            <S.Gap />
            <S.DescriptionSubtitle fontSize={17} color="default">
              2. 가족 반려견 등록 완료
            </S.DescriptionSubtitle>
            <S.GrayBackground>
              <Icon.FamilyJoinGuide3 />
            </S.GrayBackground>
            <S.Description>
              <TextRegular fontSize={14}>반려견 프로필 정보를 확인하고 반려견</TextRegular>
              <TextRegular fontSize={14}>등록을 완료하세요</TextRegular>
            </S.Description>
          </S.InvitationGuideBackground>
        </S.InviteGuideArea>
      </S.StyledScrollView>
    </SafeAreaView>
  );
};
