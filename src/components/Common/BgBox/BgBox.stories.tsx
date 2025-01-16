import type { Meta, StoryObj } from '@storybook/react';
import { Text, View } from 'react-native';
import { BgBox } from '~components/Common/BgBox';

const meta = {
  title: 'BgBox',
  component: BgBox,
  argTypes: {
    paddingHorizontal: {
      control: { type: 'number' },
      description: 'Horizontal padding for the container',
    },
    paddingVertical: {
      control: { type: 'number' },
      description: 'Vertical padding for the container',
    },
  },
  args: {},
  decorators: [
    Story => (
      <View>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof BgBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <Text>Basic BgBox Content</Text>,
  },
};

export const CustomPadding: Story = {
  args: {
    paddingHorizontal: 32,
    paddingVertical: 24,
    children: <Text>Custom Padding Content</Text>,
  },
};
