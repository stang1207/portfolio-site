import '@fontsource/bitter'; // Defaults to weight 400.
import { extendTheme } from '@chakra-ui/react';
import { mode, createBreakpoints } from '@chakra-ui/theme-tools';
const breakpoints = createBreakpoints({
  sm: '28em', //320px
  md: '48em', // 768px
  xl: '80em', // //1280px
  lg: '62em', // 992px
});
const fontSizes = {
  sm: '0.75rem',
  md: '0.875rem',
  lg: '1rem',
  xl: '1.125rem',
};
const fonts = {
  body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
  heading: 'Bitter',
};
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    brand: {
      primary: {
        light: '#79fcf3',
        main: '#66FCF1',
        dark: '#45A29E',
      },
    },
    text: {
      primary: '#ffffff',
    },
    background: {
      primary: {
        light: '#15181f',
        main: '#111319',
        dark: '#0B0C10',
      },
    },
  },
  config,
  fonts,
  fontSizes,
  breakpoints,
  styles: {
    global: {
      body: {
        background: 'background.primary.dark',
        color: 'text.primary',
        maxWidth: '100vw',
        overflowX: 'hidden',
      },
    },
  },
});

export default theme;
