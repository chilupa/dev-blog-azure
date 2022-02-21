import React from 'react';
import { Box, colors, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      mb={2}
      sx={{ backgroundColor: colors.blue[400] }}
      pt={3}
      pb={3}
      pl={2}
      data-testid="header"
    >
      <Typography variant="h5" fontWeight="bold">
        Dev Blog
      </Typography>
    </Box>
  );
};

export default Header;
