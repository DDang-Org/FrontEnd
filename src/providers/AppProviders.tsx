import { PropsWithChildren } from 'react';
import { EmotionProvider } from '~providers/EmotionProvider';
import { TanstackQueryProvider } from '~providers/QueryClientProvider';
import { ToastProvider } from '~providers/ToastProvider';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <EmotionProvider>
      <TanstackQueryProvider>
        <ToastProvider>{children}</ToastProvider>
      </TanstackQueryProvider>
    </EmotionProvider>
  );
};
