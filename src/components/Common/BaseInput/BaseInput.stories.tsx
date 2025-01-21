import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { BaseInput } from './index';

const meta = {
  title: 'BaseInput',
  component: BaseInput,
  argTypes: {
    value: { control: 'text' },
    onChangeText: { action: 'text changed' },
    placeholder: { control: 'text' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
  args: {
    value: '',
    onChangeText: () => {},
    placeholder: 'Enter text...',
  },
  decorators: [
    Story => (
      <View>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof BaseInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithValue: Story = {
  args: {
    value: 'Hello, World!',
  },
};

export const LongPlaceholder: Story = {
  args: {
    placeholder: '이것은 매우 긴 플레이스홀더 텍스트입니다. 이 텍스트가 어떻게 처리되는지 확인하기 위한 것입니다.',
  },
};
