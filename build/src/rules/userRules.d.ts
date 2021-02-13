import * as yup from 'yup';
export declare const registerRules: yup.ObjectSchema<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    firstName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    lastName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    username: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    firstName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    lastName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    username: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    firstName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    lastName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    username: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>>;
export declare const loginRules: yup.ObjectSchema<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>>;
