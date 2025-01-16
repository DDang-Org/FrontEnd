import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { DescriptionWithTimeStamp } from '~components/Common/DescriptionWithTimeStamp';

const meta = {
  title: 'DescriptionWithTimeStamp',
  component: DescriptionWithTimeStamp,
  argTypes: {},
  args: {
    description: 'This is a description',
    time: '10:30 AM',
  },
  decorators: [
    Story => (
      <View>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof DescriptionWithTimeStamp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ShortText: Story = {
  args: {
    description: 'Short text',
    time: '10:00 AM',
  },
};

export const LongText: Story = {
  args: {
    description:
      'This is a much longer description to test how the component handles text wrapping and layout adjustments for extended content.',
    time: '11:45 AM',
  },
};
