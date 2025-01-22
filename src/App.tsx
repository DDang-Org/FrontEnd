import styled from '@emotion/native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { useInitializeMsw } from '~hooks/useInitializeMsw';
import { BottomTabNavigator } from '~navigation/BottomTabNavigator';
import { AppProviders } from '~providers/AppProviders';
import { lightTheme } from '~styles/theme';
import StoryBookUI from '../.storybook';
import Toast, { BaseToast, BaseToastProps, ErrorToast, ToastConfigParams } from 'react-native-toast-message';
import { FormErrorToast } from '~components/Common/FormErrorToast';
import { Animated } from 'react-native';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: lightTheme.colors.lighten_3,
  },
};

const toastConfig = {
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
  formError: ({ text1, props }: ToastConfigParams<{ position: { top: number; left: number } }>) => (
    <View
      style={{
        position: 'absolute',
        top: props?.position?.top || 0,
        left: props?.position?.left || 0,
        transform: [{ translateX: '-50%' }],
      }}
    >
      <FormErrorToast message={text1 || ''} />
    </View>
  ),
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
