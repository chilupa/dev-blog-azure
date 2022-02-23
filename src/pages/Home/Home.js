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
  Alert,
  Container,
  Paper,
} from '@mui/material';
import React from 'react';
import { GET_POSTS } from '../../graphql/queries';
import { deepOrange } from '@mui/material/colors';
import ApiError from '../../components/ApiError/ApiError';
import { useNavigate } from 'react-router-dom';
import Advertisements from '../../components/Advertisements/Advertisements';
import MenuList from '../../components/MenuList/MenuList';

const Home = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading)
    return (
      <Box>
        <LinearProgress />
      </Box>
    );

  if (error) {
    return <ApiError />;
  }

  const handleViewPost = (postId) => {
    navigate(`/view/${postId}`);
  };

  return (
    <Container maxWidth="xl">
      <Box pt={2}>
        <Grid container spacing={2}>
          <Grid item lg={2}>
            <MenuList />
          </Grid>
          <Grid item lg={7}>
            <Grid container spacing={2}>
              {data.getPosts.length > 0 ? (
                data?.getPosts.map(
                  ({ title, description, createdAt, author, id }, index) => (
                    <Grid item lg={12} key={index}>
                      <Card>
                        <CardActionArea onClick={() => handleViewPost(id)}>
                          <CardContent>
                            <Stack direction="row" spacing={2}>
                              <Avatar sx={{ bgcolor: deepOrange[500] }}>
                                {author.substring(0, 1)}
                              </Avatar>
                              <Box>
                                <Typography variant="body1">
                                  {author}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                >
                                  {createdAt}
                                </Typography>
                              </Box>
                            </Stack>
                            <Typography pt={1} variant="h6">
                              {title}
                            </Typography>

                            <Typography
                              pt={1}
                              variant="body1"
                              color="text.secondary"
                            >
                              {description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ),
                )
              ) : (
                <Alert severity="info" sx={{ width: '100%', mt: 1, m: 1 }}>
                  No posts yet. Click on "Create Post" to add new posts.
                </Alert>
              )}
            </Grid>
          </Grid>
          <Grid item lg={3}>
            <Advertisements />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
