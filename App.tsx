import styled, { css } from '@emotion/native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text } from 'react-native';
import StoryBookUI from './.storybook';
import BottomTabNavigator from './src/BottomTabNavigator';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from './src/styles/theme';

const StoryBookFloatingButton = styled.TouchableOpacity<{ visible: boolean }>`
  position: absolute;
  right: 30px;
  bottom: 30px;
  z-index: 1000;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: purple;
  align-items: center;
  justify-content: center;
  display: ${({ visible }) => (visible ? 'unset' : 'none')};
`;

export default function App() {
  const [storybookEnabled, setStorybookEnabled] = useState(false);
  const onPress = () => setStorybookEnabled(prev => !prev);
  return (
    <ThemeProvider theme={lightTheme}>
      {__DEV__ && (
        <StoryBookFloatingButton onPress={onPress} activeOpacity={0.8} visible={true}>
          <Text
            style={css`
              color: white;
              font-size: 24px;
            `}
          >
            S
          </Text>
        </StoryBookFloatingButton>
      )}

      {__DEV__ && storybookEnabled ? (
        <StoryBookUI />
      ) : (
        <>
          <NavigationContainer>
            <BottomTabNavigator />
          </NavigationContainer>
        </>
      )}
    </ThemeProvider>
  );
}
