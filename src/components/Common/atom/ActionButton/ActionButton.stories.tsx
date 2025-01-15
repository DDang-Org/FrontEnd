import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '~styles/theme';
import { css } from '@emotion/native';
import { View } from 'react-native';
import { ActionButton } from '~components/Common/atom/ActionButton';

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
    text: 'ActionButton',
    bgColor: 'default',
    type: 'capsule',
    fontWeight: 'regular',
    disabled: false,
  },
  decorators: [
    Story => (
      <ThemeProvider theme={lightTheme}>
        <View
          style={css`
            padding: 50px 20px;
            flex: 1;
          `}
        >
          <Story />
        </View>
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
