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

export const DetailProfile = ({}: DetailProps) => {
  const { dogProfile, setDogProfile } = useContext(DogProfileContext)!;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [displayWeight, setDisplayWeight] = useState(dogProfile.weight ? `${dogProfile.weight}kg` : '');
  const [inputType, setInputType] = useState('text');

  const deviceHeight = Dimensions.get('screen').height;

  const updateField = <key extends keyof DogProfileType>(key: key, value: DogProfileType[key]) => {
    setDogProfile(prev => ({ ...prev, [key]: value }));
  };

  const handleChangeWeight = (value: string) => {
    if (value === '') {
      updateField('weight', 0);
      setDisplayWeight('');
      return;
    }
    if (/^\d*\.?\d*$/.test(value)) {
      const formatted = value.includes('.') ? value.match(/^\d*\.?\d{0,2}/)![0] : value;
      updateField('weight', Number(formatted));
      setDisplayWeight(inputType === 'number' ? formatted : `${formatted}kg`);
    }
  };

  const handleFocusWeightInput = () => {
    setInputType('number');
    if (dogProfile.weight) {
      setDisplayWeight(dogProfile.weight.toString());
    }
  };

  const handleBlurWeightInput = () => {
    setInputType('text');
    if (dogProfile.weight) {
      setDisplayWeight(`${dogProfile.weight}kg`);
    }
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
        <FormInput value={dogProfile.breed} onPress={() => setIsModalVisible(true)} placeholder="견종 입력" />
        <FormInput
          value={displayWeight}
          onChangeText={handleChangeWeight}
          placeholder="몸무게 입력"
          keyboardType="numeric"
          onFocus={handleFocusWeightInput}
          onBlur={handleBlurWeightInput}
        />
      </View>
      <ActionButton text="확인" onPress={() => console.log(dogProfile)} />
      <SearchModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} setBreed={updateField} />
    </S.DetailProfile>
  );
};
