import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabBarParamList } from '~navigation/BottomTabNavigator';
import * as S from './styles';
import { ScrollView } from 'react-native';
// import { DogProfile } from './FamilyInfo/dogprofile';
import { DogProfile } from '~screens/FamilyDang/FamilyInfo/dogprofile';
import { FamilyList } from './FamilyInfo/familylist';
import { InviteSection } from './FamilyInfo/invitesection';
import { StatSection } from './FamilyInfo/statecontainer';
// import { DogProfile } from '~components/Profile/DogProfile';

type Props = BottomTabScreenProps<TabBarParamList, 'FamilyDang'>;
export const FamilyDangScreen = ({}: Props) => {
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
