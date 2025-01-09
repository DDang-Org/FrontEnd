import styled, { css } from '@emotion/native';
import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { Text } from 'react-native';
import { useInitializeMsw } from '~hooks/useInitializeMsw';
import BottomTabNavigator from '~navigation/BottomTabNavigator';
import { lightTheme } from '~styles/theme';
import StoryBookUI from '../.storybook';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

const queryClient = new QueryClient();
export default function App() {
  const { isMswEnabled } = useInitializeMsw();
  const [storybookEnabled, setStorybookEnabled] = useState(false);
  const onPress = () => setStorybookEnabled(prev => !prev);

  if (__DEV__ && !isMswEnabled) {
    return <Text>Loading MSW...</Text>;
  }

  return (
    <>
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
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={lightTheme}>
            <NavigationContainer>
              <BottomTabNavigator />
            </NavigationContainer>
          </ThemeProvider>
        </QueryClientProvider>
      )}
    </>
  );
}
