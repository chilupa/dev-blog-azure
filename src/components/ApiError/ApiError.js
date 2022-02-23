import { Alert } from '@mui/material';
import React from 'react';
import PageLayout from '../PageLayout/PageLayout';

const ApiError = () => {
  return (
    <PageLayout>
      <Alert severity="error">Oops! Something went wrong</Alert>
    </PageLayout>
  );
};

export default ApiError;
