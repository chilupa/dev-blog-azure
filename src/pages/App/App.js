import React from 'react';
import { Container, colors, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="lg"
        sx={{ height: '100vh', backgroundColor: colors.grey[50] }}
      >
        <Typography variant="h4">React App</Typography>
        <Typography variant="body1">Start building the app.</Typography>
      </Container>
    </ThemeProvider>
  );
};

export default App;
