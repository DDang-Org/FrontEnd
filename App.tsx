import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import StoryBookUI from './.storybook';

export default function App() {
  const [storybookEnabled, setStorybookEnabled] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setStorybookEnabled(prev => !prev)}
        activeOpacity={0.8}
        style={{
          position: 'absolute',
          right: 30,
          bottom: 30,
          zIndex: 1000,
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundColor: 'purple',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
          }}>
          S
        </Text>
      </TouchableOpacity>
      {storybookEnabled ? (
        <StoryBookUI />
      ) : (
        <SafeAreaView>
          <Text>App</Text>
        </SafeAreaView>
      )}
    </>
  );
}
