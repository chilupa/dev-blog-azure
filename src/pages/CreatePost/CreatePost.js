import { useMutation } from '@apollo/client';
import { Grid, TextField, Box, Button } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ApiError from '../../components/ApiError/ApiError';
import PageLayout from '../../components/PageLayout/PageLayout';
import { CREATE_POST, GET_POSTS } from '../../graphql/queries';
import { createPostSchema } from '../../validations/createPostSchema';

const CreatePost = () => {
  const navigate = useNavigate();
  const [createPost, { loading, error }] = useMutation(CREATE_POST, {
    refetchQueries: [{ query: GET_POSTS }],
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: createPostSchema,
    onSubmit: (values) => {
      createPost({
        variables: values,
      });
      if (!loading) {
        navigate('/');
      }
    },
  });

  if (error) {
    return <ApiError />;
  }

  return (
    <PageLayout>
      <Box pt={2}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item lg={12}>
              <TextField
                fullWidth
                name="title"
                label="Title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                fullWidth
                multiline
                rows={14}
                name="description"
                label="Description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </Grid>
            <Grid item lg={12}>
              <Button type="submit">Post</Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </PageLayout>
  );
};

export default CreatePost;
