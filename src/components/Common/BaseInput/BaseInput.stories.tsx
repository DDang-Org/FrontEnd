import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { BaseInput, BaseInputProps } from './index';

const meta = {
  title: 'BaseInput',
  component: BaseInput,
  decorators: [
    Story => (
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof BaseInput>;

export default meta;

type Story = StoryObj<typeof meta>;

// 제어 컴포넌트를 위한 필수 props 타입 정의
type ControlledBaseInputProps = BaseInputProps & {
  value: string;
  onChangeText: (text: string) => void;
};

const ControlledBaseInput = ({ value, onChangeText, ...props }: ControlledBaseInputProps) => (
  <BaseInput value={value} onChangeText={onChangeText} {...props} />
);

export const Basic: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    return <ControlledBaseInput value={value} onChangeText={setValue} />;
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    return <ControlledBaseInput value={value} onChangeText={setValue} placeholder="Enter text here..." />;
  },
};

export const WithInitialValue: Story = {
  render: () => {
    const [value, setValue] = React.useState('Initial value');
    return <ControlledBaseInput value={value} onChangeText={setValue} />;
  },
};
