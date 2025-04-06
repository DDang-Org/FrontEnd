import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNotificationPermission } from '~apis/notification/useNotificationPermission';
import { ActionButton } from '~components/Common/ActionButton';
import { TextBold, TextRegular } from '~components/Common/Text';
import { ToggleBox } from '~components/MyPage/Setting/ToggleBox';
import { MyPageStackProps } from '~navigation/MyPageNavigator';
import * as S from './styles';
import { useAuth } from '~apis/member/useAuth';
import { useUser } from '~apis/member/useUser';
import { Alert } from 'react-native';
import { useFamilyInfo } from '~apis/family/useFamilyInfo';

type Props = NativeStackScreenProps<MyPageStackProps, 'Setting'>;

export const SettingScreen = ({ navigation }: Props) => {
  const { logoutMutation, deleteAccountMutation } = useAuth();
  const myInfo = useUser();
  const familyInfo = useFamilyInfo();
  const {
    chatNotificationAllowed,
    familyNotificationAllowed,
    friendNotificationAllowed,
    walkNotificationAllowed,
    gangbunttaNotificationAllowed,
  } = useNotificationPermission();

  const isRepresetative = myInfo.isRepresentative && familyInfo.length > 1;

  const handleDeleteAccount = () => {
    Alert.alert('정말로 탈퇴하시겠습니까?', '삭제된 계정은 복구하실 수 없습니다.', [
      {
        text: '탈퇴하기',
        onPress: () => {
          if (isRepresetative) {
            Alert.alert('패밀리장은 탈퇴할 수 없습니다.', '패밀리장 위임 후 탈퇴를 진행해주세요.');
            return;
          }
          deleteAccountMutation.mutate(null);
        },
      },
      {
        text: '취소',
        style: 'cancel',
      },
    ]);
  };

  return (
    <S.SettingScreen>
      {/* <ToggleBox>
        <ToggleBox.Item title="강번따 허용 여부" enabled={gangbunttaNotificationAllowed === 'TRUE' ? true : false} />
      </ToggleBox> */}

      {/* <ToggleBox>
        <ToggleBox.Container>
          <ToggleBox.Item
            title="내 산책 알림"
            description="산책 알림 허용 여부"
            enabled={walkNotificationAllowed === 'TRUE' ? true : false}
          />
          <ToggleBox.Item
            title="메세지"
            description="메시지 알림 허용 여부"
            enabled={chatNotificationAllowed === 'TRUE' ? true : false}
          />
          <ToggleBox.Item
            title="친구 신청"
            description="친구 신청 알림 허용 여부"
            enabled={friendNotificationAllowed === 'TRUE' ? true : false}
          />
          <ToggleBox.Item
            title="가족 산책 알림"
            description="가족 산책 알림 허용 여부"
            enabled={familyNotificationAllowed === 'TRUE' ? true : false}
          />
        </ToggleBox.Container>
      </ToggleBox> */}

      <S.NavigationToBlockScreen paddingHorizontal={20} paddingVertical={16.5}>
        <S.TypoWrapper>
          <TextBold fontSize={17}>차단 목록</TextBold>
          <TextRegular fontSize={15}>차단한 유저를 관리합니다.</TextRegular>
        </S.TypoWrapper>
        <S.NextButton onPress={() => navigation.navigate('Block')} />
      </S.NavigationToBlockScreen>

      <S.ButtonContainer>
        <ActionButton
          onPress={() => logoutMutation.mutate(null)}
          text="로그아웃"
          bgColor="font_1"
          type="semiRoundedRect"
        />
        <S.DeleteAccountButton onPress={handleDeleteAccount}>
          <S.DeleteAccountTypo fontSize={15}>탈퇴하기</S.DeleteAccountTypo>
        </S.DeleteAccountButton>
        <S.TermsOfUseButton onPress={() => navigation.navigate('TermsOfUse')}>
          <S.TermsOfUseTypo fontSize={15}>이용약관</S.TermsOfUseTypo>
        </S.TermsOfUseButton>
      </S.ButtonContainer>
    </S.SettingScreen>
  );
};
