"use strict";
// import * as express from 'express'
// import * as cors from 'cors'
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express()
// app.use(cors())
// let port = 8080
// app.listen(port, () => {
//   console.log(`now listening for requests on port ${port}`)
// })
// export default app
require("module-alias/register");
const express = require("express");
const cors = require("cors");
const schema_1 = require("./graphql/schema");
const config_1 = require("./config");
const db_1 = require("./db");
const app = express();
const { graphqlHTTP } = require('express-graphql');
const expressPlayground = require('graphql-playground-middleware-express')
    .default;
db_1.connectDb();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema_1.default,
    graphiql: true,
}));
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));
app.listen(config_1.default.serverPort, () => {
    console.log(`now listening for requests on port ${config_1.default.serverPort}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map