import { CompoundOption } from '~components/Common/CompoundOptions';

interface ChatRoomOptionsProps {
  isVisible: boolean;
  hideOption: () => void;
  isBlocked: boolean;
}

export const ChatRoomOptions = ({ isVisible, hideOption, isBlocked }: ChatRoomOptionsProps) => {
  return (
    <CompoundOption isVisible={isVisible} hideOption={hideOption}>
      <CompoundOption.Background>
        <CompoundOption.Container>
          <CompoundOption.Button onPress={() => null}>채팅방 나가기</CompoundOption.Button>
          <CompoundOption.Divider />
          {isBlocked ? (
            <CompoundOption.Button onPress={() => null}>차단 해제</CompoundOption.Button>
          ) : (
            <CompoundOption.Button onPress={() => null} isDanger>
              차단하기
            </CompoundOption.Button>
          )}
        </CompoundOption.Container>
        <CompoundOption.Container>
          <CompoundOption.Button onPress={hideOption}>취소</CompoundOption.Button>
        </CompoundOption.Container>
      </CompoundOption.Background>
    </CompoundOption>
  );
};
