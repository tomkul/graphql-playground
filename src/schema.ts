import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
    getPost(id: Int!): Post
  }

  type Post {
    userId: Int
    id: Int
    title: String
    body: String
  }
`;

export default typeDefs;