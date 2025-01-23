import { ActionButton } from '~components/Common/ActionButton';
import * as S from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
import { TextBold } from '~components/Common/Text';
import { Dimensions, View } from 'react-native';
import FormInput from '~components/Common/FormInput';
import { Icon } from '~components/Common/Icons';

type BasicProfileProps = NativeStackScreenProps<RegisterDogParamList, typeof RegisterDogNavigations.BASIC_PROFILE>;

export const BasicProfile = ({ navigation }: BasicProfileProps) => {
  const deviceHeight = Dimensions.get('screen').height;
  return (
    <S.BasicProfile>
      <S.TextWrapper deviceHeight={deviceHeight}>
        <TextBold fontSize={24}>반려견의 기본 정보를</TextBold>
        <TextBold fontSize={24}>알려주세요!</TextBold>
      </S.TextWrapper>
      <S.AddImageArea>
        <S.AddImageButton>
          <Icon.AddDogImage />
          <S.AddImageText fontSize={15}>반려견 사진 추가</S.AddImageText>
        </S.AddImageButton>
      </S.AddImageArea>
      <S.InputArea>
        <FormInput onChangeText={() => null} value="" placeholder="이름 입력" />
        <FormInput onPress={() => null} value="" placeholder="생년월일 선택" />
        <FormInput onChangeText={() => null} value="" placeholder="한줄 소개 입력" multiline />
      </S.InputArea>
      <ActionButton
        onPress={() => navigation.navigate(RegisterDogNavigations.DETAIL_PROFILE, { basicInfo: null })}
        text="다음"
      />
    </S.BasicProfile>
  );
};
