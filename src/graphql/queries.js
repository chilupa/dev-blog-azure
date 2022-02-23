import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      id
      title
      description
      author
      createdAt
    }
  }
`;

export const GET_POST = gql`
  query GetSinglePost($id: ID!) {
    getPost(id: $id) {
      id
      title
      description
      author
      createdAt
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($title: String!, $description: String!) {
    createPost(
      input: {
        title: $title
        description: $description
        createdAt: ""
        author: "Pavan"
      }
    ) {
      id
      title
      description
      author
      createdAt
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      title
    }
  }
`;
