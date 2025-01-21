import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { GenderSelectButton } from './index';

const meta: Meta<typeof GenderSelectButton> = {
  title: 'Common/GenderSelectButton',
  component: GenderSelectButton,
  argTypes: {
    gender: {
      control: { type: 'radio' },
      options: ['male', 'female'],
    },
    direction: {
      control: { type: 'radio' },
      options: ['row', 'column'],
    },
    isActive: {
      control: 'boolean',
    },
  },
  decorators: [
    Story => (
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof GenderSelectButton>;

export const Default: Story = {
  args: {
    gender: 'male',
    direction: 'column',
    isActive: false,
    onPress: () => console.log('Button pressed'),
  },
};

export const Female: Story = {
  args: {
    ...Default.args,
    gender: 'female',
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    isActive: true,
  },
};

export const RowDirection: Story = {
  args: {
    ...Default.args,
    direction: 'row',
  },
};
