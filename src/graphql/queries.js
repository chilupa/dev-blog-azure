import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      title
      description
      author
      postDate
      tags
    }
  }
`;
