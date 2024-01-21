import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
    getPost(id: Int!): Post
    getBook(id: Int!): Book
    getBooks: [Book]
  }

  type Post {
    userId: Int
    id: Int
    title: String
    body: String
  }

    type Book {
      id: Int
      title: String
      author: Author
    }

    type Author {
      id: Int
      name: String
    }
`;

export default typeDefs;