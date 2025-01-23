import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNotificationPermission } from '~apis/notification/useNotificationPermission';
import { ActionButton } from '~components/Common/ActionButton';
import { TextBold, TextRegular } from '~components/Common/Text';
import { ToggleBox } from '~components/MyPage/Setting/ToggleBox';
import { MyPageStackProps } from '~navigation/MyPageNavigator';
import * as S from './styles';

type Props = NativeStackScreenProps<MyPageStackProps, 'Setting'>;

export const SettingScreen = ({ navigation }: Props) => {
  const {
    chatNotificationAllowed,
    familyNotificationAllowed,
    friendNotificationAllowed,
    walkNotificationAllowed,
    gangbunttaNotificationAllowed,
  } = useNotificationPermission();
  return (
    <S.SettingScreen>
      <ToggleBox>
        <ToggleBox.Item title="강번따 허용 여부" enabled={gangbunttaNotificationAllowed === 'TRUE' ? true : false} />
      </ToggleBox>

      <ToggleBox>
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
      </ToggleBox>

      <S.NavigationToBlockScreen paddingHorizontal={20} paddingVertical={16.5}>
        <S.TypoWrapper>
          <TextBold fontSize={17}>차단 목록</TextBold>
          <TextRegular fontSize={15}>차단한 유저를 관리합니다.</TextRegular>
        </S.TypoWrapper>
        <S.NextButton onPress={() => navigation.navigate('Block')} />
      </S.NavigationToBlockScreen>

      <S.ButtonContainer>
        <ActionButton text="로그아웃" bgColor="font_1" type="semiRoundedRect" />
        <S.DeleteAccountButton>
          <S.DeleteAccountTypo fontSize={15}>탈퇴하기</S.DeleteAccountTypo>
        </S.DeleteAccountButton>
      </S.ButtonContainer>
    </S.SettingScreen>
  );
};
