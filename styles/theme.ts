import { adjustHue, darken, desaturate, lighten, opacify } from 'polished';

export const COLORS = {
  primary: '#0500FF',
  secondary: '#BD00FF',
  tertiary: '#00F0FF',
  light: '#FFFFFF',
  dark: '#080715',
  gray: '#D9D9D9',
};

export const GRADIENTS = {
  primaryTitle: `linear-gradient(119deg, ${COLORS.secondary} 14%, ${adjustHue(17, COLORS.tertiary)} 32%, ${COLORS.primary} 48%)`,
};

export const FONTS = {
  primary: 'ppmi',
};

export const FONT_SIZES = {
  sm: '0.8rem',
  base: '1rem',
  xl: '1.25rem',
  '2xl': '1.563rem',
  '3xl': '2rem',
  '4xl': '3.555rem',
  '5xl': '5.333rem',
};
