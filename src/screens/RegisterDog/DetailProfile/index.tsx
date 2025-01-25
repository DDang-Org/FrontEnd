import { useContext, useState } from 'react';
import { Dimensions, View } from 'react-native';
import * as S from './styles';
import FormInput from '~components/Common/FormInput';
import { GenderSelectButton } from '~components/Common/GenderSelectButton';
import { ActionButton } from '~components/Common/ActionButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
import { TextBold, TextRegular } from '~components/Common/Text';
import { Icon } from '~components/Common/Icons';
import { SearchModal } from '~components/RegisterDog/SearchModal';
import { DogProfileContext, DogProfileType } from '~providers/DogProfileProvider';

type DetailProps = NativeStackScreenProps<RegisterDogParamList, typeof RegisterDogNavigations.DETAIL_PROFILE>;

export const DetailProfile = ({ route }: DetailProps) => {
  const deviceHeight = Dimensions.get('screen').height;
  const { dogProfile, setDogProfile } = useContext(DogProfileContext)!;
  const [isVisible, setIsVisible] = useState(false);

  const updateField = (field: keyof DogProfileType, value: any) => {
    console.log('업데이트 전:', dogProfile);
    setDogProfile(prevState => {
      const newState = { ...prevState, [field]: value };
      console.log('업데이트 후:', newState);
      return newState;
    });
  };

  return (
    <S.DetailProfile>
      <S.TextWrapper deviceHeight={deviceHeight}>
        <TextBold fontSize={24}>반려견의 상세 정보를</TextBold>
        <TextBold fontSize={24}>알려주세요!</TextBold>
      </S.TextWrapper>

      <S.GenderSelectArea>
        <S.GenderButtonWrapper>
          <GenderSelectButton
            gender="MALE"
            isActive={dogProfile.gender === 'MALE'}
            onPress={() => updateField('gender', 'MALE')}
          />
          <GenderSelectButton
            gender="FEMALE"
            isActive={dogProfile.gender === 'FEMALE'}
            onPress={() => updateField('gender', 'FEMALE')}
          />
        </S.GenderButtonWrapper>

        <S.NeuteredCheckButton
          onPress={() => updateField('isNeutered', dogProfile.isNeutered === 'TRUE' ? 'FALSE' : 'TRUE')}
        >
          {dogProfile.isNeutered === 'TRUE' ? <Icon.NeuteredCheck /> : <S.NotChecked />}
          <TextRegular fontSize={17} color={dogProfile.isNeutered === 'TRUE' ? 'font_1' : 'font_3'}>
            중성화했어요
          </TextRegular>
        </S.NeuteredCheckButton>
      </S.GenderSelectArea>

      <View>
        <FormInput value={dogProfile.breed} onPress={() => setIsVisible(true)} placeholder="견종 입력" />
        <FormInput
          value={(dogProfile.weight || '').toString()}
          onChangeText={value => updateField('weight', value)}
          placeholder="몸무게 입력"
          keyboardType="numeric"
        />
      </View>
      <ActionButton text="확인" onPress={() => console.log(dogProfile)} />
      <SearchModal isVisible={isVisible} setIsVisible={setIsVisible} />
    </S.DetailProfile>
  );
};
