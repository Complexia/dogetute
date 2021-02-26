// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: 'Query';
    hello: string;
    getAllUsers: Array<IUser | null> | null;
  }

  interface IHelloOnQueryArguments {
    name?: string | null;
  }

  interface IUser {
    __typename: 'User';
    email: string;
    password: string;
    username: string | null;
  }

  interface IMutation {
    __typename: 'Mutation';
    register: IUser;
    login: IUser | null;
  }

  interface IRegisterOnMutationArguments {
    email: string;
    password: string;
    username?: string | null;
  }

  interface ILoginOnMutationArguments {
    email: string;
    password: string;
  }
}

// tslint:enable