import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { MultilineInput, MultilineInputProps } from './index';

const meta = {
  title: 'MultilineInput',
  component: MultilineInput,
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

const MultilineInputWithState = (args: MultilineInputProps) => {
  const [value, setValue] = useState(args.value || '');
  return <MultilineInput {...args} value={value} onChangeText={setValue} />;
};

export const Basic: Story = {
  render: args => <MultilineInputWithState {...args} />,
  args: { maxLines: 3 },
};

export const WithPlaceholder: Story = {
  render: args => <MultilineInputWithState {...args} />,
  args: { placeholder: 'Enter multiline text here...', maxLines: 3 },
};

export const WithInitialValue: Story = {
  render: args => <MultilineInputWithState {...args} />,
  args: { value: 'Initial\nmultiline\nvalue', maxLines: 3 },
};
