import checkoutResolver from "./checkout";

const resolvers = {
  Query: {
    ...checkoutResolver,
  },
  Mutation: {},
};

export default resolvers;
