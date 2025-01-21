import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import FormInput from './index';

const meta = {
  title: 'FormInput',
  component: FormInput,
  argTypes: {
    value: { control: 'text' },
    onChangeText: { action: 'text changed' },
    placeholder: { control: 'text' },
    multiline: { control: 'boolean' },
    maxLines: { control: { type: 'number', min: 1, max: 10, step: 1 } },
    onPress: { action: 'pressed' },
  },
  args: {
    value: '',
    placeholder: 'Enter text...',
    multiline: false,
    maxLines: 1,
  },
  decorators: [
    Story => (
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof FormInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Multiline: Story = {
  args: {
    multiline: true,
    maxLines: 3,
    placeholder: 'Enter multiline text...',
  },
};

export const Pressable: Story = {
  args: {
    onPress: () => console.log('Pressed'),
    placeholder: 'Press me...',
  },
};
