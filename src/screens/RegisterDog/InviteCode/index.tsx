import { ActionButton } from '~components/Common/ActionButton';
import * as S from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterDogParamList } from '~navigation/Auth/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';

type InviteCodeProps = NativeStackScreenProps<RegisterDogParamList, typeof RegisterDogNavigations.INVITE_CODE>;

export const InviteCode = ({ navigation }: InviteCodeProps) => {
  return (
    <S.InviteCode>
      <ActionButton
        onPress={() => navigation.navigate(RegisterDogNavigations.DOG_CONFIRMATION, { inviteCode: 'asdf' })}
        text="다음"
      />
    </S.InviteCode>
  );
};
