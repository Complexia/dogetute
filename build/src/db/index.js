"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectDb = exports.connectDb = void 0;
const mongoose = require("mongoose");
//.connect(config.serverDatabase!, {
let db;
let uri = "mongodb+srv://remidogetute:butbeforetoolongtheywerethinkingintermsofwavefunctions@dogetutev1mongo.gcxg3.mongodb.net/development?retryWrites=true&w=majority";
const connectDb = () => {
    mongoose
        .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
        .catch((err) => console.log(err));
    db = mongoose.connection;
};
exports.connectDb = connectDb;
const disconnectDb = () => {
    if (!db) {
        return;
    }
    mongoose.disconnect();
};
exports.disconnectDb = disconnectDb;
//# sourceMappingURL=index.js.map