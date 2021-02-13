import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLNonNull,
  } from 'graphql'
  
//import User from '@local/models/User'

export const UserType = new GraphQLObjectType({
name: 'User',
fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: GraphQLString },
    password: { type: new GraphQLNonNull(GraphQLString) },
    
}),
})

//JWT token for login and registration
export const TokenType = new GraphQLObjectType({
name: 'Token',
fields: () => ({
    token: { type: GraphQLString },
    user: { type: UserType },
}),
})