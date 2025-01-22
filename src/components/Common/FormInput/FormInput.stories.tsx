import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import FormInput, { FormInputProps } from './index';

const meta = {
  title: 'FormInput',
  component: FormInput,
  decorators: [
    Story => (
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof FormInput>;

export default meta;

type Story = StoryObj<typeof FormInput>;

const FormInputWithState = (args: FormInputProps) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <FormInput
      {...args}
      value={value}
      onChangeText={setValue}
      onPress={
        args.onPress
          ? () => {
              setValue('Pressed!');
              args.onPress?.();
            }
          : undefined
      }
    />
  );
};

export const Basic: Story = {
  render: args => <FormInputWithState {...args} />,
  args: {
    placeholder: 'Enter text...',
    onChangeText: (text: string) => console.log('Text changed:', text),
  },
};

export const Multiline: Story = {
  render: args => <FormInputWithState {...args} />,
  args: {
    multiline: true,
    maxLines: 2,
    placeholder: 'Enter multiline text...',
    onChangeText: (text: string) => console.log('Text changed:', text),
  },
};

export const Pressable: Story = {
  render: args => <FormInputWithState {...args} />,
  args: {
    onPress: () => console.log('Pressed'),
    placeholder: 'Press me...',
    onChangeText: (text: string) => console.log('Text changed:', text),
  },
};

export const WithInitialValue: Story = {
  render: args => <FormInputWithState {...args} />,
  args: {
    value: 'Initial form input value',
    onChangeText: (text: string) => console.log('Text changed:', text),
  },
};
