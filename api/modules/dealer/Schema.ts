import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Deck {
    id: String!
  }

  type Card {
    code: String!
    image: String!
    value: Int!
  }

  input DrawInput {
    id: String!
  }

  type Query {
    deck: Deck!
    draw(input: DrawInput!): Card!
  }
`;

export default typeDefs;
