import { useState, useRef } from 'react';
import { Dimensions, View } from 'react-native';
import * as S from './styles';
import FormInput from '~components/Common/FormInput';
import { GenderSelectButton } from '~components/Common/GenderSelectButton';
import { ActionButton } from '~components/Common/ActionButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
import { TextBold } from '~components/Common/Text';
import { SearchModal } from '~components/RegisterDog/SearchModal';
import { validateDetailProfile } from '~utils/validateDogProfile';
import { useToast } from '~hooks/useToast';
import { dogProfileAtom, DogProfileType } from '~providers/DogProfileProvider';
import { useAtom } from 'jotai';
import { WeightInput } from '~components/Common/WeightInput';
import { NeuteredCheckButton } from '~components/Common/NeuteredCheckButton';

type DetailProps = NativeStackScreenProps<RegisterDogParamList, typeof RegisterDogNavigations.DETAIL_PROFILE>;

export const DetailProfile = ({}: DetailProps) => {
  const [dogProfile, setDogProfile] = useAtom(dogProfileAtom);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { showFormErrorToast } = useToast();
  const confirmButtonRef = useRef<View | null>(null);

  const deviceHeight = Dimensions.get('screen').height;

  const handleClickConfirm = () => {
    const error = validateDetailProfile(dogProfile);
    if (error) {
      showFormErrorToast(error, confirmButtonRef);
      return;
    }
    console.log(dogProfile);
  };

  const updateField = <K extends keyof DogProfileType>(key: K, value: DogProfileType[K]) => {
    setDogProfile({ ...dogProfile, [key]: value });
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
        <NeuteredCheckButton
          onPress={() => updateField('isNeutered', dogProfile.isNeutered === 'TRUE' ? 'FALSE' : 'TRUE')}
          isNeutered={dogProfile.isNeutered}
        />
      </S.GenderSelectArea>

      <View>
        <FormInput value={dogProfile.breed} onPress={() => setIsModalVisible(true)} placeholder="견종 입력" />
        <WeightInput weight={dogProfile.weight} updateField={updateField} />
      </View>
      <S.ActionButtonWrapper ref={confirmButtonRef}>
        <ActionButton
          text="확인"
          onPress={handleClickConfirm}
          bgColor={validateDetailProfile(dogProfile) ? 'gc_1' : 'default'}
        />
      </S.ActionButtonWrapper>
      <SearchModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} setBreed={updateField} />
    </S.DetailProfile>
  );
};
