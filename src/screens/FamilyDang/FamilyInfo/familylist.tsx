import React from 'react';
import * as S from '../styles';
import { Separator } from '~components/Common/Seperator';
import { useFamilyInfo } from '~apis/family/useFamilyInfo';
import { Profile } from '~components/Common/Profile';
import { getKoreanRole } from '~utils/getKoreanRoleWithName';
import { getAge } from '~utils/getAge';

export const FamilyList = () => {
  const familyMembers = useFamilyInfo();

  return (
    <S.GapBox paddingVertical={5} paddingHorizontal={15}>
      {familyMembers.map((item, index) => (
        <S.ProfileWrapper key={item.memberId} isLast={index === familyMembers.length - 1}>
          <Profile size={74} avatarNumber={item.memberProfileImg} />
          <S.FamilyInfoArea>
            <S.LineWrapper>
              <S.MemberName fontSize={20}>{item.memberName}</S.MemberName>
            </S.LineWrapper>
            <S.LineWrapper>
              <S.MemberDetails fontSize={13}>
                {item.memberGender === 'MALE' ? '남자' : '여자'}{'  '}
                <Separator $height={8} />{'  '}
                {/* {item.familyRole} */}
                {getKoreanRole({ dogGender: 'FEMALE', familyRole: item.familyRole })}{'  '}
                <Separator $height={8} />{'  '}
                {getAge(item.memberBirthDate)}세
              </S.MemberDetails>
            </S.LineWrapper>
            <S.LineWrapper>
              <S.LabelText fontSize={14}>산책 횟수 </S.LabelText>
              <S.BrownValueText fontSize={14}>{item.memberWalkCount}</S.BrownValueText>
              <S.LabelText fontSize={14}>회</S.LabelText>
            </S.LineWrapper>
          </S.FamilyInfoArea>
        </S.ProfileWrapper>
      ))}
    </S.GapBox>
  );
};

