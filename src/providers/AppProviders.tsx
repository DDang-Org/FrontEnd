import { PropsWithChildren } from 'react';
import { EmotionProvider, TanstackQueryProvider } from '~providers/index';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <EmotionProvider>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </EmotionProvider>
  );
};
