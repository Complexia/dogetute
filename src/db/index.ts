import * as mongoose from 'mongoose'
import config from '../config'
//.connect(config.serverDatabase!, {
let db: mongoose.Connection
let uri = "mongodb+srv://remidogetute:butbeforetoolongtheywerethinkingintermsofwavefunctions@dogetutev1mongo.gcxg3.mongodb.net/development?retryWrites=true&w=majority"
export const connectDb = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .catch((err) => console.log(err))

  db = mongoose.connection
  
}

export const disconnectDb = () => {
  if (!db) {
    return
  }

  mongoose.disconnect()
}