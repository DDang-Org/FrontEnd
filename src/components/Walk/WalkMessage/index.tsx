import * as S from './styles';

const WalkMessage = () => {
  return (
    <S.WalkMessage>
      <S.MessageText fontSize={14}>
        주변에 5마리가 산책을 하고 있어요. {'\n'}
        같이 산책을 해보세요!
      </S.MessageText>
      <S.MessageTail />
    </S.WalkMessage>
  );
};

export default WalkMessage;
