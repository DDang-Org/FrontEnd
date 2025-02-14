import { Text } from 'react-native';
import { Header } from '~components/Common/Header';
import { Icon } from '~components/Common/Icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FamilyDdangParamList } from '~navigation/FamilyDDangNavigator';

type NavigationProp = NativeStackNavigationProp<FamilyDdangParamList>;

const FamilyDDangHeaderComponent = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Header
      center={<Text>패밀리댕</Text>}
      right={<Icon.Gear />}
      backgroundColorType="default"
      onRightPress={() => {
        console.log('Gear icon clicked');
        navigation.navigate('FamilySetting');
      }}
    />
  );
};

export default FamilyDDangHeaderComponent;
