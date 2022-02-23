import { useMutation, useQuery } from '@apollo/client';
import {
  Paper,
  Box,
  Typography,
  Stack,
  Avatar,
  IconButton,
  Menu,
  ListItemIcon,
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ApiError from '../../components/ApiError/ApiError';
import PageLayout from '../../components/PageLayout/PageLayout';
import PageLoader from '../../components/PageLoader/PageLoader';
import { DELETE_POST, GET_POST, GET_POSTS } from '../../graphql/queries';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import MenuItem from '@mui/material/MenuItem';
import { Delete } from '@mui/icons-material';

const ViewPost = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { postId } = useParams();

  const { loading, data, error } = useQuery(GET_POST, {
    variables: { id: postId },
  });

  const [deletePost, deleteQuery] = useMutation(DELETE_POST, {
    refetchQueries: [{ query: GET_POSTS }],
  });

  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    return <ApiError />;
  }

  const handleShowMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeletePost = () => {
    deletePost({ variables: { id: postId } });
    if (!deleteQuery.loading) {
      navigate('/');
    }
  };

  return (
    <PageLayout>
      <Box mt={2}>
        <Paper elevation={2}>
          <Box p={2}>
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <Avatar sx={{ bgcolor: deepOrange[500] }}>
                  {data.getPost.author.substring(0, 1)}
                </Avatar>
                <Box pl={2}>
                  <Typography variant="body1">{data.getPost.author}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {data.getPost.createdAt}
                  </Typography>
                </Box>
              </Box>

              <Box>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? 'long-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleShowMenu}
                >
                  <MoreVertIcon />
                </IconButton>
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
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={handleDeletePost}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          <Typography variant="body1">Delete</Typography>
        </MenuItem>
      </Menu>
    </PageLayout>
  );
};

export default ViewPost;
