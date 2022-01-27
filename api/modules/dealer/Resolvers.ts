const resolvers = {
  Query: {
    deck: async (_: any, input: any, { dataSources }) => {
      return await dataSources.dealerApi.deck();
    },
    draw: async (_: any, { input }, { dataSources }) => {
      return await dataSources.dealerApi.draw(input.id);
    },
  },
};

export default resolvers;
