import '@emotion/react';
import { ThemeType } from './src/styles/theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
