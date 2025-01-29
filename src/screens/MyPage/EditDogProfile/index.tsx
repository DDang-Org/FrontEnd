import { Dimensions, View } from 'react-native';
import * as S from './styles';
import { TextBold, TextRegular } from '~components/Common/Text';
import { useEffect, useRef, useState } from 'react';
import { DogProfileType } from '~providers/DogProfileProvider';
import FormInput from '~components/Common/FormInput';
import DatePicker from 'react-native-date-picker';
import { dateToString, stringToDate } from '~utils/dateFormat';
import { GenderSelectButton } from '~components/Common/GenderSelectButton';
import { Icon } from '~components/Common/Icons';
import { ActionButton } from '~components/Common/ActionButton';
import { validateBasicProfile, validateDetailProfile } from '~utils/validateDogProfile';
import { useToast } from '~hooks/useToast';
import { SearchModal } from '~components/RegisterDog/SearchModal';
import { usePermission } from '~hooks/usePermission';
import { useImagePicker } from '~hooks/useImagePicker';

interface EditDogProfileProps {}

export const EditDogProfile = ({}: EditDogProfileProps) => {
  const [dogProfile, setDogProfile] = useState<DogProfileType>({
    name: '퓨둘',
    profileImg:
      '/Users/wonil/Library/Developer/CoreSimulator/Devices/B3A8DAE7-B6C0-4B43-A42C-1511F074F1D3/data/Containers/Data/Application/4F7A8AFA-2D8E-4121-A252-18530A186BE2/tmp/react-native-image-crop-picker/4BDE37C2-C0F0-473B-9876-2388898723DF.jpg',
    profileImgFile: undefined,
    birthDate: '2024-12-11',
    gender: 'MALE',
    isNeutered: 'FALSE',
    breed: '리트리버',
    weight: 15.64,
    comment: 'hihi',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDatePickerOpen, setisDatePickerOpen] = useState(false);
  const [displayWeight, setDisplayWeight] = useState(dogProfile.weight ? `${dogProfile.weight}kg` : '');
  const { requestAndCheckPermission } = usePermission();
  const { handleImagePicker } = useImagePicker();
  const { showFormErrorToast } = useToast();
  const confirmButtonRef = useRef<View | null>(null);

  const deviceHeight = Dimensions.get('screen').height;

  const updateField = <K extends keyof DogProfileType>(key: K, value: DogProfileType[K]) => {
    setDogProfile({ ...dogProfile, [key]: value });
  };

  const handleClickConfirm = () => {
    const error = validateBasicProfile(dogProfile) || validateDetailProfile(dogProfile);
    if (error) {
      showFormErrorToast(error, confirmButtonRef);
      return;
    }
    console.log(dogProfile);
  };

  const handleAddImageButton = async () => {
    const isGranted = await requestAndCheckPermission('PHOTO');
    if (!isGranted) {
      return;
    }
    const selectedImage = await handleImagePicker();
    updateField('profileImg', selectedImage);
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
      setDisplayWeight(formatted);
    }
  };

  const handleFocusWeightInput = () => {
    if (dogProfile.weight) {
      setDisplayWeight(dogProfile.weight.toString());
    }
  };

  const handleBlurWeightInput = () => {
    if (dogProfile.weight) {
      setDisplayWeight(`${dogProfile.weight}kg`);
    }
  };

  useEffect(() => {
    console.log(dogProfile.profileImg);
  }, [dogProfile.profileImg]);

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
          <FormInput
            value={displayWeight}
            onChangeText={handleChangeWeight}
            placeholder="몸무게 입력"
            keyboardType="numeric"
            onFocus={handleFocusWeightInput}
            onBlur={handleBlurWeightInput}
          />
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
          <S.NeuteredCheckButton
            onPress={() => updateField('isNeutered', dogProfile.isNeutered === 'TRUE' ? 'FALSE' : 'TRUE')}
          >
            {dogProfile.isNeutered === 'TRUE' ? <Icon.NeuteredCheck /> : <S.NotChecked />}
            <TextRegular fontSize={17} color={dogProfile.isNeutered === 'TRUE' ? 'font_1' : 'font_3'}>
              중성화했어요
            </TextRegular>
          </S.NeuteredCheckButton>
        </S.GenderSelectArea>
        <FormInput
          onChangeText={value => updateField('comment', value)}
          value={dogProfile.comment}
          placeholder="한줄 소개 입력"
          multiline
        />
        <S.ActionButtonWrapper ref={confirmButtonRef}>
          <ActionButton
            onPress={handleClickConfirm}
            text="확인"
            disabled={isDatePickerOpen}
            bgColor={validateBasicProfile(dogProfile) && validateDetailProfile(dogProfile) ? 'gc_1' : 'default'}
          />
        </S.ActionButtonWrapper>
        <DatePicker
          title={' '}
          modal
          open={isDatePickerOpen}
          date={dogProfile.birthDate ? stringToDate(dogProfile.birthDate, '. ') : new Date()}
          onConfirm={date => {
            setisDatePickerOpen(false);
            const formattedDate = dateToString(date, '. ');
            updateField('birthDate', formattedDate);
          }}
          onCancel={() => setisDatePickerOpen(false)}
          mode="date"
          locale="ko"
          confirmText="확인"
          cancelText="취소"
          minimumDate={new Date(2000, 0, 1)}
          maximumDate={new Date()}
        />
        <SearchModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} setBreed={updateField} />
      </S.StyledScrollView>
    </S.EditDogProfile>
  );
};
