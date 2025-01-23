import { TextBold } from '~components/Common/Text';
import * as S from './styles';
import { ActionButton } from '~components/Common/ActionButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';

type RegisterDogProps = NativeStackScreenProps<RegisterDogParamList, typeof RegisterDogNavigations.HOME>;

export const RegisterDog = ({ navigation }: RegisterDogProps) => {
  return (
    <S.RegisterDog>
      <S.TextWrapper>
        <TextBold fontSize={24}>키우는 반려견을 등록하고</TextBold>
        <TextBold fontSize={24}>즐거운 산책을 시작하세요</TextBold>
      </S.TextWrapper>
      <S.ButtonWrapper>
        <S.NavigateBtn onPress={() => navigation.navigate(RegisterDogNavigations.BASIC_PROFILE)}>
          <TextBold fontSize={20}>반려견 프로필</TextBold>
          <TextBold fontSize={20}>추가하기</TextBold>
          <S.Description fontSize={13}>가족에게 받은 초대코드를 입력해야 해요</S.Description>
        </S.NavigateBtn>
        <S.NavigateBtn onPress={() => navigation.navigate(RegisterDogNavigations.INVITE_CODE)}>
          <TextBold fontSize={20}>가족 반려견</TextBold>
          <TextBold fontSize={20}>등록하기</TextBold>
          <S.Description fontSize={13}>가족에게 받은 초대코드를 입력해야 해요</S.Description>
        </S.NavigateBtn>
      </S.ButtonWrapper>
    </S.RegisterDog>
  );
};
