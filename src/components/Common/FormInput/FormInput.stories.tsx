import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '~styles/theme';
import { css } from '@emotion/native';
import { View } from 'react-native';
import FormInput from './index';

const meta = {
  title: 'FormInput',
  component: FormInput,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    onChangeText: { action: 'text changed' },
    onPress: { action: 'input pressed' },
    editable: { control: 'boolean' },
    secureTextEntry: { control: 'boolean' },
    keyboardType: {
      control: {
        type: 'select',
      },
      options: ['default', 'number-pad', 'decimal-pad', 'numeric', 'email-address', 'phone-pad'],
    },
  },
  args: {
    placeholder: 'Enter text...',
    editable: true,
    secureTextEntry: false,
    keyboardType: 'default',
  },
  decorators: [
    Story => (
      <ThemeProvider theme={lightTheme}>
        <View
          style={css`
            padding: 50px 20px;
            flex: 1;
          `}
        >
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof FormInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Type something here...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Pre-filled text',
  },
};

export const Disabled: Story = {
  args: {
    editable: false,
    value: 'This input is disabled',
  },
};

export const Password: Story = {
  args: {
    secureTextEntry: true,
    placeholder: 'Enter password',
  },
};

export const WithOnPress: Story = {
  args: {
    value: 'Pressable input',
    onPress: () => console.log('Input pressed!'),
  },
};

export const EmailInput: Story = {
  args: {
    keyboardType: 'email-address',
    placeholder: 'Enter your email',
  },
};
