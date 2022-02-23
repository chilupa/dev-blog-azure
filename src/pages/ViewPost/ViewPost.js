import { useQuery } from '@apollo/client';
import { Paper, Box, Typography, Stack, Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import React from 'react';
import { useParams } from 'react-router-dom';
import ApiError from '../../components/ApiError/ApiError';
import PageLayout from '../../components/PageLayout/PageLayout';
import PageLoader from '../../components/PageLoader/PageLoader';
import { GET_POST } from '../../graphql/queries';

const ViewPost = () => {
  const { postId } = useParams();

  const { loading, data, error } = useQuery(GET_POST, {
    variables: { id: postId },
  });

  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    return <ApiError />;
  }

  console.log('data', data);

  return (
    <PageLayout>
      <Box mt={2}>
        <Paper elevation={2} sx={{ height: '80vh' }}>
          <Box p={2}>
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>
                {data.getPost.author.substring(0, 1)}
              </Avatar>
              <Box>
                <Typography variant="body1">{data.getPost.author}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {data.getPost.createdAt}
                </Typography>
              </Box>
            </Stack>
            <Typography pt={2} variant="h4">
              {data.getPost.title}
            </Typography>
            <Typography pt={1} variant="body1" color="textSecondary">
              {data.getPost.description}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </PageLayout>
  );
};

export default ViewPost;
