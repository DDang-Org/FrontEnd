import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '~styles/theme';

export const EmotionProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};
