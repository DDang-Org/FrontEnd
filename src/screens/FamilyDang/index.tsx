import * as S from './styles';
import { ScrollView } from 'react-native';
import { DogProfile } from '~screens/FamilyDang/FamilyInfo/dogprofile';
import { FamilyList } from './FamilyInfo/familylist';
import { InviteSection } from './FamilyInfo/invitesection';
import { StatSection } from './FamilyInfo/statecontainer';

export const FamilyDangScreen = () => {
  return (
    <S.SafeContainer>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
        <DogProfile />
        <FamilyList />
        <InviteSection />
        <StatSection />
      </ScrollView>
    </S.SafeContainer>
  );
};
