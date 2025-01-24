import { ActionButton } from '~components/Common/ActionButton';
import * as S from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
import { Dimensions, View } from 'react-native';
import { TextBold } from '~components/Common/Text';
import { GenderSelectButton } from '~components/Common/GenderSelectButton';
import FormInput from '~components/Common/FormInput';
import { SearchModal } from '~components/RegisterDog/SearchModal';
import { useState } from 'react';

type DetailProfileProps = NativeStackScreenProps<RegisterDogParamList, typeof RegisterDogNavigations.DETAIL_PROFILE>;

export const DetailProfile = ({ navigation }: DetailProfileProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [breed, setBreed] = useState('');
  const deviceHeight = Dimensions.get('screen').height;

  return (
    <S.DetailProfile>
      <S.TextWrapper deviceHeight={deviceHeight}>
        <TextBold fontSize={24}>반려견의 상세 정보를</TextBold>
        <TextBold fontSize={24}>알려주세요!</TextBold>
      </S.TextWrapper>
      <S.GenderSelectArea>
        <S.GenderButtonWrapper>
          <GenderSelectButton gender="MALE" onPress={() => null} isActive={true} />
          <GenderSelectButton gender="FEMALE" onPress={() => null} isActive={true} />
        </S.GenderButtonWrapper>
      </S.GenderSelectArea>
      <View>
        <FormInput onPress={() => setIsVisible(true)} value={breed} placeholder="견종 입력" />
        <FormInput onChangeText={() => null} value="" placeholder="몸무게 입력" />
      </View>
      <ActionButton onPress={() => null} text="확인" />
      <SearchModal isVisible={isVisible} setIsVisible={setIsVisible} setBreed={setBreed} />
    </S.DetailProfile>
  );
};
