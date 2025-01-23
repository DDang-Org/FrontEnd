import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import WalkHeader from '~components/Walk/Header';
import MapView from '~components/Walk/MapView';
import WalkMessage from '~components/Walk/WalkMessage';
import { SafeAreaView, View } from 'react-native';

export const formatDuration = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return `${hours}시간 ${minutes}분`;
};

export const formatDistance = (meters: number) => {
  return (meters / 1000).toFixed(1);
};

export const WalkScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <WalkHeader />
      <View style={{ flex: 1 }}>
        <MapView />
        <WalkMessage />
      </View>
    </SafeAreaView>
  );
};
