const { AuthenticationError } = require('apollo-server-express');
    // Recipe ?
const { User, Recipe } = require('../models');
const { signToken } = require('../utils/auth');



const resolvers = {
  // Query
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        console.log(user);
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  // Query


  // Mutations
  Mutation: {
        // Adding a user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
        // Saving a recipe to a a user
    saveRecipe: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedRecipes: recipe._id } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
        // for access to recipes and profiles, login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
        // removing recipe from user
    removeRecipe: async (parent, _id, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedRecipes: recipe._id } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
        // mutations
};
  // resolvers

module.exports = resolvers;