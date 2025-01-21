import { ToggleBox } from '~components/MyPage/Setting/ToggleBox';
import * as S from './styles';
import { useNotificationPermission } from '~apis/notification/useNotificationPermission';

export const SettingScreen = () => {
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
    </S.SettingScreen>
  );
};
