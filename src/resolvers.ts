import { books, authors } from './restAPI';

const resolvers = {
  Query: {
    hello: () => 'Hello, GraphQL!',
    getPost: async (_: any, { id }: { id: number }, { dataSources }: any) => {
      return dataSources.myRESTDataSource.getPost(id);
    },
    getBook: (_: any, { id }: { id: number }) => books.find(book => book.id === id),
    getBooks: () => books.map(book => ({ ...book, author: authors.find(author => author.id === book.authorId) })),
  },
};

export default resolvers;
