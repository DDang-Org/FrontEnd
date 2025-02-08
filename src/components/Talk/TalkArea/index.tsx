import { IncomingMessage, OutgoingMessage } from '~components/Talk/Message/styles';
import * as S from './styles';
import { TextBold } from '~components/Common/Text';
import DogHowling from '~assets/dogs/dog-howling.svg';
import { Dimensions } from 'react-native';

interface TalkAreaProps {}

export const TalkArea = ({}: TalkAreaProps) => {
  const width = Dimensions.get('window').width;
  return (
    <S.TalkArea>
      <DogHowling
        style={{
          position: 'absolute',
          left: width / 2,
          bottom: 30,
          transform: [{ translateX: -188 / 2 }],
        }}
      />
      <IncomingMessage>
        <TextBold fontSize={14}>안녕하세요 성훈님</TextBold>
      </IncomingMessage>
      <OutgoingMessage>
        <TextBold fontSize={14}>안녕하세요!!</TextBold>
      </OutgoingMessage>{' '}
      <IncomingMessage>
        <TextBold fontSize={14}>안녕하세요 성훈님</TextBold>
      </IncomingMessage>
      <OutgoingMessage>
        <TextBold fontSize={14}>안녕하세요!!</TextBold>
      </OutgoingMessage>{' '}
      <IncomingMessage>
        <TextBold fontSize={14}>안녕하세요 성훈님</TextBold>
      </IncomingMessage>
      <OutgoingMessage>
        <TextBold fontSize={14}>안녕하세요!!</TextBold>
      </OutgoingMessage>{' '}
      <IncomingMessage>
        <TextBold fontSize={14}>안녕하세요 성훈님</TextBold>
      </IncomingMessage>
      <OutgoingMessage>
        <TextBold fontSize={14}>안녕하세요!!</TextBold>
      </OutgoingMessage>
      <IncomingMessage>
        <TextBold fontSize={14}>안녕하세요 성훈님</TextBold>
      </IncomingMessage>
      <OutgoingMessage>
        <TextBold fontSize={14}>안녕하세요!!</TextBold>
      </OutgoingMessage>{' '}
      <IncomingMessage>
        <TextBold fontSize={14}>안녕하세요 성훈님</TextBold>
      </IncomingMessage>
      <OutgoingMessage>
        <TextBold fontSize={14}>안녕하세요!!</TextBold>
      </OutgoingMessage>{' '}
      <IncomingMessage>
        <TextBold fontSize={14}>안녕하세요 성훈님</TextBold>
      </IncomingMessage>
      <OutgoingMessage>
        <TextBold fontSize={14}>안녕하세요!!</TextBold>
      </OutgoingMessage>{' '}
      <IncomingMessage>
        <TextBold fontSize={14}>안녕하세요 성훈님</TextBold>
      </IncomingMessage>
      <OutgoingMessage>
        <TextBold fontSize={14}>안녕하세요!!</TextBold>
      </OutgoingMessage>
    </S.TalkArea>
  );
};
