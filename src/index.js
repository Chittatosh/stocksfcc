const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const express = require('express');
const htmlString = require('./htmlString');
const resolvers = require('./resolvers');
require('pretty-error').start();

const logreq = (req, next, color) => {
  console.log(`\x1b[${color}m%s\x1b[0m`, req.url);
  next();
};

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql', // the auto-generated GraphQL schema of the Prisma API
  endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
  // debug: true, // log all GraphQL queries & mutations sent to the Prisma API
});
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({ ...req, db }),
});

const app = server.express;
app.use((req, res, next) => logreq(req, next, '36'));
app.use(express.static('dist'));

app.get('/', (req, res) => res.send(htmlString));

const options = {
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
};
server.start(options, ({ port }) =>
  console.log(`Server is running on http://localhost:${port}`),
);

app.use((req, res, next) => logreq(req, next, '31'));
