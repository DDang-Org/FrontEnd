import type { Meta, StoryObj } from '@storybook/react';
import Profile from './index';
import Avatar1 from '~assets/avatars/Avatar1.svg';
import Avatar2 from '~assets/avatars/Avatar2.svg';

const meta: Meta<typeof Profile> = {
  title: 'Profile',
  component: Profile,
  argTypes: {
    size: {
      control: { type: 'number' },
      description: '프로필 이미지의 크기',
    },
    src: {
      control: { type: 'text' },
      description: '프로필 이미지 URL 또는 SVG 컴포넌트',
    },
    userId: {
      control: { type: 'number' },
      description: '사용자 ID (있으면 클릭 가능)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    size: 48,
    src: Avatar1,
    userId: 1,
  },
};

export const NonClickable: Story = {
  args: {
    size: 140,
    src: Avatar2,
  },
};
