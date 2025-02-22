import { ActionButton } from '~components/Common/ActionButton';
import * as S from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
import { TextBold } from '~components/Common/Text';
import FormInput from '~components/Common/FormInput';
import { useRef, useState } from 'react';
import { View } from 'react-native';
import { validateFamilyCode } from '~utils/validateDogProfile';
import { useToast } from '~hooks/useToast';
import { useVerifyInviteCode } from '~apis/family/useInviteCode';
import { HTTPError } from 'ky';
import { useThrottle } from '~hooks/useThrottle';

type InviteCodeProps = NativeStackScreenProps<RegisterDogParamList, typeof RegisterDogNavigations.INVITE_CODE>;

export const InviteCode = ({ navigation }: InviteCodeProps) => {
  const [inviteCode, setInviteCode] = useState('');
  const { showFormErrorToast } = useToast();
  const confirmButtonRef = useRef<View | null>(null);
  const inviteCodeMutation = useVerifyInviteCode();
  const throttle = useThrottle(1000);

  const handleClickConfirm = () => {
    const error = validateFamilyCode(inviteCode);
    if (error) {
      showFormErrorToast(error, confirmButtonRef);
      return;
    }
    inviteCodeMutation.mutate(inviteCode, {
      onSuccess: response =>
        navigation.navigate(RegisterDogNavigations.DOG_CONFIRMATION, {
          inviteCode: inviteCode,
          dogInfos: response.data,
        }),
      onError: async error => {
        if (error instanceof HTTPError) {
          const errorData = await error.response.json();
          const message = errorData.message;
          showFormErrorToast(message, confirmButtonRef);
        }
        console.error(error);
      },
    });
  };

  const throttleHandleClickConfirm = throttle(handleClickConfirm);

  return (
    <S.InviteCode>
      <S.CodeInputArea>
        <S.TextWrapper>
          <TextBold fontSize={24}>가족에게 받은</TextBold>
          <TextBold fontSize={24}>코드를 입력해주세요.</TextBold>
        </S.TextWrapper>
        <FormInput onChangeText={setInviteCode} value={inviteCode} placeholder="가족코드 입력" />
      </S.CodeInputArea>
      <View ref={confirmButtonRef}>
        <ActionButton onPress={throttleHandleClickConfirm} text="확인" />
      </View>
    </S.InviteCode>
  );
};
