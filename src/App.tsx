import styled from '@emotion/native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { Text } from 'react-native';
import { useInitializeMsw } from '~hooks/useInitializeMsw';
import { BottomTabNavigator } from '~navigation/BottomTabNavigator';
import { AppProviders } from '~providers/AppProviders';
import { lightTheme } from '~styles/theme';
import StoryBookUI from '../.storybook';
import Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: lightTheme.colors.lighten_3,
  },
};

const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#783D16' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontFamily: 'SUIT-Bold',
        fontSize: 13,
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: 'red' }}
      text1Style={{
        fontFamily: 'SUIT-Bold',
        fontSize: 13,
        color: 'red',
      }}
      text2Style={{
        fontFamily: 'SUIT-Bold',
        fontSize: 11,
      }}
    />
  ),
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
  // tomatoToast: ({ text1, props }) => (
  //   <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
  //     <Text>{text1}</Text>
  //     <Text>{props.uuid}</Text>
  //   </View>
  // ),
};

const MainApp = () => (
  <AppProviders>
    <NavigationContainer theme={navTheme}>
      <BottomTabNavigator />
      <Toast config={toastConfig} />
    </NavigationContainer>
  </AppProviders>
);

export const App = () => {
  const { isMswEnabled } = useInitializeMsw();
  const [storybookEnabled, setStorybookEnabled] = useState(false);

  if (__DEV__ && !isMswEnabled) {
    return <Text>Loading MSW...</Text>;
  }

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
