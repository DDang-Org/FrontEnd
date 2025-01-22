import React from 'react';
import Toast, { BaseToastProps, ToastConfigParams } from 'react-native-toast-message';
import { View } from 'react-native';
import { BaseToast, ErrorToast } from 'react-native-toast-message';
import { FormErrorToast } from '~components/Common/FormErrorToast';

const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#783D16' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontFamily: 'SUIT-Bold',
        fontSize: 13,
      }}
    />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: 'red' }}
      text1Style={{
        fontFamily: 'SUIT-Bold',
        fontSize: 13,
        color: 'red',
      }}
      text2Style={{
        fontFamily: 'SUIT-Bold',
        fontSize: 11,
      }}
    />
  ),
  formError: ({ text1, props }: ToastConfigParams<{ position: { top: number; left: number } }>) => (
    <View
      style={{
        position: 'absolute',
        top: props?.position?.top || 0,
        left: props?.position?.left || 0,
        transform: [{ translateX: '-50%' }],
      }}
    >
      <FormErrorToast message={text1 || ''} />
    </View>
  ),
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    {children}
    <Toast config={toastConfig} />
  </>
);
