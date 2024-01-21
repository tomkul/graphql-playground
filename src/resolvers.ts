const resolvers = {
  Query: {
    hello: () => 'Hello, GraphQL!',
    getPost: async (_: any, { id }: { id: number }, { dataSources }: any) => {
      return dataSources.myRESTDataSource.getPost(id);
    },
  },
};

export default resolvers;
