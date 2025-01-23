import { Meta, StoryObj } from '@storybook/react';
import { DogProfile } from './index';

const meta: Meta<typeof DogProfile> = {
  title: 'Walk/DogProfile',
  component: DogProfile,
  args: {
    dog: {
      id: '1',
      name: '멍멍이',
      breed: '골든 리트리버',
      age: '3살',
      gender: '남',
      imageUrl: 'https://cdn2.thecatapi.com/images/ci0.jpg',
    },
    showWalkCount: false,
    walkCount: 0,
  },
};

export default meta;
type Story = StoryObj<typeof DogProfile>;

export const Default: Story = {};

export const WithWalkCount: Story = {
  args: {
    showWalkCount: true,
    walkCount: 15,
  },
};

export const LongName: Story = {
  args: {
    dog: {
      id: '2',
      name: '긴이름을가진멍멍이',
      breed: '포메라니안',
      age: '2살',
      gender: '여',
      imageUrl: 'https://cdn2.thecatapi.com/images/ci0.jpg',
    },
  },
};
