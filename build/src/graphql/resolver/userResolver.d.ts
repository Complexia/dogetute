import { UserInterface } from '../../models/User';
declare type LoginResponse = {
    token: string;
    user: UserInterface | null;
};
export declare function register(parent: any, args: any): Promise<UserInterface | Error>;
export declare function login(parent: any, args: any): Promise<LoginResponse | Error>;
export {};
