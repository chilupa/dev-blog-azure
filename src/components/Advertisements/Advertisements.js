import { Paper, Typography } from '@mui/material';
import React from 'react';

const Advertisements = () => {
  return (
    <>
      <Paper elevation={2}>
        <Typography p={1} variant="h6" color="primary" fontWeight="bold">
          Announcements
        </Typography>
        <Typography variant="body1" pl={1} pb={1}>
          Code Hackathon on 02.22.2022
        </Typography>
        <Typography variant="body2" color="textSecondary" pl={1} pb={1}>
          Unleash your dev skills. Pick any project of your kind and submit by
          03.22.2022.
        </Typography>
      </Paper>

      <Paper sx={{ marginTop: 2 }} elevation={2}>
        <Typography p={1} variant="h6" color="primary" fontWeight="bold">
          Help
        </Typography>
        <Typography variant="body1" pl={1} pb={1}>
          react-redux setup
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          pl={1}
          pb={1}
        ></Typography>
      </Paper>

      <Paper sx={{ marginTop: 2 }} elevation={2}>
        <Typography p={1} variant="h6" color="primary" fontWeight="bold">
          Trending
        </Typography>
        <Typography variant="body1" pl={1} pb={1}>
          #react
        </Typography>
        <Typography variant="body1" pl={1} pb={1}>
          #redux
        </Typography>
        <Typography variant="body1" pl={1} pb={1}>
          #javascript
        </Typography>
        <Typography variant="body1" pl={1} pb={1}>
          #node
        </Typography>
      </Paper>
    </>
  );
};

export default Advertisements;
