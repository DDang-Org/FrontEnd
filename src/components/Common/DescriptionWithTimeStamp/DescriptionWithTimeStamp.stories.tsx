import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { ThemeProvider } from '@emotion/react';
import { DescriptionWithTimeStamp } from '~components/Common/DescriptionWithTimeStamp';
import { lightTheme } from '~styles/theme';

const meta = {
  title: 'DescriptionWithTimeStamp',
  component: DescriptionWithTimeStamp,
  argTypes: {},
  args: {
    description: 'This is a description',
    time: '10:30 AM',
  },
  decorators: [
    Story => (
      <ThemeProvider theme={lightTheme}>
        <View style={{ padding: 16 }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof DescriptionWithTimeStamp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ShortText: Story = {
  args: {
    description: 'Short text',
    time: '10:00 AM',
  },
};

export const LongText: Story = {
  args: {
    description:
      'This is a much longer description to test how the component handles text wrapping and layout adjustments for extended content.',
    time: '11:45 AM',
  },
};
