import * as graphql from 'graphql'

//import User from '@local/models/User'
import User from '../models/User'

import { UserType} from './type'
import { validateToken } from '../middlewares/validate-token'

const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql

export const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {

    user: {
      type: UserType,
      resolve(parent: any, args: any, { headers }: any) {
        const { authorization } = headers
        const user = validateToken(authorization)

        return User.findById(user.id)
      },
    },
    
    users: {
      type: new GraphQLList(UserType),
      resolve(parent: any, args: any, { headers }: any) {
        const { authorization } = headers
        validateToken(authorization)
        return User.find()
      },
    },
    
  },
})