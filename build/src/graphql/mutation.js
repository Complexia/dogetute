"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = void 0;
const graphql_1 = require("graphql");
const type_1 = require("./type");
const userResolver_1 = require("./resolver/userResolver");
exports.Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        register: {
            type: type_1.UserType,
            args: {
                email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                firstName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                lastName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                username: { type: graphql_1.GraphQLString },
                password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            },
            resolve: userResolver_1.register,
        },
        login: {
            type: type_1.TokenType,
            args: {
                email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            },
            resolve: userResolver_1.login,
        },
    },
});
//# sourceMappingURL=mutation.js.map