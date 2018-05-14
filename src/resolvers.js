const resolvers = {
  Query: {
    stockList: (parent, args, ctx, info) => ctx.db.query.stocks({}, info),
  },
  Mutation: {
    addStock: (parent, { symbol }, ctx, info) =>
      ctx.db.mutation.createStock({ data: { symbol } }, info),
    removeStock: (parent, { symbol }, ctx, info) =>
      ctx.db.mutation.deleteStock({ where: { symbol } }, info),
  },
  Subscription: {
    stockUpdates: {
      subscribe: (parent, args, ctx, info) =>
        ctx.db.subscription.stock({}, info),
    },
  },
};

module.exports = resolvers;
