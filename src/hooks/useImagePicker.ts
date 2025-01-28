import ImageCropPicker from 'react-native-image-crop-picker';

export const useImagePicker = () => {
  const handleImagePicker = async () => {
    const image = await ImageCropPicker.openPicker({
      mediaType: 'photo',
      cropping: true,
      includeBase64: true,
      multiple: false,
      cropperChooseText: '완료',
      cropperCancelText: '취소',
    });
    return image.path;
  };

  const handleCameraPicker = async () => {
    const image = await ImageCropPicker.openCamera({
      mediaType: 'photo',
      cropping: true,
      includeBase64: true,
      multiple: false,
      cropperChooseText: '완료',
      cropperCancelText: '취소',
    });
    return image.path;
  };

  return { handleImagePicker, handleCameraPicker };
};
