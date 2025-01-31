// UnreadChatCount.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { UnreadChatCount } from './index';
import { View } from 'react-native';

const meta = {
  title: 'UnreadChatCount',
  component: UnreadChatCount,
  decorators: [
    Story => (
      <View style={{ flex: 1, alignItems: 'flex-start', padding: 20 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof UnreadChatCount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    unreadCount: 5,
  },
};

export const LargeNumber: Story = {
  args: {
    unreadCount: 99,
  },
};
