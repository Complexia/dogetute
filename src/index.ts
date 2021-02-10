import * as express from 'express'
import * as cors from 'cors'

const app = express()

app.use(cors())
let port = 8080
app.listen(port, () => {
  console.log(`now listening for requests on port ${port}`)
})

export default app