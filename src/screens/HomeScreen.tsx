import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WalkScreen from './WalkScreen';
import styled from '@emotion/native';

const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

type HomeStackProps = {
  Main: undefined;
  Walk: undefined;
};

const Stack = createNativeStackNavigator<HomeStackProps>();

type Props = NativeStackScreenProps<HomeStackProps, 'Main'>;

function HomeScreen({ navigation }: Props) {
  return (
    <SafeContainer>
      <Text>HomeScreen</Text>
      <Button title="산책하기" onPress={() => navigation.navigate('Walk')} />
    </SafeContainer>
  );
}

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Walk" component={WalkScreen} options={{ headerBackButtonDisplayMode: 'minimal' }} />
    </Stack.Navigator>
  );
}
