import styled from '@emotion/native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { BottomTabNavigator } from '~navigation/BottomTabNavigator';
import { AppProviders } from '~providers/AppProviders';
import { lightTheme } from '~styles/theme';
import StoryBookUI from '../.storybook';
import { useWebSocket } from '~hooks/useWebSocket';
import { WebSocketProvider } from '~providers/WebSocketProvider';

import 'react-native-url-polyfill/auto';
import 'fast-text-encoding';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: lightTheme.colors.lighten_3,
  },
};

const MainApp = () => {
  const { client, sendMessage } = useWebSocket();

  return (
    <WebSocketProvider client={client} sendMessage={sendMessage}>
      <AppProviders>
        <NavigationContainer theme={navTheme}>
          <BottomTabNavigator />
        </NavigationContainer>
      </AppProviders>
    </WebSocketProvider>
  );
};

export const App = () => {
  const [storybookEnabled, setStorybookEnabled] = useState(false);
  const toggleStorybook = () => setStorybookEnabled(prev => !prev);

  return (
    <>
      {__DEV__ && (
        <StoryBookFloatingButton onPress={toggleStorybook} activeOpacity={0.8}>
          <StoryBookButtonText>S</StoryBookButtonText>
        </StoryBookFloatingButton>
      )}
      {__DEV__ && storybookEnabled ? <StoryBookUI /> : <MainApp />}
    </>
  );
};

const StoryBookFloatingButton = styled.TouchableOpacity`
  position: absolute;
  right: 30px;
  bottom: 30px;
  z-index: 1000;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: purple;
  align-items: center;
  justify-content: center;
`;

const StoryBookButtonText = styled.Text`
  color: white;
  font-size: 24px;
`;
