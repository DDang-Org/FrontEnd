import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { StatContainer } from './index';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '~styles/theme';

const meta = {
  title: 'StatContainer',
  component: StatContainer,
  decorators: [
    Story => (
      <ThemeProvider theme={lightTheme}>
        <View>
          <Story />
        </View>
      </ThemeProvider>
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
          <StatContainer.Value>23회</StatContainer.Value>
          <StatContainer.Label>누적 산책 횟수</StatContainer.Label>
        </StatContainer.Item>
        <StatContainer.Item>
          <StatContainer.Value>32km</StatContainer.Value>
          <StatContainer.Label>총 산책 거리</StatContainer.Label>
        </StatContainer.Item>
        <StatContainer.Item>
          <StatContainer.Value>16회</StatContainer.Value>
          <StatContainer.Label>강번따 횟수</StatContainer.Label>
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
          <StatContainer.Label>누적 산책 횟수</StatContainer.Label>
          <StatContainer.Value>23회</StatContainer.Value>
        </StatContainer.Item>
        <StatContainer.Item>
          <StatContainer.Label>총 산책 거리</StatContainer.Label>
          <StatContainer.Value>32km</StatContainer.Value>
        </StatContainer.Item>
        <StatContainer.Item>
          <StatContainer.Label>강번따 횟수</StatContainer.Label>
          <StatContainer.Value>16회</StatContainer.Value>
        </StatContainer.Item>
      </>
    ),
  },
};
