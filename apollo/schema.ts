import { gql } from '@apollo/client';

const typeDefs = gql`
  scalar Date
  type Account {
    id: ID!
    userId: ID!
    type: String!
    provider: String!
    providerAccountId: String!
    refreshToken: String
    accessToken: String
    expires_at: Int
    token_type: String
    scope: String
    id_token: String
    session_state: String
  }

  type Session {
    id: ID!
    sessionToken: String!
    userId: ID!
    expires: Date!
  }

  type User {
    id: ID!
    name: String
    email: String
    emailVerified: Date
    image: String
    accounts: [Account]
    sessions: [Session]
    todos: [Todo]
  }

  type Todo {
    id: ID!
    userId: ID!
    title: String!
    completed: Boolean!
    createdAt: Date!
    updatedAt: Date!
    scheduled: Boolean!
    scheduledDate: Date
  }

  type Query {
    getSession: Session
    user(id: ID!): User!
    getTodos: [Todo!]!
  }
`;

export default typeDefs;
