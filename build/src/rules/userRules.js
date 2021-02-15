"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRules = exports.registerRules = void 0;
const yup = require("yup");
const argon2 = require("argon2");
const User_1 = require("../models/User");
//User input validation
exports.registerRules = yup.object().shape({
    email: yup
        .string()
        .trim()
        .required()
        .matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, 'Email has to be of a valid format ie. someone@example.com')
        .test('uniqueUser', 'This user already exists', async (email) => {
        const user = await User_1.default.findOne({ email });
        return !user;
    }),
    password: yup
        .string()
        .trim()
        .required()
        .min(8, 'Password is too short')
        .matches(/[a-zA-Z0-9@!#%&]/, 'Password can only contain Latin letters, numbers and/or [@, !, #, %, &].'),
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
        .test('uniqueUser', 'This user already exists', async (username) => {
        const user = await User_1.default.findOne({ username });
        return !user;
    }),
});
exports.loginRules = yup.object().shape({
    email: yup
        .string()
        .trim()
        .required()
        .test('emailCheck', 'Invalid email', async (email) => {
        const user = await User_1.default.findOne({ email });
        return !!user;
    }),
    password: yup
        .string()
        .trim()
        .required()
        .matches(/[a-zA-Z0-9@!#%]/, 'Password can only contain Latin letters, numbers and/or [@, !, #, %].')
        .when('email', (email, schema) => schema.test({
        test: async (password) => {
            let valid = false;
            const user = await User_1.default.findOne({ email });
            if (!user) {
                return valid;
            }
            let hashedPassword = await argon2.hash(password);
            valid = await argon2.verify(user.password, password);
            return valid;
        },
        message: 'Invalid password',
    })),
});
//# sourceMappingURL=userRules.js.map