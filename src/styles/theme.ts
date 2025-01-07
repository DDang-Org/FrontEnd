export const lightTheme = {
  colors: {
    // Brand Colors
    darken: '#462008',
    default: '#783D16',
    lighten_1: '#ECB99A',
    lighten_2: '#E8DCD4',
    lighten_3: '#F4F0ED',
    sub: '#6CA719',

    // GrayScales
    font_1: '#111111', // 기본 텍스트 색상
    font_2: '#505050',
    font_3: '#767676',
    font_4: '#999999',
    gc_1: '#E5E5EC', // 배경 색상
    gc_2: '#F1F1F5',
    gc_3: '#F7F7FB',
    gc_4: '#FFFFFF', // 가장 밝은 배경
  },
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
    extraBold: '800',
  },
};

export type ThemeType = typeof lightTheme;
