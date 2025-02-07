import { Platform } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { ImageFileType } from '~types/image-file';

export const useImagePicker = () => {
  const getImageFile = (image: any): ImageFileType => {
    if (!image || !image.path || !image.mime) {
      throw new Error('Invalid image object');
    }

    const file: ImageFileType = {
      uri: Platform.OS === 'android' ? image.path.replace('file://', '') : `file://${image.path}`,
      type: image.mime,
      name: image.path.split('/').pop() || 'unknown.jpg',
    };

    return file;
  };

  const handleImagePicker = async () => {
    const image = await ImageCropPicker.openPicker({
      mediaType: 'photo',
      cropping: true,
      includeBase64: true,
      multiple: false,
      cropperChooseText: '완료',
      cropperCancelText: '취소',
    });

    return image;
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
    return image;
  };

  return { getImageFile, handleImagePicker, handleCameraPicker };
};
