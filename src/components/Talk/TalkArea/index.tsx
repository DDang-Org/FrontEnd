import { FlatList } from 'react-native';
import * as S from './styles';
import { TextBold } from '~components/Common/Text';
import { Dimensions } from 'react-native';
import { IncomingMessage, OutgoingMessage } from '~components/Talk/Message/styles';
import DogHowling from '~assets/dogs/dog-howling.svg';
import { useState } from 'react';

const messages = [
  {
    id: 12,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 13,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 14,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 15,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 16,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 17,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 18,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 19,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 111,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 112,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 113,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 114,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 1233,
    type: 'outgoing',
    text: '최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2',
  },
  {
    id: 123334,
    type: 'incoming',
    text: '최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2',
  },
];

export const TalkArea = () => {
  const deviceWidth = Dimensions.get('window').width;
  const [talkAreaHeight, setTalkAreaHeight] = useState(0);
  const [flatListHeight, setFlatListHeight] = useState(0);

  const renderMessage = ({ item }: { item: (typeof messages)[0] }) => {
    if (item.type === 'incoming') {
      return (
        <IncomingMessage>
          <TextBold fontSize={14}>{item.text}</TextBold>
        </IncomingMessage>
      );
    }
    return (
      <OutgoingMessage>
        <TextBold fontSize={14}>{item.text}</TextBold>
      </OutgoingMessage>
    );
  };

  return (
    <S.TalkArea
      onLayout={event => {
        const { height } = event.nativeEvent.layout;
        setTalkAreaHeight(height);
      }}
    >
      <DogHowling
        style={{
          position: 'absolute',
          left: deviceWidth / 2,
          bottom: 30,
          transform: [{ translateX: -94 }],
        }}
      />
      <FlatList
        contentContainerStyle={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginTop: Math.max(0, talkAreaHeight - flatListHeight),
        }}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id.toString()}
        removeClippedSubviews={false}
        inverted
        onContentSizeChange={(_, height) => {
          setFlatListHeight(height);
        }}
      />
    </S.TalkArea>
  );
};
