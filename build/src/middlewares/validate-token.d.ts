declare type ValidateResponse = {
    id: string;
    email: string;
    iat: number;
    exp: number;
};
export declare const validateToken: (token: string) => ValidateResponse;
export {};
