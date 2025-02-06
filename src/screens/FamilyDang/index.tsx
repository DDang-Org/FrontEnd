import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabBarParamList } from '~navigation/BottomTabNavigator';
import * as S from './styles';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import * as Avatars from '~assets/avatars'; // 아바타 SVG 파일들
import { Icon } from '~components/Common/Icons';
import { StatContainer } from '~components/Common/StatContainer';
import { Separator } from '~components/Common/Seperator';
import { DogProfile } from '~components/Profile/DogProfile';

type Props = BottomTabScreenProps<TabBarParamList, 'FamilyDang'>;

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

export const FamilyDangScreen = ({}: Props) => {
  const [members] = useState(familyMembers);

  return (
    <S.SafeContainer>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}>
        {/* 헤더 */}
        <S.HeaderArea>
          <S.HeaderTitle fontSize={17}>패밀리댕</S.HeaderTitle>
          <S.GearWrapper>
            <Icon.Gear />
          </S.GearWrapper>
        </S.HeaderArea>

        {/* 강아지 프로필 */}
        <DogProfile dogId={1} />

        {/* 가족 구성원 리스트 */}
        <S.GapBox paddingVertical={5} paddingHorizontal={15}>
          {members.map((item, index) => (
            <S.ProfileWrapper key={item.id} isLast={index === members.length - 1}>
              {/* 프로필 이미지 */}
              <S.ProfileImage>
                <item.profileImg width={64} height={64} /> {/* SVG 렌더링 */}
              </S.ProfileImage>
              {/* 가족 정보 */}
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

        {/* 초대 섹션 */}
        <S.GapBox paddingVertical={15} paddingHorizontal={15}>
          <S.InviteSection>
            <S.InviteComment fontSize={17}>밤톨이와 함께할 동반자를 초대하세요!</S.InviteComment>
            <TouchableOpacity>
              <S.InviteButton text="초대" onPress={() => console.log('Invite')}>
                <S.ButtonText fontSize={14}>초대</S.ButtonText>
              </S.InviteButton>
            </TouchableOpacity>
          </S.InviteSection>
        </S.GapBox>

        {/* 통계 섹션 */}
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
      </ScrollView>
    </S.SafeContainer>
  );
};
