import { useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import * as S from './styles';
import FormInput from '~components/Common/FormInput';
import { Icon } from '~components/Common/Icons';
import { TextBold } from '~components/Common/Text';
import { ActionButton } from '~components/Common/ActionButton';
import { usePermission } from '~hooks/usePermission';
import { useImagePicker } from '~hooks/useImagePicker';
import { dateToString, stringToDate } from '~utils/dateFormat';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
import { validateBasicProfile } from '~utils/validateDogProfile';
import { useToast } from '~hooks/useToast';
import { useAtom } from 'jotai';
import { dogProfileAtom, DogProfileType } from '~providers/DogProfileProvider';
import { CustomDatePicker } from '~components/Common/CustomDatePicker';

type BasicProfileProps = NativeStackScreenProps<RegisterDogParamList, typeof RegisterDogNavigations.BASIC_PROFILE>;

export const BasicProfile = ({ navigation }: BasicProfileProps) => {
  const [dogProfile, setDogProfile] = useAtom(dogProfileAtom);
  const [isDatePickerOpen, setisDatePickerOpen] = useState(false);
  const { requestAndCheckPermission } = usePermission();
  const { getImageFile, handleImagePicker } = useImagePicker();
  const { showFormErrorToast } = useToast();
  const nextButtonRef = useRef<View | null>(null);

  const deviceHeight = Dimensions.get('screen').height;

  const updateField = <K extends keyof DogProfileType>(key: K, value: DogProfileType[K]) => {
    setDogProfile(prevState => ({ ...prevState, [key]: value }));
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

  const handleClickNext = () => {
    const error = validateBasicProfile(dogProfile);
    if (error) {
      showFormErrorToast(error, nextButtonRef);
      return;
    }
    navigation.navigate(RegisterDogNavigations.DETAIL_PROFILE);
  };

  const handleConfirmDatePicker = (date: Date) => {
    setisDatePickerOpen(false);
    const formattedDate = dateToString(date, '. ');
    updateField('birthDate', formattedDate);
  };

  return (
    <S.BasicProfile>
      <S.TextWrapper deviceHeight={deviceHeight}>
        <TextBold fontSize={24}>반려견의 기본 정보를</TextBold>
        <TextBold fontSize={24}>알려주세요!</TextBold>
      </S.TextWrapper>
      <S.AddImageButton onPress={handleAddImageButton}>
        <Icon.AddDogImage />
        <S.AddImageText fontSize={15}>반려견 사진 추가</S.AddImageText>
        {dogProfile.profileImg && <S.ImagePreviewer source={{ uri: dogProfile.profileImg }} resizeMode="cover" />}
      </S.AddImageButton>
      <S.InputArea>
        <FormInput onChangeText={value => updateField('name', value)} value={dogProfile.name} placeholder="이름 입력" />
        <FormInput onPress={() => setisDatePickerOpen(true)} value={dogProfile.birthDate} placeholder="생년월일 선택" />
        <FormInput
          onChangeText={value => updateField('comment', value)}
          value={dogProfile.comment}
          placeholder="한줄 소개 입력"
          multiline
        />
      </S.InputArea>
      <S.ActionButtonWrapper ref={nextButtonRef}>
        <ActionButton
          onPress={handleClickNext}
          text="다음"
          disabled={isDatePickerOpen}
          bgColor={validateBasicProfile(dogProfile) ? 'gc_1' : 'default'}
        />
      </S.ActionButtonWrapper>
      <CustomDatePicker
        open={isDatePickerOpen}
        date={dogProfile.birthDate ? stringToDate(dogProfile.birthDate, '. ') : new Date()}
        onConfirm={handleConfirmDatePicker}
        onCancel={() => setisDatePickerOpen(false)}
      />
    </S.BasicProfile>
  );
};
