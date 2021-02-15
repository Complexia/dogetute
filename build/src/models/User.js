"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const argon2 = require("argon2");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: false }
}, { timestamps: true });
UserSchema.pre('save', async function (next) {
    const user = this;
    if (!user.password) {
        next();
    }
    let hashedPassword = await argon2.hash(user.password);
    user.password = hashedPassword;
});
exports.default = mongoose.model('User', UserSchema);
//# sourceMappingURL=User.js.map