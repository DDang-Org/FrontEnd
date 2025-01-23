import { View } from 'react-native';
import WalkMessage from './index';
import { Meta, StoryObj } from '@storybook/react';
import * as S from './styles';

const meta: Meta<typeof WalkMessage> = {
  title: 'Walk/WalkMessage',
  component: WalkMessage,
  decorators: [
    Story => (
      // 메시지의 absolute 포지션을 위한 컨테이너
      <View
        style={{
          height: 200,
          backgroundColor: '#f5f5f5',
          padding: 20,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof WalkMessage>;

// 기본 메시지
export const Default: Story = {};

// 다른 메시지 내용을 보여주기 위한 커스텀 컴포넌트
const CustomWalkMessage = ({ count }: { count: number }) => {
  return (
    <S.WalkMessage>
      <S.MessageText fontSize={14}>
        주변에 {count}마리가 산책을 하고 있어요. {'\n'}
        같이 산책을 해보세요!
      </S.MessageText>
      <S.MessageTail />
    </S.WalkMessage>
  );
};

// 다른 숫자의 강아지 수를 보여주는 스토리
export const WithMoreDogs: Story = {
  render: () => <CustomWalkMessage count={10} />,
};

// 한 줄 메시지 버전
export const SingleLine: Story = {
  render: () => (
    <S.WalkMessage>
      <S.MessageText fontSize={14}>주변에 산책 중인 강아지를 찾을 수 없어요.</S.MessageText>
      <S.MessageTail />
    </S.WalkMessage>
  ),
};
