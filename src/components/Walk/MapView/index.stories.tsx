import { View } from 'react-native';
import * as S from './styles';
import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

// NaverMapView 목업 컴포넌트
const MockNaverMap = () => (
  <View
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#e5e5e5',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <S.LocationText style={{ color: '#666' }}>네이버 지도 영역</S.LocationText>
  </View>
);

// UI 목업 컴포넌트
const MapViewMock = ({ initialIsWalking = false }) => {
  const [isWalking, setIsWalking] = useState(initialIsWalking);

  const renderWalkButton = () => {
    if (!isWalking) {
      return <S.StartButton onPress={() => setIsWalking(true)} bgColor="default" text="산책 시작" />;
    }

    return (
      <S.WalkingInfoContainer>
        <S.WalkingInfo>
          <S.InfoText fontSize={15}>00:05:30</S.InfoText>
          <S.StopButton onPress={() => setIsWalking(false)} bgColor="lighten_2" text="산책 끝" />
          <S.InfoText fontSize={15}>1.2km</S.InfoText>
        </S.WalkingInfo>
      </S.WalkingInfoContainer>
    );
  };

  return (
    <View style={{ width: '100%', height: 600 }}>
      <MockNaverMap />
      <S.LocationButton onPress={() => {}} text="⊕ 내 위치로" bgColor="font_1" />
      {renderWalkButton()}
    </View>
  );
};

const meta: Meta<typeof MapViewMock> = {
  title: 'Walk/MapView',
  component: MapViewMock,
  decorators: [
    Story => (
      <View style={{ padding: 20, backgroundColor: '#f5f5f5' }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MapViewMock>;

export const Default: Story = {
  args: {
    initialIsWalking: false,
  },
};

export const Walking: Story = {
  args: {
    initialIsWalking: true,
  },
};
