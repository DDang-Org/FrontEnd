import styled from '@emotion/native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
// import { Text } from 'react-native';
// import { useInitializeMsw } from '~hooks/useInitializeMsw';
import { AppProviders } from '~providers/AppProviders';
import { lightTheme } from '~styles/theme';
import StoryBookUI from '../.storybook';
import { RootNavigator } from '~navigation/RootNavigator';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: lightTheme.colors.lighten_3,
  },
};

const MainApp = () => (
  <AppProviders>
    <NavigationContainer theme={navTheme}>
      <RootNavigator />
    </NavigationContainer>
  </AppProviders>
);

export const App = () => {
  // const { isMswEnabled } = useInitializeMsw();
  const [storybookEnabled, setStorybookEnabled] = useState(false);

  // if (__DEV__ && !isMswEnabled) {
  //   return <Text>Loading MSW...</Text>;
  // }

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
