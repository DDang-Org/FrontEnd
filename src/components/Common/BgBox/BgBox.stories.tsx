import type { Meta, StoryObj } from '@storybook/react';
import { Text, View } from 'react-native';
import { ThemeProvider } from '@emotion/react';
import { BgBox } from '~components/Common/BgBox';
import { lightTheme } from '~styles/theme';

const meta = {
  title: 'BgBox',
  component: BgBox,
  argTypes: {
    paddingHorizontal: {
      control: { type: 'number' },
      description: 'Horizontal padding for the container',
    },
    paddingVertical: {
      control: { type: 'number' },
      description: 'Vertical padding for the container',
    },
  },
  args: {},
  decorators: [
    Story => (
      <ThemeProvider theme={lightTheme}>
        <View style={{ padding: 16 }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof BgBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <Text>Basic BgBox Content</Text>,
  },
};

export const CustomPadding: Story = {
  args: {
    paddingHorizontal: 32,
    paddingVertical: 24,
    children: <Text>Custom Padding Content</Text>,
  },
};
