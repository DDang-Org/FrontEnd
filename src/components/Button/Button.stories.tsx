import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { MyButton } from './Button';
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '../../styles/theme';

const meta = {
  title: 'MyButton',
  component: MyButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    Story => (
      <ThemeProvider theme={lightTheme}>
        <View style={{ padding: 16, alignItems: 'flex-start' }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const AnotherExample: Story = {
  args: {
    text: 'Another examples',
  },
};
