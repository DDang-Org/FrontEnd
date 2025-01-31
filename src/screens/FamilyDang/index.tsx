import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabBarParamList } from '~navigation/BottomTabNavigator';
import * as S from './styles';
import { FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import * as Avatars from '~assets/avatars'; // 아바타 SVG 파일들
import { Icon } from '~components/Common/Icons';
import { StatContainer } from '~components/Common/StatContainer';
import { BgBox } from '~components/Common/BgBox';
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
  {
    id: '4',
    name: '사돌이',
    gender: 'MALE',
    familyRole: '오빠(형)',
    birthday: 12,
    totalWalkCount: 3,
    profileImg: Avatars.Avatar4,
  },
];

export const FamilyDangScreen = ({}: Props) => {
  const [members] = useState(familyMembers);
  // const handleInvitePress = () => {
  //   console.log('초대 화면으로 이동');
  // };

  const renderMember = ({ item, index }: { item: (typeof familyMembers)[0]; index: number }) => (
    <S.ProfileWrapper isLast={index === members.length - 1}>
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
          <S.LabelText fontSize={14}>산책 횟수</S.LabelText>
          <S.ValueText fontSize={14}>{item.totalWalkCount}</S.ValueText>
        </S.LineWrapper>
      </S.FamilyInfoArea>
    </S.ProfileWrapper>
  );

  return (
    <S.SafeContainer>
      <S.HeaderArea>
        <S.HeaderTitle fontSize={17}>패밀리댕</S.HeaderTitle>
        <S.GearWrapper>
          <Icon.Gear />
        </S.GearWrapper>
      </S.HeaderArea>

      <DogProfile dogId={1} />

      <BgBox paddingVertical={5} paddingHorizontal={15}>
        <FlatList data={members} keyExtractor={item => item.id} renderItem={renderMember} />
      </BgBox>

      <BgBox paddingVertical={15}>
        <S.InviteSection>
          <S.InviteComment fontSize={15}>밤톨이와 함께할 동반자를 초대하세요!</S.InviteComment>
          <TouchableOpacity>
            <S.InviteButton onPress={() => console.log('Invite')} text="초대" />
          </TouchableOpacity>
        </S.InviteSection>
      </BgBox>

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
    </S.SafeContainer>
  );
};
