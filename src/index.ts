const message: string = "Hello, TypeScript!";
console.log(message);

import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';
import { MyRESTDataSource } from './server';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    myRESTDataSource: new MyRESTDataSource(),
  }),
  context: () => ({}), // Ensure an empty context object is provided
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
