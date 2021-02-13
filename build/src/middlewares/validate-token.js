"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const jsonwebtoken = require("jsonwebtoken");
const config_1 = require("../config");
const validateToken = (token) => {
    return jsonwebtoken.verify(token, config_1.default.jwtSecret);
};
exports.validateToken = validateToken;
//# sourceMappingURL=validate-token.js.map