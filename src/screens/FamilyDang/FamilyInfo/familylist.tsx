import React from 'react';
import * as S from '../styles';
// import * as Avatars from '~assets/avatars';
import { Separator } from '~components/Common/Seperator';
import { useFamilyInfo } from '~apis/family/useFamilyInfo';

// const familyMembers = [
//   {
//     memberId: '1',
//     memberName: '원돌이',
//     memberGender: 'FEMALE',
//     familyRole: '엄마',
//     memberBirthDate: 24,
//     memberWalkCount: 10,
//     profileImg: Avatars.Avatar1,
//   },
//   {
//     memberId: '2',
//     memberName: '투돌이',
//     memberGender: 'MALE',
//     familyRole: '아빠',
//     memberBirthDate: 20,
//     memberWalkCount: 5,
//     profileImg: Avatars.Avatar2,
//   },
//   {
//     memberId: '3',
//     memberName: '삼삼이',
//     memberGender: 'FEMALE',
//     familyRole: '언니(누나)',
//     memberBirthDate: 40,
//     memberWalkCount: 7,
//     profileImg: Avatars.Avatar3,
//   },
// ];

export const FamilyList = () => {
  // useFamilyInfo를 통해 API에서 데이터를 가져옴
  const familyMembers = useFamilyInfo();

  return (
    <S.GapBox paddingVertical={5} paddingHorizontal={15}>
      {familyMembers.map((item, index) => (
        <S.ProfileWrapper key={item.memberId} isLast={index === familyMembers.length - 1}>
          {/* Profile Image는 보류 */}
          <S.FamilyInfoArea>
            <S.LineWrapper>
              <S.MemberName fontSize={20}>{item.memberName}</S.MemberName>
            </S.LineWrapper>
            <S.LineWrapper>
              <S.MemberDetails fontSize={13}>
                {item.memberGender === 'MALE' ? '남자' : '여자'} 
                <Separator $height={8} /> 
                {item.familyRole}
                <Separator $height={8} /> 
                {item.memberBirthDate}세
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
// export const FamilyList = () => {
//   const familyMembers = useFamilyInfo();
//   return (
//     <S.GapBox paddingVertical={5} paddingHorizontal={15}>
//       {familyMembers.map((item, index) => (
//         <S.ProfileWrapper key={item.memberId} isLast={index === familyMembers.length - 1}>
//           <S.ProfileImage>
//             <item.profileImg width={64} height={64} />
//           </S.ProfileImage>
//           <S.FamilyInfoArea>
//             <S.LineWrapper>
//               <S.MemberName fontSize={20}>{item.memberName}</S.MemberName>
//             </S.LineWrapper>
//             <S.LineWrapper>
//               <S.MemberDetails fontSize={13}>
//                 {item.memberGender === 'MALE' ? '남자' : '여자'} <Separator $height={8} /> {item.familyRole}
//                 <Separator $height={8} /> {item.memberBirthDate}세
//               </S.MemberDetails>
//             </S.LineWrapper>
//             <S.LineWrapper>
//               <S.LabelText fontSize={14}>산책 횟수 </S.LabelText>
//               <S.BrownValueText fontSize={14}>{item.memberWalkCount}</S.BrownValueText>
//               <S.LabelText fontSize={14}>회</S.LabelText>
//             </S.LineWrapper>
//           </S.FamilyInfoArea>
//         </S.ProfileWrapper>
//       ))}
//     </S.GapBox>
//   );
// };
