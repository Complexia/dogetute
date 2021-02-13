"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootQuery = void 0;
const graphql = require("graphql");
//import User from '@local/models/User'
const User_1 = require("../models/User");
const type_1 = require("./type");
const validate_token_1 = require("../middlewares/validate-token");
const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql;
exports.RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: type_1.UserType,
            resolve(parent, args, { headers }) {
                const { authorization } = headers;
                const user = validate_token_1.validateToken(authorization);
                return User_1.default.findById(user.id);
            },
        },
        users: {
            type: new GraphQLList(type_1.UserType),
            resolve(parent, args, { headers }) {
                const { authorization } = headers;
                validate_token_1.validateToken(authorization);
                return User_1.default.find();
            },
        },
    },
});
//# sourceMappingURL=query.js.map