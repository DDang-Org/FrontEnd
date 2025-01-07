import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ActionButton from './ActionButton';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '../../styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from '@emotion/native';

const meta = {
  title: 'ActionButton',
  component: ActionButton,
  argTypes: {
    bgColor: {
      control: {
        type: 'select',
      },
      options: ['default', 'lighten_2', 'lighten_3', 'gc_1', 'font_1'],
    },
    type: {
      control: {
        type: 'select',
      },
      options: ['roundedRect', 'semiRoundedRect', 'capsule'],
    },
    fontWeight: {
      control: {
        type: 'select',
      },
      options: ['light', 'regular', 'medium', 'bold'],
    },
    disabled: { control: 'boolean' },
    text: { control: 'text' },
    onPress: { action: 'button pressed' },
  },
  args: {
    text: '클릭하세요',
    bgColor: 'default',
    type: 'capsule',
    fontWeight: 'regular',
    disabled: false,
  },
  decorators: [
    Story => (
      <ThemeProvider theme={lightTheme}>
        <SafeAreaView
          style={css`
            flex: 1;
            justify-content: center;
            padding: 0 20px;
          `}
        >
          <Story />
        </SafeAreaView>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ActionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: '비활성화',
  },
};

export const LongText: Story = {
  args: {
    bgColor: 'default',
    type: 'semiRoundedRect',
    fontWeight: 'medium',
    text: '긴 텍스트를 테스트합니다. 긴 텍스트를 테스트합니다. 긴 텍스트를 테스트합니다. 긴 텍스트를 테스트합니다. 긴 텍스트를 테스트합니다. 긴 텍스트를 테스트합니다. 긴 텍스트를 테스트합니다.',
  },
};
