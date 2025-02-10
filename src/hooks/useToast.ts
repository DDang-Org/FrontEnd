import { RefObject } from 'react';
import Toast from 'react-native-toast-message';
import { Platform, View } from 'react-native';

export const useToast = () => {
  const showFormErrorToast = (message: string, ref: RefObject<View>) => {
    if (ref.current) {
      ref.current.measure((x, y, width, height, pageX, pageY) => {
        const position = { top: pageY - 100, left: pageX + width / 2 };
        Toast.show({
          type: 'formError',
          text1: message,
          visibilityTime: 2000,
          props: { position },
        });
      });
    }
  };

  const successToast = (message: string) => {
    Toast.show({
      type: 'success',
      text1: message,
      visibilityTime: 2000,
      topOffset: Platform.OS === 'ios' ? 70 : 0,
    });
  };

  return { showFormErrorToast, successToast };
};
