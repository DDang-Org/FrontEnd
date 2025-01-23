import { View } from 'react-native';
import * as S from './styles';
import { Meta, StoryObj } from '@storybook/react';

// UI 목업 컴포넌트
const HeaderMock = ({ location = '강남구 논현동' }) => (
  <S.Header style={{ top: 44 }}>
    <S.HeaderGradient
      colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0, y: 1 }}
    />
    <S.HeaderContent>
      <S.BackButton onPress={() => {}}>
        <S.BackIcon>←</S.BackIcon>
      </S.BackButton>
      <S.Title fontSize={20}>{location}</S.Title>
      <S.ProfileContainer>
        <S.ProfileImage source={{ uri: 'https://avatars.githubusercontent.com/u/65541546?v=4' }} />
      </S.ProfileContainer>
    </S.HeaderContent>
  </S.Header>
);

const meta: Meta<typeof HeaderMock> = {
  title: 'Walk/Header',
  component: HeaderMock,
  decorators: [
    Story => (
      <View style={{ height: 150, backgroundColor: '#f5f5f5' }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HeaderMock>;

export const Default: Story = {};

export const DifferentLocation: Story = {
  args: {
    location: '서초구 반포동',
  },
};
