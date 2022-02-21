import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';

const PageLayout = ({ children }) => {
  return <Container maxWidth="md">{children}</Container>;
};

PageLayout.propTypes = {
  children: PropTypes.any,
};

export default PageLayout;
