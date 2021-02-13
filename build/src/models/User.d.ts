import * as mongoose from 'mongoose';
export interface UserInterface extends mongoose.Document {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    username: string;
}
declare const _default: mongoose.Model<UserInterface>;
export default _default;
