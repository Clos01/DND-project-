const { gql } = require('apollo-server-express');

const typeDefs =gql`

type Character {
  _id: ID
  name: String
  gender: String
  race: String
  class: String
  background: String
  username: String
}

type User {
  _id: ID
  username: String
  email: String
  characters: [Character]
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    userCharacters(username: String): [Character]
    characterByID(_id: ID!): Character
    allCharacters: [Character]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCharacter(name: String!, gender: String!, race: String!, class: String!, background: String!): Character
    removeCharacter()
}

type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;