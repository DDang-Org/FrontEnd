import React from 'react';
import * as S from '../styles';
import * as Avatars from '~assets/avatars';
import { Separator } from '~components/Common/Seperator';

const familyMembers = [
  {
    id: '1',
    name: '원돌이',
    gender: 'FEMALE',
    familyRole: '엄마',
    birthday: 24,
    totalWalkCount: 10,
    profileImg: Avatars.Avatar1,
  },
  {
    id: '2',
    name: '투돌이',
    gender: 'MALE',
    familyRole: '아빠',
    birthday: 20,
    totalWalkCount: 5,
    profileImg: Avatars.Avatar2,
  },
  {
    id: '3',
    name: '삼삼이',
    gender: 'FEMALE',
    familyRole: '언니(누나)',
    birthday: 40,
    totalWalkCount: 7,
    profileImg: Avatars.Avatar3,
  },
];

export const FamilyList = () => {
  return (
    <S.GapBox paddingVertical={5} paddingHorizontal={15}>
      {familyMembers.map((item, index) => (
        <S.ProfileWrapper key={item.id} isLast={index === familyMembers.length - 1}>
          <S.ProfileImage>
            <item.profileImg width={64} height={64} />
          </S.ProfileImage>
          <S.FamilyInfoArea>
            <S.LineWrapper>
              <S.MemberName fontSize={20}>{item.name}</S.MemberName>
            </S.LineWrapper>
            <S.LineWrapper>
              <S.MemberDetails fontSize={13}>
                {item.gender === 'MALE' ? '남자' : '여자'} <Separator $height={8} /> {item.familyRole}
                <Separator $height={8} /> {item.birthday}세
              </S.MemberDetails>
            </S.LineWrapper>
            <S.LineWrapper>
              <S.LabelText fontSize={14}>산책 횟수 </S.LabelText>
              <S.BrownValueText fontSize={14}>{item.totalWalkCount}</S.BrownValueText>
              <S.LabelText fontSize={14}>회</S.LabelText>
            </S.LineWrapper>
          </S.FamilyInfoArea>
        </S.ProfileWrapper>
      ))}
    </S.GapBox>
  );
};
