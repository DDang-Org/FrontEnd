import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { StatContainer } from './index';

const meta = {
  title: 'StatContainer',
  component: StatContainer,
  decorators: [
    Story => (
      <View>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof StatContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <StatContainer.Item>
          <StatContainer.Value value="23회" />
          <StatContainer.Label label="누적 산책 횟수" />
        </StatContainer.Item>
        <StatContainer.Item>
          <StatContainer.Value value="32km" />
          <StatContainer.Label label="총 산책 거리" />
        </StatContainer.Item>
        <StatContainer.Item>
          <StatContainer.Value value="16회" />
          <StatContainer.Label label="강번따 횟수" />
        </StatContainer.Item>
      </>
    ),
  },
};

export const Reversed: Story = {
  args: {
    children: (
      <>
        <StatContainer.Item>
          <StatContainer.Label label="누적 산책 횟수" />
          <StatContainer.Value value="23회" />
        </StatContainer.Item>
        <StatContainer.Item>
          <StatContainer.Label label="총 산책 거리" />
          <StatContainer.Value value="32km" />
        </StatContainer.Item>
        <StatContainer.Item>
          <StatContainer.Label label="강번따 횟수" />
          <StatContainer.Value value="16회" />
        </StatContainer.Item>
      </>
    ),
  },
};
