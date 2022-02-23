import React from 'react';
import { Box, Button, colors, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleCreatePost = () => {
    navigate('/create');
  };
  return (
    <Box
      sx={{ backgroundColor: colors.green[400] }}
      pt={3}
      pb={3}
      pl={2}
      data-testid="header"
      display="flex"
      alignItems="center"
    >
      <Typography variant="h5" fontWeight="bold">
        Dev Blog
      </Typography>
      <Box ml="auto" pr={2}>
        <Button onClick={handleCreatePost}>Create Post</Button>
      </Box>
    </Box>
  );
};

export default Header;
