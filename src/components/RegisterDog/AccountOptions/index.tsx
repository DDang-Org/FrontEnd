import { CompoundOption } from '~components/Common/CompoundOptions';

interface AccountOptionsProps {
  isVisible: boolean;
  hideOption: () => void;
}

export const AccountOptions = ({ isVisible, hideOption }: AccountOptionsProps) => {
  return (
    <CompoundOption isVisible={isVisible} hideOption={hideOption}>
      <CompoundOption.Background>
        <CompoundOption.Container>
          <CompoundOption.Button>로그아웃</CompoundOption.Button>
          <CompoundOption.Divider />
          <CompoundOption.Button>회원 탈퇴</CompoundOption.Button>
        </CompoundOption.Container>
        <CompoundOption.Container>
          <CompoundOption.Button isDanger onPress={hideOption}>
            취소
          </CompoundOption.Button>
        </CompoundOption.Container>
      </CompoundOption.Background>
    </CompoundOption>
  );
};
