import { ApolloServer } from 'apollo-server';
import { RESTDataSource } from 'apollo-datasource-rest';
import typeDefs from './schema';
import resolvers from './resolvers';

export class MyRESTDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com'; // Replace with your API endpoint
  }

  async getPost(id: number) {
    return this.get(`/posts/${id}`);
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    myRESTDataSource: new MyRESTDataSource(),
  }),
});


export default server;