import { User } from '../entity/User'
export const UserModel = (): any => {
    
    const sayHello = () => {
        console.log("Hello workd");
    }

    const login = (): any => {

    }

    //todo: pass an object as a parameter from resolvers instead of individual variables
    const register = async (email: string, password: string, firstName: string, lastName:string, username:string) => {
        
        const user = User.create({
            email,
            password,
            firstName,
            lastName,
            username
        })
        
        await user.save()
        
        return user
    }

    return {
        sayHello: sayHello,
        login: login,
        register: register

    }
}