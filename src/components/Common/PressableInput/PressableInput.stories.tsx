import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { PressableInput } from './index';

const meta = {
  title: 'PressableInput',
  component: PressableInput,
  argTypes: {
    value: { control: 'text' },
    onPress: { action: 'pressed' },
    placeholder: { control: 'text' },
  },
  args: {
    value: '',
    placeholder: 'Press me...',
  },
  decorators: [
    Story => (
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof PressableInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onPress: () => console.log('Press!!'),
  },
};

export const WithValue: Story = {
  args: {
    value: 'Pressable Input Value',
    onPress: () => console.log('Press!!'),
  },
};

export const WithLongPlaceholder: Story = {
  args: {
    onPress: () => console.log('Press!!'),
    placeholder: 'This is a long placeholder text for the pressable input',
  },
};
