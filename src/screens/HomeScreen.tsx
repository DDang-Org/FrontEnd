import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WalkScreen from './WalkScreen';

type HomeStackProps = {
  Main: undefined;
  Walk: undefined;
};

const Stack = createNativeStackNavigator<HomeStackProps>();

type Props = NativeStackScreenProps<HomeStackProps, 'Main'>;

function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button title="산책하기" onPress={() => navigation.navigate('Walk')} />
    </SafeAreaView>
  );
}

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Walk" component={WalkScreen} />
    </Stack.Navigator>
  );
}
