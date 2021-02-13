import * as mongoose from 'mongoose'
import * as argon2 from 'argon2'



const Schema = mongoose.Schema

export interface UserInterface extends mongoose.Document {
  email: string
  password: string
  firstName: string
  lastName: string
  username: string
  
}

const UserSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: false }
  },
  { timestamps: true }
)

UserSchema.pre('save', async function(next: mongoose.HookNextFunction) {
  const user: any = this

  if (!user.password) {
    next()
  }

  let hashedPassword = await argon2.hash(user.password)
  user.password = hashedPassword
})

export default mongoose.model<UserInterface>('User', UserSchema)