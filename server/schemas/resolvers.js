const { User, Character } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      // logged in persons info
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('characters')
          
              return userData;
            }
          
            throw new AuthenticationError('Not logged in');
          },
          // get all users
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('characters')
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('characters')
        },
        characters: async () => {

        },
        character: async () => {

        },
        allCharacters: async () => {

        }
    },
    Mutation: {
      // add a user
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
          
            return { token, user };
          },
      // user login
        login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        
        if (!user) {
            throw new AuthenticationError('Incorrect credentials');
        }
        
        const correctPw = await user.isCorrectPassword(password);
        
        if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
        }
        
        const token = signToken(user);
        return { token, user };
        },
        // add a character
        addCharacter: async (parent, args, context) => {
          if (context.user) {
            const character = await Character.create({ ...args, username: context.user.username });
        
            await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $push: { characters: character._id } },
              { new: true }
            );
        
            return character;
          }
        
          throw new AuthenticationError('You need to be logged in!'); 
        }
    }
}

module.exports = resolvers;