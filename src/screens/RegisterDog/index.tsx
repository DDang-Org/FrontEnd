import { TextBold } from '~components/Common/Text';
import * as S from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterDogParamList } from '~navigation/Auth/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
import { Icon } from '~components/Common/Icons';
import { Dimensions, View } from 'react-native';
import { useEffect } from 'react';
import { useResetAtom } from 'jotai/utils';
import { dogProfileAtom } from '~providers/DogProfileProvider';

type RegisterDogProps = NativeStackScreenProps<RegisterDogParamList, typeof RegisterDogNavigations.HOME>;

export const RegisterDog = ({ navigation }: RegisterDogProps) => {
  const resetDogProfile = useResetAtom(dogProfileAtom)!;

  useEffect(() => {
    resetDogProfile();
  }, []);

  const deviceHeight = Dimensions.get('screen').height;
  return (
    <S.RegisterDog>
      <S.OptionBtn>
        <Icon.Option />
      </S.OptionBtn>
      <S.TextWrapper deviceHeight={deviceHeight}>
        <TextBold fontSize={24}>키우는 반려견을 등록하고</TextBold>
        <TextBold fontSize={24}>즐거운 산책을 시작하세요</TextBold>
      </S.TextWrapper>
      <S.ButtonWrapper>
        <S.NavigateBtn onPress={() => navigation.navigate(RegisterDogNavigations.BASIC_PROFILE)}>
          <View>
            <TextBold fontSize={20}>반려견 프로필</TextBold>
            <TextBold fontSize={20}>추가하기</TextBold>
          </View>
          <S.Description fontSize={13}>반려견의 프로필을 등록해주세요</S.Description>
          <S.IconWrapper>
            <Icon.AddDogProfile />
          </S.IconWrapper>
        </S.NavigateBtn>
        <S.NavigateBtn onPress={() => navigation.navigate(RegisterDogNavigations.INVITE_CODE)}>
          <View>
            <TextBold fontSize={20}>가족 반려견</TextBold>
            <TextBold fontSize={20}>등록하기</TextBold>
          </View>
          <S.Description fontSize={13}>가족에게 받은 초대코드를 입력해야 해요</S.Description>
          <S.IconWrapper>
            <Icon.AddFamilyCode />
          </S.IconWrapper>
        </S.NavigateBtn>
      </S.ButtonWrapper>
    </S.RegisterDog>
  );
};
