import { RefObject } from 'react';
import Toast from 'react-native-toast-message';
import { View } from 'react-native';

export const useToast = () => {
  const showFormErrorToast = (message: string, ref: RefObject<View>, type: string = 'formError') => {
    if (ref.current) {
      ref.current.measure((x, y, width, height, pageX, pageY) => {
        const position = { top: pageY - 100, left: pageX + width / 2 };
        Toast.show({
          type,
          text1: message,
          visibilityTime: 2000,
          props: { position },
        });
      });
    }
  };

  return { showFormErrorToast };
};
