import { ApolloServer } from 'apollo-server-micro';
import { NextApiRequest, NextApiResponse } from 'next';
import typeDefs from '../../apollo/schema';
// import resolvers from '../../apollo/resolvers';
import { makeExecutableSchema } from '@graphql-tools/schema';

export const schema = makeExecutableSchema({
  typeDefs,
});

const mocks = {
  Query: () => ({
    getTodos: () => [...new Array(6)],
  }),
  Todo: () => ({
    id: 1,
    userId: 1,
    title: 'Todo 1',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    scheduled: false,
    scheduledDate: null,
  }),
};

const server = new ApolloServer({ schema, mocks });

const startServer = server.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await server.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
