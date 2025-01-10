import { PropsWithChildren } from 'react';
import { EmotionProvider } from '~providers/EmotionProvider';
import { TanstackQueryProvider } from '~providers/QueryClientProvider';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <EmotionProvider>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </EmotionProvider>
  );
};
