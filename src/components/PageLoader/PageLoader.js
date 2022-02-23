import { CircularProgress, Box } from '@mui/material';
import React from 'react';
import PageLayout from '../PageLayout/PageLayout';

const PageLoader = () => {
  return (
    <PageLayout>
      <Box pt={2}>
        <CircularProgress color="secondary" size={24} />
      </Box>
    </PageLayout>
  );
};

export default PageLoader;
