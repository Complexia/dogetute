import * as yup from 'yup'
import * as argon2 from 'argon2'

import User from '@local/models/User'

export const registerRules = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required()
    .matches(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
      'Email has to be of a valid format ie. someone@example.com'
    )
    .test(
        'uniqueUser',
        'This user already exists',
        async (email) => {
          const user = await User.findOne({ email })
          return !user
        }
    ),
    
  
  password: yup
    .string()
    .trim()
    .required()
    .min(8, 'Password is too short')
    .matches(
      /[a-zA-Z0-9@!#%&]/,
      'Password can only contain Latin letters, numbers and/or [@, !, #, %, &].'
    ),

  firstName: yup
    .string()
    .trim()
    .required(),

  lastName: yup
    .string()
    .trim()
    .required(),

  username: yup
    .string()
    .trim()
    .required()
    .min(3, 'username is too short')
    .test(
      'uniqueUser',
      'This user already exists',
      async (username) => {
        const user = await User.findOne({ username })
        return !user
      }
    ),
    
})

export const loginRules = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required()
    .test('emailCheck', 'Invalid email', async (email) => {
      const user = await User.findOne({ email })
      return !!user
    }),
  password: yup
    .string()
    .trim()
    .required()
    .matches(
      /[a-zA-Z0-9@!#%]/,
      'Password can only contain Latin letters, numbers and/or [@, !, #, %].'
    )
    .when('email', (email: string, schema: any) =>
      schema.test({
        test: async (password: string) => {
          const user = await User.findOne({ email })
          let hashedPassword = await argon2.hash(password)
          let valid = false
          if (hashedPassword == user!.password) {
              valid = true
          }
          
          return valid
        },
        message: 'Invalid password',
      })
    ),
})

