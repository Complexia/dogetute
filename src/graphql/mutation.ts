import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
  } from 'graphql'
  
  import { UserType, TokenType } from './type'
  import { register, login } from './resolver/userResolver'
 
  
  export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      register: {
        type: UserType,
        args: {
          email: { type: new GraphQLNonNull(GraphQLString) },
          firstName: { type: new GraphQLNonNull(GraphQLString) },
          lastName: { type: new GraphQLNonNull(GraphQLString) },
          username: { type: GraphQLString },
          password: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: register,
      },
      login: {
        type: TokenType,
        args: {
          email: { type: new GraphQLNonNull(GraphQLString) },
          password: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: login,
      },

    },
  })