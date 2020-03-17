import { gql } from 'apollo-server';

export const typeDefs = gql`
  input ItemInput {
    slug: String!
    name: String!
  }

  type List {
    id: ID!
    name: String!
    items: [Item!]!
  }

  type Item {
    slug: ID!
    name: String!
  }

  type Query {
    lists: [List!]!
  }

  type Mutation {
    createList(name: String!): List!
    deleteList(id: ID!): ID!
    createListItem(listId: ID!, item: ItemInput!): Item!
    deleteListItem(listId: ID!, slug: ID!): ID!
  }
`;