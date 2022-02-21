import { useQuery } from '@apollo/client';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  CardActionArea,
  Stack,
  Avatar,
  LinearProgress,
} from '@mui/material';
import React from 'react';
import { GET_POSTS } from '../../graphql/queries';
import { deepOrange } from '@mui/material/colors';
import PageLayout from '../../components/PageLayout/PageLayout';

const Home = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading)
    return (
      <Box>
        <LinearProgress />
      </Box>
    );

  if (error)
    return (
      <PageLayout>
        <Typography variant="body1">Oops! Something went wrong</Typography>
      </PageLayout>
    );

  return (
    <PageLayout>
      <Grid container spacing={2}>
        {data?.posts.map(({ title, description, postDate, author }, index) => (
          <Grid item lg={12} key={index}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>
                      {author.substring(0, 1)}
                    </Avatar>
                    <Box>
                      <Typography variant="body1">{author}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {postDate}
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography pt={1} variant="h6">
                    {title}
                  </Typography>

                  <Typography pt={1} variant="body1" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};

export default Home;
