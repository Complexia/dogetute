import * as _ from 'lodash'
import * as jsonwebtoken from 'jsonwebtoken'
import { GraphQLError } from 'graphql'

import config from '../../config'
//import User from '@local/models/User';

import User, { UserInterface } from '../../models/User'
import { registerRules, loginRules } from '../../rules/userRules'
import { validateToken } from '../../middlewares/validate-token'

type LoginResponse = {
  token: string
  user: UserInterface | null
}

export async function register(
  parent: any,
  args: any
): Promise<UserInterface | Error> {
  try {
    await registerRules.validate(args)

    const user = new User({
      email: args.email,
      firstName: args.firstName,
      lastName: args.lastName,
      username: args.username,
      password: args.password,
    })

    return await user.save()
  } catch (err) {
    return new GraphQLError(err)
  }
}

export async function login(
  parent: any,
  args: any
): Promise<LoginResponse | Error> {
  try {
    await loginRules.validate(args)

    const email = args.email
    const user: UserInterface | null = await User.findOne({ email })

    if (!user) {
      return { token: '', user: null }
    }

    const token = jsonwebtoken.sign(
      { id: user.id, email },
      config.jwtSecret!,
      { expiresIn: '1d' }
    )

    return { token, user }
  } catch (err) {
    return new GraphQLError(err)
  }
}

