import { useContext, useState } from 'react';
import { Dimensions } from 'react-native';
import * as S from './styles';
import FormInput from '~components/Common/FormInput';
import { Icon } from '~components/Common/Icons';
import { TextBold } from '~components/Common/Text';
import { ActionButton } from '~components/Common/ActionButton';
import DatePicker from 'react-native-date-picker';
import { usePermission } from '~hooks/usePermission';
import { useImagePicker } from '~hooks/useImagePicker';
import { dateToString, stringToDate } from '~utils/dateFormat';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterDogParamList } from '~navigation/RegisterDogNavigator';
import { RegisterDogNavigations } from '~constants/navigations';
import { DogProfileContext, DogProfileType } from '~providers/DogProfileProvider';

type BasicProfileProps = NativeStackScreenProps<RegisterDogParamList, typeof RegisterDogNavigations.BASIC_PROFILE>;

export const BasicProfile = ({ navigation }: BasicProfileProps) => {
  const deviceHeight = Dimensions.get('screen').height;
  const { dogProfile, setDogProfile } = useContext(DogProfileContext)!;
  const [open, setOpen] = useState(false);
  const { requestAndCheckPermission } = usePermission();
  const { handleImagePicker, selectedImage } = useImagePicker();

  const handleAddImageButton = async () => {
    const isGranted = await requestAndCheckPermission('PHOTO');
    if (isGranted) {
      handleImagePicker();
      if (selectedImage) {
        setDogProfile(prev => ({ ...prev, profileImg: selectedImage }));
      }
    }
  };

  const updateField = (key: keyof DogProfileType, value: string) => {
    setDogProfile(prev => ({ ...prev, [key]: value }));
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
        {selectedImage && <S.ImagePreviewer source={{ uri: selectedImage }} resizeMode="cover" />}
      </S.AddImageButton>
      <S.InputArea>
        <FormInput onChangeText={value => updateField('name', value)} value={dogProfile.name} placeholder="이름 입력" />
        <FormInput onPress={() => setOpen(true)} value={dogProfile.birthDate} placeholder="생년월일 선택" />
        <FormInput
          onChangeText={value => updateField('comment', value)}
          value={dogProfile.comment}
          placeholder="한줄 소개 입력"
          multiline
        />
      </S.InputArea>
      <ActionButton
        onPress={() => navigation.navigate(RegisterDogNavigations.DETAIL_PROFILE)}
        text="다음"
        disabled={!dogProfile.name || !dogProfile.birthDate}
      />

      <DatePicker
        title={' '}
        modal
        open={open}
        date={dogProfile.birthDate ? stringToDate(dogProfile.birthDate, '. ') : new Date()}
        onConfirm={date => {
          setOpen(false);
          const formattedDate = dateToString(date, '. ');
          updateField('birthDate', formattedDate);
        }}
        onCancel={() => setOpen(false)}
        mode="date"
        locale="ko"
        confirmText="확인"
        cancelText="취소"
        minimumDate={new Date(2000, 0, 1)}
        maximumDate={new Date()}
      />
    </S.BasicProfile>
  );
};
