import React from 'react';
import { Text } from 'react-native';
import { Header } from '~components/Common/Header';
import { Icon } from '~components/Common/Icons';
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '~navigation/RootNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const FamilyDDangHeaderComponent = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Header
      center={<Text>패밀리댕</Text>}
      right={<Icon.Gear />}
      backgroundColorType="default"
      onRightPress={() => {
        console.log('Gear icon clicked'); // 클릭 이벤트 확인
        navigation.navigate('FamilyDDang', { screen: 'FamilySetting' });
      }}
    />
  );
};

export default FamilyDDangHeaderComponent;
