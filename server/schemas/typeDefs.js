const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    savedRecipes: [Recipe]!
  }

  type Recipe {
    _id: ID!
    name: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    recipe: [Recipe]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveRecipe(recipeInfo: String!): User
    removeRecipe(recipeInfo: String!): User
  }
`;

module.exports = typeDefs;
