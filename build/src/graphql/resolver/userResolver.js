"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const jsonwebtoken = require("jsonwebtoken");
const graphql_1 = require("graphql");
const config_1 = require("../../config");
//import User from '@local/models/User';
const User_1 = require("../../models/User");
const userRules_1 = require("../../rules/userRules");
async function register(parent, args) {
    try {
        await userRules_1.registerRules.validate(args);
        const user = new User_1.default({
            email: args.email,
            firstName: args.firstName,
            lastName: args.lastName,
            username: args.username,
            password: args.password,
        });
        return await user.save();
    }
    catch (err) {
        return new graphql_1.GraphQLError(err);
    }
}
exports.register = register;
async function login(parent, args) {
    try {
        await userRules_1.loginRules.validate(args);
        const email = args.email;
        const user = await User_1.default.findOne({ email });
        if (!user) {
            return { token: '', user: null };
        }
        const token = jsonwebtoken.sign({ id: user.id, email }, config_1.default.jwtSecret, { expiresIn: '1d' });
        return { token, user };
    }
    catch (err) {
        return new graphql_1.GraphQLError(err);
    }
}
exports.login = login;
//# sourceMappingURL=userResolver.js.map