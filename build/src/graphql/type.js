"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenType = exports.UserType = void 0;
const graphql_1 = require("graphql");
//import User from '@local/models/User'
exports.UserType = new graphql_1.GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
        email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        firstName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        lastName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        username: { type: graphql_1.GraphQLString },
        password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
    }),
});
//JWT token for login and registration
exports.TokenType = new graphql_1.GraphQLObjectType({
    name: 'Token',
    fields: () => ({
        token: { type: graphql_1.GraphQLString },
        user: { type: exports.UserType },
    }),
});
//# sourceMappingURL=type.js.map