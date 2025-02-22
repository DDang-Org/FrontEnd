import { FlatList } from 'react-native';
import * as S from './styles';
import { TextBold } from '~components/Common/Text';
import { Dimensions } from 'react-native';
import { IncomingMessage, OutgoingMessage } from '~components/Talk/Message/styles';
import DogHowling from '~assets/dogs/dog-howling.svg';
import { useState } from 'react';

const messages = [
  {
    id: 1,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 1,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 1,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 1,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 1,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 1,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 1,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 1,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 1,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 1,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 1,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 1,
    type: 'outgoing',
    text: 'hihi',
  },
  {
    id: 1233,
    type: 'outgoing',
    text: '최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2',
  },
  {
    id: 1233,
    type: 'incoming',
    text: '최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2최신 메세지2',
  },
  // {
  //   id: 154,
  //   type: 'incoming',
  //   text: '최신 메세지',
  // },
  // {
  //   id: 1,
  //   type: 'incoming',
  //   text: '안녕하세요 성훈님1',
  // },
  // { id: 2, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 3, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 4, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 11, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 21, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 31, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 41, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 12, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 22, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 32, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 42, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 13, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 23, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 33, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 43, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 14, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 24, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 34, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 44, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 15, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 25, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 35, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 45, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 16, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 26, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 36, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 46, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 17, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 27, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 37, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 47, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 18, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 28, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 38, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 48, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 19, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 29, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 39, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 49, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 111, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 211, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 311, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 411, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 112, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 212, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 312, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 412, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 113, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 213, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 313, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 413, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 114, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 214, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 314, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 414, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 115, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 215, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 315, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 415, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 116, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 216, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 316, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 416, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 117, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 217, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 317, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 417, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 118, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 218, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 318, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 418, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 119, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 219, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 319, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 419, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 120, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 220, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 320, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 420, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 121, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 221, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 321, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 421, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 122, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 222, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 322, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 422, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 123, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 223, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 323, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 423, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 124, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 224, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 324, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 424, type: 'outgoing', text: '안녕하세요!!4' },
  // { id: 125, type: 'incoming', text: '안녕하세요 성훈님1' },
  // { id: 225, type: 'outgoing', text: '안녕하세요!!2' },
  // { id: 325, type: 'incoming', text: '안녕하세요 성훈님3' },
  // { id: 426, type: 'outgoing', text: '안녕하세요!!4' },
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
