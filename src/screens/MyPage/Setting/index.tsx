import { ToggleBox } from '~components/MyPage/Setting/ToggleBox';
import * as S from './styles';

export const SettingScreen = () => {
  return (
    <S.SettingScreen>
      <ToggleBox>
        <ToggleBox.Item title="강번따 허용 여부" />
      </ToggleBox>

      <ToggleBox>
        <ToggleBox.Container>
          <ToggleBox.Item title="내 산책 알림" description="산책 알림 허용 여부" />
          <ToggleBox.Item title="메세지" description="메시지 알림 허용 여부" />
          <ToggleBox.Item title="친구 신청" description="친구 신청 알림 허용 여부" />
          <ToggleBox.Item title="가족 산책 알림" description="가족 산책 알림 허용 여부" />
        </ToggleBox.Container>
      </ToggleBox>
    </S.SettingScreen>
  );
};
