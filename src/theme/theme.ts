'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#425b72',
    },
    secondary: {
      main: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'var(--font-montserrat), Arial, sans-serif',
    h1: {
      fontFamily: 'var(--font-bebas), Arial, sans-serif',
    },
    h2: {
      fontFamily: 'var(--font-bebas), Arial, sans-serif',
    },
    h3: {
      fontFamily: 'var(--font-bebas), Arial, sans-serif',
    },
    h4: {
      fontFamily: 'var(--font-bebas), Arial, sans-serif',
    },
    h5: {
      fontFamily: 'var(--font-bebas), Arial, sans-serif',
    },
    h6: {
      fontFamily: 'var(--font-bebas), Arial, sans-serif',
    },
  },
});

export default theme;
