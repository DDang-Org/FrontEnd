import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

export const useImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImagePicker = async () => {
    const image = await ImageCropPicker.openPicker({
      mediaType: 'photo',
      cropping: true,
      includeBase64: true,
      multiple: false,
      cropperChooseText: '완료',
      cropperCancelText: '취소',
    });
    setSelectedImage(image.path);
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
    setSelectedImage(image.path);
  };

  return { handleImagePicker, handleCameraPicker, selectedImage };
};
