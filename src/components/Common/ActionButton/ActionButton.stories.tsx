import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { ActionButton } from '~components/Common/ActionButton';

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

    disabled: { control: 'boolean' },
    text: { control: 'text' },
    onPress: { action: 'button pressed' },
  },
  args: {
    text: 'ActionButton',
    bgColor: 'default',
    type: 'capsule',
    disabled: false,
  },
  decorators: [
    Story => (
      <View>
        <Story />
      </View>
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
    text: '긴 텍스트를 테스트합니다. 긴 텍스트를 테스트합니다. 긴 텍스트를 테스트합니다. 긴 텍스트를 테스트합니다. 긴 텍스트를 테스트합니다. 긴 텍스트를 테스트합니다. 긴 텍스트를 테스트합니다.',
  },
};
