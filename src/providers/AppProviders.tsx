import { PropsWithChildren } from 'react';
import { EmotionProvider } from '~providers/EmotionProvider';
import { TanstackQueryProvider } from '~providers/QueryClientProvider';
import { ToastProvider } from '~providers/ToastProvider';
import { WebSocketProvider } from '~providers/WebSocketProvider';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <EmotionProvider>
      <TanstackQueryProvider>
        <WebSocketProvider>
          <ToastProvider>{children}</ToastProvider>
        </WebSocketProvider>
      </TanstackQueryProvider>
    </EmotionProvider>
  );
};
