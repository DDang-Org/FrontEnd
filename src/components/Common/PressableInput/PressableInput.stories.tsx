import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { PressableInput, PressableInputProps } from './index';

const meta = {
  title: 'PressableInput',
  component: PressableInput,
  decorators: [
    Story => (
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof PressableInput>;

export default meta;

type Story = StoryObj<typeof PressableInput>;

const PressableInputWithState = (args: PressableInputProps) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <PressableInput
      {...args}
      value={value}
      onChangeText={setValue}
      onPress={() => {
        setValue('Pressed!');
        args.onPress();
      }}
    />
  );
};

export const Basic: Story = {
  render: args => <PressableInputWithState {...args} />,
  args: {
    onPress: () => console.log('Pressed'),
    placeholder: 'Press me...',
  },
};

export const WithPlaceholder: Story = {
  render: args => <PressableInputWithState {...args} />,
  args: {
    onPress: () => console.log('Pressed'),
    placeholder: 'Custom placeholder...',
  },
};

export const WithInitialValue: Story = {
  render: args => <PressableInputWithState {...args} />,
  args: {
    onPress: () => console.log('Pressed'),
    value: 'Initial pressable value',
  },
};
