import { useState, useRef } from 'react';
import { Dimensions, View } from 'react-native';
import * as S from './styles';
import FormInput from '~components/Common/FormInput';
import { GenderSelectButton } from '~components/Common/GenderSelectButton';
import { ActionButton } from '~components/Common/ActionButton';
import { TextBold } from '~components/Common/Text';
import { SearchModal } from '~components/RegisterDog/SearchModal';
import { validateDetailProfile } from '~utils/validateDogProfile';
import { useToast } from '~hooks/useToast';
import { dogProfileAtom, DogProfileType } from '~providers/DogProfileProvider';
import { useAtom } from 'jotai';
import { WeightInput } from '~components/Common/WeightInput';
import { NeuteredCheckButton } from '~components/Common/NeuteredCheckButton';
import { useCreateDog } from '~apis/dog/useDogProfile';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '~navigation/RootNavigator';
import { useAuth } from '~apis/member/useAuth';
import { useThrottle } from '~hooks/useThrottle';
import { HTTPError } from 'ky';

export const DetailProfile = () => {
  const [dogProfile, setDogProfile] = useAtom(dogProfileAtom);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { showFormErrorToast } = useToast();
  const confirmButtonRef = useRef<View | null>(null);
  const registerDog = useCreateDog();
  const navigation = useNavigation<RootStackNavigationProp>();
  const throttle = useThrottle(2000);

  const deviceHeight = Dimensions.get('screen').height;
  const { hasDog } = useAuth();

  const handleClickConfirm = () => {
    const error = validateDetailProfile(dogProfile);
    if (error) {
      showFormErrorToast(error, confirmButtonRef);
      return;
    }

    registerDog.mutate(dogProfile, {
      onSuccess: () => {
        if (hasDog) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'BottomTab' }],
          });
        }
      },
      onError: async error => {
        if (error instanceof HTTPError) {
          const errorData = await error.response.json();
          const errorMessage = errorData.message;
          showFormErrorToast(errorMessage, confirmButtonRef);
        }
        console.error(error);
      },
    });
  };

  const throttleHandleClickConfirm = throttle(handleClickConfirm);

  const updateField = <K extends keyof DogProfileType>(key: K, value: DogProfileType[K]) => {
    setDogProfile(prevState => ({ ...prevState, [key]: value }));
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} enableOnAndroid={true} extraScrollHeight={80}>
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
            onPress={throttleHandleClickConfirm}
            bgColor={validateDetailProfile(dogProfile) ? 'gc_1' : 'default'}
          />
        </S.ActionButtonWrapper>
        <SearchModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} setBreed={updateField} />
      </S.DetailProfile>
    </KeyboardAwareScrollView>
  );
};
