import { colors, createTheme, responsiveFontSizes } from '@mui/material';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: colors.green[400],
      },
      secondary: {
        main: colors.grey[900],
      },
    },
    typography: {
      fontFamily: [
        'Ubuntu',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          color: 'secondary',
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          color: 'secondary',
        },
      },
    },
  }),
);
