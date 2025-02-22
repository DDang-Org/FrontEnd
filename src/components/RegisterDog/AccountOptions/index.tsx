import { Alert } from 'react-native';
import { useAuth } from '~apis/member/useAuth';
import { CompoundOption } from '~components/Common/CompoundOptions';

interface AccountOptionsProps {
  isVisible: boolean;
  hideOption: () => void;
}

export const AccountOptions = ({ isVisible, hideOption }: AccountOptionsProps) => {
  const { logoutMutation, deleteAccountMutation } = useAuth();

  const handleDeleteAccount = () => {
    Alert.alert('정말로 탈퇴하시겠습니까?', '삭제된 계정은 복구하실 수 없습니다.', [
      {
        text: '탈퇴하기',
        onPress: () => deleteAccountMutation.mutate(null),
      },
      {
        text: '취소',
        style: 'cancel',
      },
    ]);
  };

  return (
    <CompoundOption isVisible={isVisible} hideOption={hideOption}>
      <CompoundOption.Background>
        <CompoundOption.Container>
          <CompoundOption.Button onPress={() => logoutMutation.mutate(null)}>로그아웃</CompoundOption.Button>
          <CompoundOption.Divider />
          <CompoundOption.Button onPress={handleDeleteAccount}>회원 탈퇴</CompoundOption.Button>
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
