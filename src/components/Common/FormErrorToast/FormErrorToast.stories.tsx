import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { FormErrorToast } from './index';

const meta: Meta<typeof FormErrorToast> = {
  title: 'Components/FormErrorToast',
  component: FormErrorToast,
  argTypes: {
    message: { control: 'text' },
  },
  decorators: [
    Story => (
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FormErrorToast>;

export const ShortMessage: Story = {
  args: {
    message: '유효하지 않은 코드입니다.',
  },
};
