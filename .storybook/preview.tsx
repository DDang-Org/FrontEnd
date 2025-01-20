import { ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { lightTheme } from '../src/styles/theme';

const preview: Preview = {
  decorators: Story => (
    <ThemeProvider theme={lightTheme}>
      <View
        style={{ flex: 1, paddingVertical: 32, paddingHorizontal: 20, backgroundColor: lightTheme.colors.lighten_3 }}
      >
        <Story />
      </View>
    </ThemeProvider>
  ),

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
