import * as yup from 'yup';

export const createPostSchema = yup.object({
  title: yup.string().required('Required'),
  description: yup.string().required('Required'),
});
