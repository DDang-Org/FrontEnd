import { Alert, Dimensions, View } from 'react-native';
import * as S from './styles';
import { TextBold } from '~components/Common/Text';
import { useEffect, useRef, useState } from 'react';
import { DogProfileType, INITIAL_DOG_PROFILE } from '~providers/DogProfileProvider';
import FormInput from '~components/Common/FormInput';
import { dateToString } from '~utils/dateFormat';
import { GenderSelectButton } from '~components/Common/GenderSelectButton';
import { ActionButton } from '~components/Common/ActionButton';
import { validateBasicProfile, validateDetailProfile } from '~utils/validateDogProfile';
import { useToast } from '~hooks/useToast';
import { SearchModal } from '~components/RegisterDog/SearchModal';
import { usePermission } from '~hooks/usePermission';
import { useImagePicker } from '~hooks/useImagePicker';
import { WeightInput } from '~components/Common/WeightInput';
import { NeuteredCheckButton } from '~components/Common/NeuteredCheckButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDogInfoById } from '~apis/dog/useDogInfoById';
import { useDogProfile } from '~apis/dog/useDogProfile';
import { CustomDatePicker } from '~components/Common/CustomDatePicker';

export const EditDogProfile = () => {
  const route = useRoute();
  const { dogId } = route.params as { dogId: number };
  const targetDogProfile = useDogInfoById({ dogId });
  const [dogProfile, setDogProfile] = useState<DogProfileType>(INITIAL_DOG_PROFILE);
  const { requestAndCheckPermission } = usePermission();
  const { getImageFile, handleImagePicker } = useImagePicker();
  const confirmButtonRef = useRef<View | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDatePickerOpen, setisDatePickerOpen] = useState(false);
  const { showFormErrorToast } = useToast();
  const { updateDog, deleteDog } = useDogProfile(dogId);
  const navigation = useNavigation();

  const deviceHeight = Dimensions.get('screen').height;

  useEffect(() => {
    if (targetDogProfile) {
      setDogProfile({
        name: targetDogProfile.dogName,
        profileImg: targetDogProfile.dogProfileImg,
        birthDate: targetDogProfile.dogBirthDate,
        gender: targetDogProfile.dogGender,
        ...targetDogProfile,
      });
    }
  }, [targetDogProfile]);

  const updateField = <K extends keyof DogProfileType>(key: K, value: DogProfileType[K]) => {
    setDogProfile(prevState => ({ ...prevState, [key]: value }));
  };

  const handleUpdateConfirm = () => {
    const error = validateBasicProfile(dogProfile) || validateDetailProfile(dogProfile);
    if (error) {
      showFormErrorToast(error, confirmButtonRef);
      return;
    }
    updateDog.mutate(dogProfile, {
      onSuccess: () => navigation.goBack(),
    });
  };

  const handleClickDelete = () => {
    Alert.alert('정말로 삭제하시겠습니까?', '삭제된 반려견은 복구할 수 없습니다.', [
      {
        text: '삭제하기',
        onPress: () =>
          deleteDog.mutate(dogId, {
            onSuccess: () => navigation.goBack(),
          }),
      },
      {
        text: '취소',
        style: 'cancel',
      },
    ]);
  };

  const handleAddImageButton = async () => {
    const isGranted = await requestAndCheckPermission('PHOTO');
    if (!isGranted) {
      return;
    }
    const image = await handleImagePicker();
    updateField('profileImg', image.path);
    updateField('profileImgFile', getImageFile(image));
  };

  return (
    <S.EditDogProfile>
      <S.StyledScrollView contentContainerStyle={{ gap: 20, alignItems: 'center' }}>
        <S.TextWrapper deviceHeight={deviceHeight}>
          <TextBold fontSize={24}>반려견 정보 수정</TextBold>
        </S.TextWrapper>
        <S.ImageArea>
          <S.SelectedImageField>
            {dogProfile.profileImg && <S.ImagePreviewer source={{ uri: dogProfile.profileImg }} resizeMode="cover" />}
          </S.SelectedImageField>
          <S.AddImageButton onPress={handleAddImageButton}>
            <TextBold color="gc_4" fontSize={14}>
              사진 선택
            </TextBold>
          </S.AddImageButton>
        </S.ImageArea>
        <S.InputArea>
          <FormInput
            onChangeText={value => updateField('name', value)}
            value={dogProfile.name}
            placeholder="이름 입력"
          />
          <FormInput value={dogProfile.breed} onPress={() => setIsModalVisible(true)} placeholder="견종 입력" />
          <FormInput
            onPress={() => setisDatePickerOpen(true)}
            value={dogProfile.birthDate}
            placeholder="생년월일 선택"
          />
          <WeightInput weight={dogProfile.weight} updateField={updateField} />
        </S.InputArea>
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
        <FormInput
          onChangeText={value => updateField('comment', value)}
          value={dogProfile.comment}
          placeholder="한줄 소개 입력"
          multiline
        />
        <S.ActionButtonWrapper ref={confirmButtonRef}>
          <ActionButton
            onPress={handleUpdateConfirm}
            text="확인"
            disabled={isDatePickerOpen}
            bgColor={validateBasicProfile(dogProfile) && validateDetailProfile(dogProfile) ? 'gc_1' : 'default'}
          />
        </S.ActionButtonWrapper>
        <S.DeleteButton onPress={handleClickDelete}>
          <S.DeleteButtonText fontSize={17}>삭제하기</S.DeleteButtonText>
        </S.DeleteButton>
        <CustomDatePicker
          open={isDatePickerOpen}
          date={new Date()}
          onConfirm={date => {
            setisDatePickerOpen(false);
            const formattedDate = dateToString(date, '. ');
            updateField('birthDate', formattedDate);
          }}
          onCancel={() => setisDatePickerOpen(false)}
        />
        <SearchModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} setBreed={updateField} />
      </S.StyledScrollView>
    </S.EditDogProfile>
  );
};
