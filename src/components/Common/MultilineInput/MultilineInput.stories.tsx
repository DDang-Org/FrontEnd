import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { MultilineInput } from './index';

const meta = {
  title: 'MultilineInput',
  component: MultilineInput,
  argTypes: {
    value: { control: 'text' },
    onChangeText: { action: 'text changed' },
    placeholder: { control: 'text' },
    maxLines: { control: { type: 'number', min: 1, max: 10, step: 1 } },
  },
  args: {
    value: '',
    placeholder: 'Enter multiline text...',
    maxLines: 2,
  },
  decorators: [
    Story => (
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof MultilineInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithInitialValue: Story = {
  args: {
    value: 'Initial\nMultiline\nText',
  },
};

export const CustomMaxLines: Story = {
  args: {
    maxLines: 5,
    placeholder: 'You can enter up to 5 lines here',
  },
};
