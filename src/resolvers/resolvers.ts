import { User } from '../entity/User'
import { UserModel } from '../models/UserModel'


export const resolvers = {
    
    Query: {
        hello: (_: any, { name }: GQL.IHelloOnQueryArguments) => `Hello ${name || 'World'}`
    },

    Mutation: {
        
        register: async (_: any, { email, password, firstName, lastName, username }: GQL.IRegisterOnMutationArguments) => {
            const userModel = UserModel()
            const user = await userModel.register(email, password, firstName, lastName, username)
            return user
        },

        
    }
}