import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import WalkHeader from '~components/Walk/Header';
import MapView from '~components/Walk/MapView';
import WalkMessage from '~components/Walk/WalkMessage';
import { SafeAreaView, View } from 'react-native';

export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(
    2,
    '0',
  )}`;
};

export const formatDistance = (meters: number): string => {
  if (meters >= 1000) {
    return `${(meters / 1000).toFixed(2)}km`;
  }
  return `${Math.round(meters)}m`;
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
