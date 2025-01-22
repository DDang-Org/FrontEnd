import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
import { BaseInput, BaseInputProps } from './index';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

const meta = {
  title: 'BaseInput',
  component: BaseInput,
  decorators: [
    Story => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof BaseInput>;

export default meta;

type Story = StoryObj<typeof meta>;

type ControlledBaseInputProps = BaseInputProps & {
  value: string;
  onChangeText: (text: string) => void;
};

const ControlledBaseInput = ({ value, onChangeText, ...props }: ControlledBaseInputProps) => (
  <BaseInput value={value} onChangeText={onChangeText} {...props} />
);

const BasicStory = () => {
  const [value, setValue] = React.useState('');
  return <ControlledBaseInput value={value} onChangeText={setValue} />;
};

export const Basic: Story = {
  render: () => <BasicStory />,
};

const WithPlaceholderStory = () => {
  const [value, setValue] = React.useState('');
  return <ControlledBaseInput value={value} onChangeText={setValue} placeholder="Enter text here..." />;
};

export const WithPlaceholder: Story = {
  render: () => <WithPlaceholderStory />,
};

const WithInitialValueStory = () => {
  const [value, setValue] = React.useState('Initial value');
  return <ControlledBaseInput value={value} onChangeText={setValue} />;
};

export const WithInitialValue: Story = {
  render: () => <WithInitialValueStory />,
};
