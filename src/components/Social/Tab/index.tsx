import * as S from './styles';
import { useRef, useEffect, useState } from 'react';
import { Animated } from 'react-native';

export const Tab = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: '댕친' | '댕톡';
  setSelectedTab: (tab: '댕친' | '댕톡') => void;
}) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: selectedTab === '댕친' ? 0 : containerWidth / 2,
      useNativeDriver: true,
      tension: 100,
      friction: 10,
    }).start();
  }, [selectedTab, containerWidth, translateX]);

  return (
    <S.TabContainer
      onLayout={event => {
        setContainerWidth(event.nativeEvent.layout.width);
      }}
    >
      <S.Tab>
        <S.TabItem>
          <S.TabItemText
            color={selectedTab === '댕친' ? 'font_1' : 'font_3'}
            fontSize={15}
            onPress={() => setSelectedTab('댕친')}
          >
            댕친
          </S.TabItemText>
        </S.TabItem>
        <S.TabItem>
          <S.TabItemText
            color={selectedTab === '댕톡' ? 'font_1' : 'font_3'}
            fontSize={15}
            onPress={() => setSelectedTab('댕톡')}
          >
            댕톡
          </S.TabItemText>
        </S.TabItem>
      </S.Tab>
      <S.TabUnderBar
        style={[
          {
            transform: [
              {
                translateX: Animated.add(translateX, -16),
              },
            ],
          },
        ]}
      />
    </S.TabContainer>
  );
};
