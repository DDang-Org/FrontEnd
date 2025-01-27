import * as S from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '~navigation/RootNavigator';
import Dog from '~assets/dogs/dog-hand.svg'
import { Icon } from '~components/Common/Icons';
import { ActionButton } from '~components/Common/ActionButton';
// import KakaoIcon from '~assets/icons/kakao.svg'

type RootNavigationProp = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const Login = ({ navigation }: RootNavigationProp) => {
  return (
    <S.ModalContainer>
      <S.ModalContent>
        {/* 닫기 버튼 */}
        <S.Text>건강한 반려생활, DDANG과 함께해요!</S.Text>
          <Dog />
        <S.Wrapper>
      <Icon.Kakao width={335} height={52} style={{ marginRight: 8 }} />
      <ActionButton type="roundedRect" text="카카오 로그인" />
    </S.Wrapper>
      </S.ModalContent>
    </S.ModalContainer>
  );
};  
