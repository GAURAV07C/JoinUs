
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventRegistration
 * 
 */
export type EventRegistration = $Result.DefaultSelection<Prisma.$EventRegistrationPayload>
/**
 * Model EventForm
 * 
 */
export type EventForm = $Result.DefaultSelection<Prisma.$EventFormPayload>
/**
 * Model FormSubmission
 * 
 */
export type FormSubmission = $Result.DefaultSelection<Prisma.$FormSubmissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ORGANIZER: 'ORGANIZER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  SUSPENDED: 'SUSPENDED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const EventType: {
  COLLEGE: 'COLLEGE',
  PRIVATE: 'PRIVATE'
};

export type EventType = (typeof EventType)[keyof typeof EventType]


export const EventStatus: {
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  PUBLISHED: 'PUBLISHED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED',
  REJECTED: 'REJECTED'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]


export const RegistrationStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  ATTENDED: 'ATTENDED'
};

export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

export type RegistrationStatus = $Enums.RegistrationStatus

export const RegistrationStatus: typeof $Enums.RegistrationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventRegistration`: Exposes CRUD operations for the **EventRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventRegistrations
    * const eventRegistrations = await prisma.eventRegistration.findMany()
    * ```
    */
  get eventRegistration(): Prisma.EventRegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventForm`: Exposes CRUD operations for the **EventForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventForms
    * const eventForms = await prisma.eventForm.findMany()
    * ```
    */
  get eventForm(): Prisma.EventFormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formSubmission`: Exposes CRUD operations for the **FormSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormSubmissions
    * const formSubmissions = await prisma.formSubmission.findMany()
    * ```
    */
  get formSubmission(): Prisma.FormSubmissionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Event: 'Event',
    EventRegistration: 'EventRegistration',
    EventForm: 'EventForm',
    FormSubmission: 'FormSubmission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "event" | "eventRegistration" | "eventForm" | "formSubmission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventRegistration: {
        payload: Prisma.$EventRegistrationPayload<ExtArgs>
        fields: Prisma.EventRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventRegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventRegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          findFirst: {
            args: Prisma.EventRegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventRegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          findMany: {
            args: Prisma.EventRegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>[]
          }
          create: {
            args: Prisma.EventRegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          createMany: {
            args: Prisma.EventRegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventRegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>[]
          }
          delete: {
            args: Prisma.EventRegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          update: {
            args: Prisma.EventRegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.EventRegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventRegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventRegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>[]
          }
          upsert: {
            args: Prisma.EventRegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRegistrationPayload>
          }
          aggregate: {
            args: Prisma.EventRegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventRegistration>
          }
          groupBy: {
            args: Prisma.EventRegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventRegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<EventRegistrationCountAggregateOutputType> | number
          }
        }
      }
      EventForm: {
        payload: Prisma.$EventFormPayload<ExtArgs>
        fields: Prisma.EventFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormPayload>
          }
          findFirst: {
            args: Prisma.EventFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormPayload>
          }
          findMany: {
            args: Prisma.EventFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormPayload>[]
          }
          create: {
            args: Prisma.EventFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormPayload>
          }
          createMany: {
            args: Prisma.EventFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormPayload>[]
          }
          delete: {
            args: Prisma.EventFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormPayload>
          }
          update: {
            args: Prisma.EventFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormPayload>
          }
          deleteMany: {
            args: Prisma.EventFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormPayload>[]
          }
          upsert: {
            args: Prisma.EventFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormPayload>
          }
          aggregate: {
            args: Prisma.EventFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventForm>
          }
          groupBy: {
            args: Prisma.EventFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventFormCountArgs<ExtArgs>
            result: $Utils.Optional<EventFormCountAggregateOutputType> | number
          }
        }
      }
      FormSubmission: {
        payload: Prisma.$FormSubmissionPayload<ExtArgs>
        fields: Prisma.FormSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          findFirst: {
            args: Prisma.FormSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          findMany: {
            args: Prisma.FormSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[]
          }
          create: {
            args: Prisma.FormSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          createMany: {
            args: Prisma.FormSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[]
          }
          delete: {
            args: Prisma.FormSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          update: {
            args: Prisma.FormSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.FormSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.FormSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionPayload>
          }
          aggregate: {
            args: Prisma.FormSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormSubmission>
          }
          groupBy: {
            args: Prisma.FormSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<FormSubmissionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    event?: EventOmit
    eventRegistration?: EventRegistrationOmit
    eventForm?: EventFormOmit
    formSubmission?: FormSubmissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    organizedEvents: number
    registrations: number
    formSubmissions: number
    approvedUsers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizedEvents?: boolean | UserCountOutputTypeCountOrganizedEventsArgs
    registrations?: boolean | UserCountOutputTypeCountRegistrationsArgs
    formSubmissions?: boolean | UserCountOutputTypeCountFormSubmissionsArgs
    approvedUsers?: boolean | UserCountOutputTypeCountApprovedUsersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRegistrationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFormSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormSubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    registrations: number
    formSubmissions: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | EventCountOutputTypeCountRegistrationsArgs
    formSubmissions?: boolean | EventCountOutputTypeCountFormSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRegistrationWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountFormSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormSubmissionWhereInput
  }


  /**
   * Count Type EventFormCountOutputType
   */

  export type EventFormCountOutputType = {
    submissions: number
  }

  export type EventFormCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | EventFormCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * EventFormCountOutputType without action
   */
  export type EventFormCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormCountOutputType
     */
    select?: EventFormCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventFormCountOutputType without action
   */
  export type EventFormCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormSubmissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    college: string | null
    department: string | null
    year: string | null
    approvedAt: Date | null
    approvedBy: string | null
    rejectionReason: string | null
    suspensionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    college: string | null
    department: string | null
    year: string | null
    approvedAt: Date | null
    approvedBy: string | null
    rejectionReason: string | null
    suspensionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    avatar: number
    password: number
    role: number
    status: number
    college: number
    department: number
    year: number
    approvedAt: number
    approvedBy: number
    rejectionReason: number
    suspensionReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    avatar?: true
    password?: true
    role?: true
    status?: true
    college?: true
    department?: true
    year?: true
    approvedAt?: true
    approvedBy?: true
    rejectionReason?: true
    suspensionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    avatar?: true
    password?: true
    role?: true
    status?: true
    college?: true
    department?: true
    year?: true
    approvedAt?: true
    approvedBy?: true
    rejectionReason?: true
    suspensionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    avatar?: true
    password?: true
    role?: true
    status?: true
    college?: true
    department?: true
    year?: true
    approvedAt?: true
    approvedBy?: true
    rejectionReason?: true
    suspensionReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    avatar: string | null
    password: string | null
    role: $Enums.UserRole
    status: $Enums.UserStatus
    college: string | null
    department: string | null
    year: string | null
    approvedAt: Date | null
    approvedBy: string | null
    rejectionReason: string | null
    suspensionReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    college?: boolean
    department?: boolean
    year?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    rejectionReason?: boolean
    suspensionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizedEvents?: boolean | User$organizedEventsArgs<ExtArgs>
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    formSubmissions?: boolean | User$formSubmissionsArgs<ExtArgs>
    approvedUsers?: boolean | User$approvedUsersArgs<ExtArgs>
    approver?: boolean | User$approverArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    college?: boolean
    department?: boolean
    year?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    rejectionReason?: boolean
    suspensionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    approver?: boolean | User$approverArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    college?: boolean
    department?: boolean
    year?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    rejectionReason?: boolean
    suspensionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    approver?: boolean | User$approverArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    college?: boolean
    department?: boolean
    year?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    rejectionReason?: boolean
    suspensionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "avatar" | "password" | "role" | "status" | "college" | "department" | "year" | "approvedAt" | "approvedBy" | "rejectionReason" | "suspensionReason" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizedEvents?: boolean | User$organizedEventsArgs<ExtArgs>
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    formSubmissions?: boolean | User$formSubmissionsArgs<ExtArgs>
    approvedUsers?: boolean | User$approvedUsersArgs<ExtArgs>
    approver?: boolean | User$approverArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approver?: boolean | User$approverArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approver?: boolean | User$approverArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organizedEvents: Prisma.$EventPayload<ExtArgs>[]
      registrations: Prisma.$EventRegistrationPayload<ExtArgs>[]
      formSubmissions: Prisma.$FormSubmissionPayload<ExtArgs>[]
      approvedUsers: Prisma.$UserPayload<ExtArgs>[]
      approver: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      avatar: string | null
      password: string | null
      role: $Enums.UserRole
      status: $Enums.UserStatus
      college: string | null
      department: string | null
      year: string | null
      approvedAt: Date | null
      approvedBy: string | null
      rejectionReason: string | null
      suspensionReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizedEvents<T extends User$organizedEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$organizedEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registrations<T extends User$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    formSubmissions<T extends User$formSubmissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$formSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvedUsers<T extends User$approvedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$approvedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approver<T extends User$approverArgs<ExtArgs> = {}>(args?: Subset<T, User$approverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly college: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly year: FieldRef<"User", 'String'>
    readonly approvedAt: FieldRef<"User", 'DateTime'>
    readonly approvedBy: FieldRef<"User", 'String'>
    readonly rejectionReason: FieldRef<"User", 'String'>
    readonly suspensionReason: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.organizedEvents
   */
  export type User$organizedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.registrations
   */
  export type User$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    where?: EventRegistrationWhereInput
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    cursor?: EventRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventRegistrationScalarFieldEnum | EventRegistrationScalarFieldEnum[]
  }

  /**
   * User.formSubmissions
   */
  export type User$formSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    where?: FormSubmissionWhereInput
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    cursor?: FormSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * User.approvedUsers
   */
  export type User$approvedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.approver
   */
  export type User$approverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    price: number | null
    maxAttendees: number | null
  }

  export type EventSumAggregateOutputType = {
    price: number | null
    maxAttendees: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    date: string | null
    time: string | null
    venue: string | null
    city: string | null
    state: string | null
    address: string | null
    posterUrl: string | null
    type: $Enums.EventType | null
    isPaid: boolean | null
    price: number | null
    maxAttendees: number | null
    status: $Enums.EventStatus | null
    featured: boolean | null
    organizerId: string | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    date: string | null
    time: string | null
    venue: string | null
    city: string | null
    state: string | null
    address: string | null
    posterUrl: string | null
    type: $Enums.EventType | null
    isPaid: boolean | null
    price: number | null
    maxAttendees: number | null
    status: $Enums.EventStatus | null
    featured: boolean | null
    organizerId: string | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    description: number
    date: number
    time: number
    venue: number
    city: number
    state: number
    address: number
    posterUrl: number
    type: number
    isPaid: number
    price: number
    maxAttendees: number
    status: number
    featured: number
    tags: number
    organizerId: number
    rejectionReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    price?: true
    maxAttendees?: true
  }

  export type EventSumAggregateInputType = {
    price?: true
    maxAttendees?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    date?: true
    time?: true
    venue?: true
    city?: true
    state?: true
    address?: true
    posterUrl?: true
    type?: true
    isPaid?: true
    price?: true
    maxAttendees?: true
    status?: true
    featured?: true
    organizerId?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    date?: true
    time?: true
    venue?: true
    city?: true
    state?: true
    address?: true
    posterUrl?: true
    type?: true
    isPaid?: true
    price?: true
    maxAttendees?: true
    status?: true
    featured?: true
    organizerId?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    date?: true
    time?: true
    venue?: true
    city?: true
    state?: true
    address?: true
    posterUrl?: true
    type?: true
    isPaid?: true
    price?: true
    maxAttendees?: true
    status?: true
    featured?: true
    tags?: true
    organizerId?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    name: string
    description: string
    date: string
    time: string
    venue: string
    city: string
    state: string
    address: string | null
    posterUrl: string | null
    type: $Enums.EventType
    isPaid: boolean
    price: number
    maxAttendees: number
    status: $Enums.EventStatus
    featured: boolean
    tags: string[]
    organizerId: string
    rejectionReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    date?: boolean
    time?: boolean
    venue?: boolean
    city?: boolean
    state?: boolean
    address?: boolean
    posterUrl?: boolean
    type?: boolean
    isPaid?: boolean
    price?: boolean
    maxAttendees?: boolean
    status?: boolean
    featured?: boolean
    tags?: boolean
    organizerId?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    registrations?: boolean | Event$registrationsArgs<ExtArgs>
    eventForm?: boolean | Event$eventFormArgs<ExtArgs>
    formSubmissions?: boolean | Event$formSubmissionsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    date?: boolean
    time?: boolean
    venue?: boolean
    city?: boolean
    state?: boolean
    address?: boolean
    posterUrl?: boolean
    type?: boolean
    isPaid?: boolean
    price?: boolean
    maxAttendees?: boolean
    status?: boolean
    featured?: boolean
    tags?: boolean
    organizerId?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    date?: boolean
    time?: boolean
    venue?: boolean
    city?: boolean
    state?: boolean
    address?: boolean
    posterUrl?: boolean
    type?: boolean
    isPaid?: boolean
    price?: boolean
    maxAttendees?: boolean
    status?: boolean
    featured?: boolean
    tags?: boolean
    organizerId?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    date?: boolean
    time?: boolean
    venue?: boolean
    city?: boolean
    state?: boolean
    address?: boolean
    posterUrl?: boolean
    type?: boolean
    isPaid?: boolean
    price?: boolean
    maxAttendees?: boolean
    status?: boolean
    featured?: boolean
    tags?: boolean
    organizerId?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "date" | "time" | "venue" | "city" | "state" | "address" | "posterUrl" | "type" | "isPaid" | "price" | "maxAttendees" | "status" | "featured" | "tags" | "organizerId" | "rejectionReason" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    registrations?: boolean | Event$registrationsArgs<ExtArgs>
    eventForm?: boolean | Event$eventFormArgs<ExtArgs>
    formSubmissions?: boolean | Event$formSubmissionsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      organizer: Prisma.$UserPayload<ExtArgs>
      registrations: Prisma.$EventRegistrationPayload<ExtArgs>[]
      eventForm: Prisma.$EventFormPayload<ExtArgs> | null
      formSubmissions: Prisma.$FormSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      date: string
      time: string
      venue: string
      city: string
      state: string
      address: string | null
      posterUrl: string | null
      type: $Enums.EventType
      isPaid: boolean
      price: number
      maxAttendees: number
      status: $Enums.EventStatus
      featured: boolean
      tags: string[]
      organizerId: string
      rejectionReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registrations<T extends Event$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Event$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventForm<T extends Event$eventFormArgs<ExtArgs> = {}>(args?: Subset<T, Event$eventFormArgs<ExtArgs>>): Prisma__EventFormClient<$Result.GetResult<Prisma.$EventFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    formSubmissions<T extends Event$formSubmissionsArgs<ExtArgs> = {}>(args?: Subset<T, Event$formSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly name: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'String'>
    readonly time: FieldRef<"Event", 'String'>
    readonly venue: FieldRef<"Event", 'String'>
    readonly city: FieldRef<"Event", 'String'>
    readonly state: FieldRef<"Event", 'String'>
    readonly address: FieldRef<"Event", 'String'>
    readonly posterUrl: FieldRef<"Event", 'String'>
    readonly type: FieldRef<"Event", 'EventType'>
    readonly isPaid: FieldRef<"Event", 'Boolean'>
    readonly price: FieldRef<"Event", 'Float'>
    readonly maxAttendees: FieldRef<"Event", 'Int'>
    readonly status: FieldRef<"Event", 'EventStatus'>
    readonly featured: FieldRef<"Event", 'Boolean'>
    readonly tags: FieldRef<"Event", 'String[]'>
    readonly organizerId: FieldRef<"Event", 'String'>
    readonly rejectionReason: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.registrations
   */
  export type Event$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    where?: EventRegistrationWhereInput
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    cursor?: EventRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventRegistrationScalarFieldEnum | EventRegistrationScalarFieldEnum[]
  }

  /**
   * Event.eventForm
   */
  export type Event$eventFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventForm
     */
    select?: EventFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventForm
     */
    omit?: EventFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormInclude<ExtArgs> | null
    where?: EventFormWhereInput
  }

  /**
   * Event.formSubmissions
   */
  export type Event$formSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    where?: FormSubmissionWhereInput
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    cursor?: FormSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventRegistration
   */

  export type AggregateEventRegistration = {
    _count: EventRegistrationCountAggregateOutputType | null
    _min: EventRegistrationMinAggregateOutputType | null
    _max: EventRegistrationMaxAggregateOutputType | null
  }

  export type EventRegistrationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    status: $Enums.RegistrationStatus | null
    qrCode: string | null
    attendedAt: Date | null
    notes: string | null
    registeredAt: Date | null
    updatedAt: Date | null
  }

  export type EventRegistrationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    status: $Enums.RegistrationStatus | null
    qrCode: string | null
    attendedAt: Date | null
    notes: string | null
    registeredAt: Date | null
    updatedAt: Date | null
  }

  export type EventRegistrationCountAggregateOutputType = {
    id: number
    userId: number
    eventId: number
    status: number
    qrCode: number
    attendedAt: number
    notes: number
    registeredAt: number
    updatedAt: number
    _all: number
  }


  export type EventRegistrationMinAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    status?: true
    qrCode?: true
    attendedAt?: true
    notes?: true
    registeredAt?: true
    updatedAt?: true
  }

  export type EventRegistrationMaxAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    status?: true
    qrCode?: true
    attendedAt?: true
    notes?: true
    registeredAt?: true
    updatedAt?: true
  }

  export type EventRegistrationCountAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    status?: true
    qrCode?: true
    attendedAt?: true
    notes?: true
    registeredAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventRegistration to aggregate.
     */
    where?: EventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventRegistrations
    **/
    _count?: true | EventRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventRegistrationMaxAggregateInputType
  }

  export type GetEventRegistrationAggregateType<T extends EventRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateEventRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventRegistration[P]>
      : GetScalarType<T[P], AggregateEventRegistration[P]>
  }




  export type EventRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRegistrationWhereInput
    orderBy?: EventRegistrationOrderByWithAggregationInput | EventRegistrationOrderByWithAggregationInput[]
    by: EventRegistrationScalarFieldEnum[] | EventRegistrationScalarFieldEnum
    having?: EventRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventRegistrationCountAggregateInputType | true
    _min?: EventRegistrationMinAggregateInputType
    _max?: EventRegistrationMaxAggregateInputType
  }

  export type EventRegistrationGroupByOutputType = {
    id: string
    userId: string
    eventId: string
    status: $Enums.RegistrationStatus
    qrCode: string
    attendedAt: Date | null
    notes: string | null
    registeredAt: Date
    updatedAt: Date
    _count: EventRegistrationCountAggregateOutputType | null
    _min: EventRegistrationMinAggregateOutputType | null
    _max: EventRegistrationMaxAggregateOutputType | null
  }

  type GetEventRegistrationGroupByPayload<T extends EventRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], EventRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type EventRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    status?: boolean
    qrCode?: boolean
    attendedAt?: boolean
    notes?: boolean
    registeredAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRegistration"]>

  export type EventRegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    status?: boolean
    qrCode?: boolean
    attendedAt?: boolean
    notes?: boolean
    registeredAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRegistration"]>

  export type EventRegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    status?: boolean
    qrCode?: boolean
    attendedAt?: boolean
    notes?: boolean
    registeredAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRegistration"]>

  export type EventRegistrationSelectScalar = {
    id?: boolean
    userId?: boolean
    eventId?: boolean
    status?: boolean
    qrCode?: boolean
    attendedAt?: boolean
    notes?: boolean
    registeredAt?: boolean
    updatedAt?: boolean
  }

  export type EventRegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventId" | "status" | "qrCode" | "attendedAt" | "notes" | "registeredAt" | "updatedAt", ExtArgs["result"]["eventRegistration"]>
  export type EventRegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventRegistrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventRegistrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventRegistration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      eventId: string
      status: $Enums.RegistrationStatus
      qrCode: string
      attendedAt: Date | null
      notes: string | null
      registeredAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventRegistration"]>
    composites: {}
  }

  type EventRegistrationGetPayload<S extends boolean | null | undefined | EventRegistrationDefaultArgs> = $Result.GetResult<Prisma.$EventRegistrationPayload, S>

  type EventRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventRegistrationCountAggregateInputType | true
    }

  export interface EventRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventRegistration'], meta: { name: 'EventRegistration' } }
    /**
     * Find zero or one EventRegistration that matches the filter.
     * @param {EventRegistrationFindUniqueArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventRegistrationFindUniqueArgs>(args: SelectSubset<T, EventRegistrationFindUniqueArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventRegistration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventRegistrationFindUniqueOrThrowArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventRegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, EventRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationFindFirstArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventRegistrationFindFirstArgs>(args?: SelectSubset<T, EventRegistrationFindFirstArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationFindFirstOrThrowArgs} args - Arguments to find a EventRegistration
     * @example
     * // Get one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventRegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, EventRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventRegistrations
     * const eventRegistrations = await prisma.eventRegistration.findMany()
     * 
     * // Get first 10 EventRegistrations
     * const eventRegistrations = await prisma.eventRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventRegistrationWithIdOnly = await prisma.eventRegistration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventRegistrationFindManyArgs>(args?: SelectSubset<T, EventRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventRegistration.
     * @param {EventRegistrationCreateArgs} args - Arguments to create a EventRegistration.
     * @example
     * // Create one EventRegistration
     * const EventRegistration = await prisma.eventRegistration.create({
     *   data: {
     *     // ... data to create a EventRegistration
     *   }
     * })
     * 
     */
    create<T extends EventRegistrationCreateArgs>(args: SelectSubset<T, EventRegistrationCreateArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventRegistrations.
     * @param {EventRegistrationCreateManyArgs} args - Arguments to create many EventRegistrations.
     * @example
     * // Create many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventRegistrationCreateManyArgs>(args?: SelectSubset<T, EventRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventRegistrations and returns the data saved in the database.
     * @param {EventRegistrationCreateManyAndReturnArgs} args - Arguments to create many EventRegistrations.
     * @example
     * // Create many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventRegistrations and only return the `id`
     * const eventRegistrationWithIdOnly = await prisma.eventRegistration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventRegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, EventRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventRegistration.
     * @param {EventRegistrationDeleteArgs} args - Arguments to delete one EventRegistration.
     * @example
     * // Delete one EventRegistration
     * const EventRegistration = await prisma.eventRegistration.delete({
     *   where: {
     *     // ... filter to delete one EventRegistration
     *   }
     * })
     * 
     */
    delete<T extends EventRegistrationDeleteArgs>(args: SelectSubset<T, EventRegistrationDeleteArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventRegistration.
     * @param {EventRegistrationUpdateArgs} args - Arguments to update one EventRegistration.
     * @example
     * // Update one EventRegistration
     * const eventRegistration = await prisma.eventRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventRegistrationUpdateArgs>(args: SelectSubset<T, EventRegistrationUpdateArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventRegistrations.
     * @param {EventRegistrationDeleteManyArgs} args - Arguments to filter EventRegistrations to delete.
     * @example
     * // Delete a few EventRegistrations
     * const { count } = await prisma.eventRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventRegistrationDeleteManyArgs>(args?: SelectSubset<T, EventRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventRegistrationUpdateManyArgs>(args: SelectSubset<T, EventRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventRegistrations and returns the data updated in the database.
     * @param {EventRegistrationUpdateManyAndReturnArgs} args - Arguments to update many EventRegistrations.
     * @example
     * // Update many EventRegistrations
     * const eventRegistration = await prisma.eventRegistration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventRegistrations and only return the `id`
     * const eventRegistrationWithIdOnly = await prisma.eventRegistration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventRegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, EventRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventRegistration.
     * @param {EventRegistrationUpsertArgs} args - Arguments to update or create a EventRegistration.
     * @example
     * // Update or create a EventRegistration
     * const eventRegistration = await prisma.eventRegistration.upsert({
     *   create: {
     *     // ... data to create a EventRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventRegistration we want to update
     *   }
     * })
     */
    upsert<T extends EventRegistrationUpsertArgs>(args: SelectSubset<T, EventRegistrationUpsertArgs<ExtArgs>>): Prisma__EventRegistrationClient<$Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationCountArgs} args - Arguments to filter EventRegistrations to count.
     * @example
     * // Count the number of EventRegistrations
     * const count = await prisma.eventRegistration.count({
     *   where: {
     *     // ... the filter for the EventRegistrations we want to count
     *   }
     * })
    **/
    count<T extends EventRegistrationCountArgs>(
      args?: Subset<T, EventRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventRegistrationAggregateArgs>(args: Subset<T, EventRegistrationAggregateArgs>): Prisma.PrismaPromise<GetEventRegistrationAggregateType<T>>

    /**
     * Group by EventRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegistrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: EventRegistrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventRegistration model
   */
  readonly fields: EventRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventRegistration model
   */
  interface EventRegistrationFieldRefs {
    readonly id: FieldRef<"EventRegistration", 'String'>
    readonly userId: FieldRef<"EventRegistration", 'String'>
    readonly eventId: FieldRef<"EventRegistration", 'String'>
    readonly status: FieldRef<"EventRegistration", 'RegistrationStatus'>
    readonly qrCode: FieldRef<"EventRegistration", 'String'>
    readonly attendedAt: FieldRef<"EventRegistration", 'DateTime'>
    readonly notes: FieldRef<"EventRegistration", 'String'>
    readonly registeredAt: FieldRef<"EventRegistration", 'DateTime'>
    readonly updatedAt: FieldRef<"EventRegistration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventRegistration findUnique
   */
  export type EventRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which EventRegistration to fetch.
     */
    where: EventRegistrationWhereUniqueInput
  }

  /**
   * EventRegistration findUniqueOrThrow
   */
  export type EventRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which EventRegistration to fetch.
     */
    where: EventRegistrationWhereUniqueInput
  }

  /**
   * EventRegistration findFirst
   */
  export type EventRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which EventRegistration to fetch.
     */
    where?: EventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventRegistrations.
     */
    cursor?: EventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventRegistrations.
     */
    distinct?: EventRegistrationScalarFieldEnum | EventRegistrationScalarFieldEnum[]
  }

  /**
   * EventRegistration findFirstOrThrow
   */
  export type EventRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which EventRegistration to fetch.
     */
    where?: EventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventRegistrations.
     */
    cursor?: EventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventRegistrations.
     */
    distinct?: EventRegistrationScalarFieldEnum | EventRegistrationScalarFieldEnum[]
  }

  /**
   * EventRegistration findMany
   */
  export type EventRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which EventRegistrations to fetch.
     */
    where?: EventRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegistrations to fetch.
     */
    orderBy?: EventRegistrationOrderByWithRelationInput | EventRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventRegistrations.
     */
    cursor?: EventRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegistrations.
     */
    skip?: number
    distinct?: EventRegistrationScalarFieldEnum | EventRegistrationScalarFieldEnum[]
  }

  /**
   * EventRegistration create
   */
  export type EventRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a EventRegistration.
     */
    data: XOR<EventRegistrationCreateInput, EventRegistrationUncheckedCreateInput>
  }

  /**
   * EventRegistration createMany
   */
  export type EventRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventRegistrations.
     */
    data: EventRegistrationCreateManyInput | EventRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventRegistration createManyAndReturn
   */
  export type EventRegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many EventRegistrations.
     */
    data: EventRegistrationCreateManyInput | EventRegistrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventRegistration update
   */
  export type EventRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a EventRegistration.
     */
    data: XOR<EventRegistrationUpdateInput, EventRegistrationUncheckedUpdateInput>
    /**
     * Choose, which EventRegistration to update.
     */
    where: EventRegistrationWhereUniqueInput
  }

  /**
   * EventRegistration updateMany
   */
  export type EventRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventRegistrations.
     */
    data: XOR<EventRegistrationUpdateManyMutationInput, EventRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which EventRegistrations to update
     */
    where?: EventRegistrationWhereInput
    /**
     * Limit how many EventRegistrations to update.
     */
    limit?: number
  }

  /**
   * EventRegistration updateManyAndReturn
   */
  export type EventRegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * The data used to update EventRegistrations.
     */
    data: XOR<EventRegistrationUpdateManyMutationInput, EventRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which EventRegistrations to update
     */
    where?: EventRegistrationWhereInput
    /**
     * Limit how many EventRegistrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventRegistration upsert
   */
  export type EventRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the EventRegistration to update in case it exists.
     */
    where: EventRegistrationWhereUniqueInput
    /**
     * In case the EventRegistration found by the `where` argument doesn't exist, create a new EventRegistration with this data.
     */
    create: XOR<EventRegistrationCreateInput, EventRegistrationUncheckedCreateInput>
    /**
     * In case the EventRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventRegistrationUpdateInput, EventRegistrationUncheckedUpdateInput>
  }

  /**
   * EventRegistration delete
   */
  export type EventRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
    /**
     * Filter which EventRegistration to delete.
     */
    where: EventRegistrationWhereUniqueInput
  }

  /**
   * EventRegistration deleteMany
   */
  export type EventRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventRegistrations to delete
     */
    where?: EventRegistrationWhereInput
    /**
     * Limit how many EventRegistrations to delete.
     */
    limit?: number
  }

  /**
   * EventRegistration without action
   */
  export type EventRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: EventRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: EventRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRegistrationInclude<ExtArgs> | null
  }


  /**
   * Model EventForm
   */

  export type AggregateEventForm = {
    _count: EventFormCountAggregateOutputType | null
    _min: EventFormMinAggregateOutputType | null
    _max: EventFormMaxAggregateOutputType | null
  }

  export type EventFormMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventFormMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventFormCountAggregateOutputType = {
    id: number
    eventId: number
    fields: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventFormMinAggregateInputType = {
    id?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventFormMaxAggregateInputType = {
    id?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventFormCountAggregateInputType = {
    id?: true
    eventId?: true
    fields?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventForm to aggregate.
     */
    where?: EventFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventForms to fetch.
     */
    orderBy?: EventFormOrderByWithRelationInput | EventFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventForms
    **/
    _count?: true | EventFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventFormMaxAggregateInputType
  }

  export type GetEventFormAggregateType<T extends EventFormAggregateArgs> = {
        [P in keyof T & keyof AggregateEventForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventForm[P]>
      : GetScalarType<T[P], AggregateEventForm[P]>
  }




  export type EventFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventFormWhereInput
    orderBy?: EventFormOrderByWithAggregationInput | EventFormOrderByWithAggregationInput[]
    by: EventFormScalarFieldEnum[] | EventFormScalarFieldEnum
    having?: EventFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventFormCountAggregateInputType | true
    _min?: EventFormMinAggregateInputType
    _max?: EventFormMaxAggregateInputType
  }

  export type EventFormGroupByOutputType = {
    id: string
    eventId: string
    fields: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: EventFormCountAggregateOutputType | null
    _min: EventFormMinAggregateOutputType | null
    _max: EventFormMaxAggregateOutputType | null
  }

  type GetEventFormGroupByPayload<T extends EventFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventFormGroupByOutputType[P]>
            : GetScalarType<T[P], EventFormGroupByOutputType[P]>
        }
      >
    >


  export type EventFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    fields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    submissions?: boolean | EventForm$submissionsArgs<ExtArgs>
    _count?: boolean | EventFormCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventForm"]>

  export type EventFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    fields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventForm"]>

  export type EventFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    fields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventForm"]>

  export type EventFormSelectScalar = {
    id?: boolean
    eventId?: boolean
    fields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "fields" | "createdAt" | "updatedAt", ExtArgs["result"]["eventForm"]>
  export type EventFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    submissions?: boolean | EventForm$submissionsArgs<ExtArgs>
    _count?: boolean | EventFormCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventFormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventFormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventForm"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      submissions: Prisma.$FormSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      fields: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventForm"]>
    composites: {}
  }

  type EventFormGetPayload<S extends boolean | null | undefined | EventFormDefaultArgs> = $Result.GetResult<Prisma.$EventFormPayload, S>

  type EventFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventFormCountAggregateInputType | true
    }

  export interface EventFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventForm'], meta: { name: 'EventForm' } }
    /**
     * Find zero or one EventForm that matches the filter.
     * @param {EventFormFindUniqueArgs} args - Arguments to find a EventForm
     * @example
     * // Get one EventForm
     * const eventForm = await prisma.eventForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFormFindUniqueArgs>(args: SelectSubset<T, EventFormFindUniqueArgs<ExtArgs>>): Prisma__EventFormClient<$Result.GetResult<Prisma.$EventFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFormFindUniqueOrThrowArgs} args - Arguments to find a EventForm
     * @example
     * // Get one EventForm
     * const eventForm = await prisma.eventForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFormFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventFormClient<$Result.GetResult<Prisma.$EventFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFindFirstArgs} args - Arguments to find a EventForm
     * @example
     * // Get one EventForm
     * const eventForm = await prisma.eventForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFormFindFirstArgs>(args?: SelectSubset<T, EventFormFindFirstArgs<ExtArgs>>): Prisma__EventFormClient<$Result.GetResult<Prisma.$EventFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFindFirstOrThrowArgs} args - Arguments to find a EventForm
     * @example
     * // Get one EventForm
     * const eventForm = await prisma.eventForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFormFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventFormClient<$Result.GetResult<Prisma.$EventFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventForms
     * const eventForms = await prisma.eventForm.findMany()
     * 
     * // Get first 10 EventForms
     * const eventForms = await prisma.eventForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventFormWithIdOnly = await prisma.eventForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFormFindManyArgs>(args?: SelectSubset<T, EventFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventForm.
     * @param {EventFormCreateArgs} args - Arguments to create a EventForm.
     * @example
     * // Create one EventForm
     * const EventForm = await prisma.eventForm.create({
     *   data: {
     *     // ... data to create a EventForm
     *   }
     * })
     * 
     */
    create<T extends EventFormCreateArgs>(args: SelectSubset<T, EventFormCreateArgs<ExtArgs>>): Prisma__EventFormClient<$Result.GetResult<Prisma.$EventFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventForms.
     * @param {EventFormCreateManyArgs} args - Arguments to create many EventForms.
     * @example
     * // Create many EventForms
     * const eventForm = await prisma.eventForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventFormCreateManyArgs>(args?: SelectSubset<T, EventFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventForms and returns the data saved in the database.
     * @param {EventFormCreateManyAndReturnArgs} args - Arguments to create many EventForms.
     * @example
     * // Create many EventForms
     * const eventForm = await prisma.eventForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventForms and only return the `id`
     * const eventFormWithIdOnly = await prisma.eventForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventFormCreateManyAndReturnArgs>(args?: SelectSubset<T, EventFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventForm.
     * @param {EventFormDeleteArgs} args - Arguments to delete one EventForm.
     * @example
     * // Delete one EventForm
     * const EventForm = await prisma.eventForm.delete({
     *   where: {
     *     // ... filter to delete one EventForm
     *   }
     * })
     * 
     */
    delete<T extends EventFormDeleteArgs>(args: SelectSubset<T, EventFormDeleteArgs<ExtArgs>>): Prisma__EventFormClient<$Result.GetResult<Prisma.$EventFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventForm.
     * @param {EventFormUpdateArgs} args - Arguments to update one EventForm.
     * @example
     * // Update one EventForm
     * const eventForm = await prisma.eventForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventFormUpdateArgs>(args: SelectSubset<T, EventFormUpdateArgs<ExtArgs>>): Prisma__EventFormClient<$Result.GetResult<Prisma.$EventFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventForms.
     * @param {EventFormDeleteManyArgs} args - Arguments to filter EventForms to delete.
     * @example
     * // Delete a few EventForms
     * const { count } = await prisma.eventForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventFormDeleteManyArgs>(args?: SelectSubset<T, EventFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventForms
     * const eventForm = await prisma.eventForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventFormUpdateManyArgs>(args: SelectSubset<T, EventFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventForms and returns the data updated in the database.
     * @param {EventFormUpdateManyAndReturnArgs} args - Arguments to update many EventForms.
     * @example
     * // Update many EventForms
     * const eventForm = await prisma.eventForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventForms and only return the `id`
     * const eventFormWithIdOnly = await prisma.eventForm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventFormUpdateManyAndReturnArgs>(args: SelectSubset<T, EventFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventForm.
     * @param {EventFormUpsertArgs} args - Arguments to update or create a EventForm.
     * @example
     * // Update or create a EventForm
     * const eventForm = await prisma.eventForm.upsert({
     *   create: {
     *     // ... data to create a EventForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventForm we want to update
     *   }
     * })
     */
    upsert<T extends EventFormUpsertArgs>(args: SelectSubset<T, EventFormUpsertArgs<ExtArgs>>): Prisma__EventFormClient<$Result.GetResult<Prisma.$EventFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormCountArgs} args - Arguments to filter EventForms to count.
     * @example
     * // Count the number of EventForms
     * const count = await prisma.eventForm.count({
     *   where: {
     *     // ... the filter for the EventForms we want to count
     *   }
     * })
    **/
    count<T extends EventFormCountArgs>(
      args?: Subset<T, EventFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventFormAggregateArgs>(args: Subset<T, EventFormAggregateArgs>): Prisma.PrismaPromise<GetEventFormAggregateType<T>>

    /**
     * Group by EventForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventFormGroupByArgs['orderBy'] }
        : { orderBy?: EventFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventForm model
   */
  readonly fields: EventFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends EventForm$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, EventForm$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventForm model
   */
  interface EventFormFieldRefs {
    readonly id: FieldRef<"EventForm", 'String'>
    readonly eventId: FieldRef<"EventForm", 'String'>
    readonly fields: FieldRef<"EventForm", 'Json'>
    readonly createdAt: FieldRef<"EventForm", 'DateTime'>
    readonly updatedAt: FieldRef<"EventForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventForm findUnique
   */
  export type EventFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventForm
     */
    select?: EventFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventForm
     */
    omit?: EventFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormInclude<ExtArgs> | null
    /**
     * Filter, which EventForm to fetch.
     */
    where: EventFormWhereUniqueInput
  }

  /**
   * EventForm findUniqueOrThrow
   */
  export type EventFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventForm
     */
    select?: EventFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventForm
     */
    omit?: EventFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormInclude<ExtArgs> | null
    /**
     * Filter, which EventForm to fetch.
     */
    where: EventFormWhereUniqueInput
  }

  /**
   * EventForm findFirst
   */
  export type EventFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventForm
     */
    select?: EventFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventForm
     */
    omit?: EventFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormInclude<ExtArgs> | null
    /**
     * Filter, which EventForm to fetch.
     */
    where?: EventFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventForms to fetch.
     */
    orderBy?: EventFormOrderByWithRelationInput | EventFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventForms.
     */
    cursor?: EventFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventForms.
     */
    distinct?: EventFormScalarFieldEnum | EventFormScalarFieldEnum[]
  }

  /**
   * EventForm findFirstOrThrow
   */
  export type EventFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventForm
     */
    select?: EventFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventForm
     */
    omit?: EventFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormInclude<ExtArgs> | null
    /**
     * Filter, which EventForm to fetch.
     */
    where?: EventFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventForms to fetch.
     */
    orderBy?: EventFormOrderByWithRelationInput | EventFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventForms.
     */
    cursor?: EventFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventForms.
     */
    distinct?: EventFormScalarFieldEnum | EventFormScalarFieldEnum[]
  }

  /**
   * EventForm findMany
   */
  export type EventFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventForm
     */
    select?: EventFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventForm
     */
    omit?: EventFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormInclude<ExtArgs> | null
    /**
     * Filter, which EventForms to fetch.
     */
    where?: EventFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventForms to fetch.
     */
    orderBy?: EventFormOrderByWithRelationInput | EventFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventForms.
     */
    cursor?: EventFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventForms.
     */
    skip?: number
    distinct?: EventFormScalarFieldEnum | EventFormScalarFieldEnum[]
  }

  /**
   * EventForm create
   */
  export type EventFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventForm
     */
    select?: EventFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventForm
     */
    omit?: EventFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormInclude<ExtArgs> | null
    /**
     * The data needed to create a EventForm.
     */
    data: XOR<EventFormCreateInput, EventFormUncheckedCreateInput>
  }

  /**
   * EventForm createMany
   */
  export type EventFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventForms.
     */
    data: EventFormCreateManyInput | EventFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventForm createManyAndReturn
   */
  export type EventFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventForm
     */
    select?: EventFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventForm
     */
    omit?: EventFormOmit<ExtArgs> | null
    /**
     * The data used to create many EventForms.
     */
    data: EventFormCreateManyInput | EventFormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventForm update
   */
  export type EventFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventForm
     */
    select?: EventFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventForm
     */
    omit?: EventFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormInclude<ExtArgs> | null
    /**
     * The data needed to update a EventForm.
     */
    data: XOR<EventFormUpdateInput, EventFormUncheckedUpdateInput>
    /**
     * Choose, which EventForm to update.
     */
    where: EventFormWhereUniqueInput
  }

  /**
   * EventForm updateMany
   */
  export type EventFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventForms.
     */
    data: XOR<EventFormUpdateManyMutationInput, EventFormUncheckedUpdateManyInput>
    /**
     * Filter which EventForms to update
     */
    where?: EventFormWhereInput
    /**
     * Limit how many EventForms to update.
     */
    limit?: number
  }

  /**
   * EventForm updateManyAndReturn
   */
  export type EventFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventForm
     */
    select?: EventFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventForm
     */
    omit?: EventFormOmit<ExtArgs> | null
    /**
     * The data used to update EventForms.
     */
    data: XOR<EventFormUpdateManyMutationInput, EventFormUncheckedUpdateManyInput>
    /**
     * Filter which EventForms to update
     */
    where?: EventFormWhereInput
    /**
     * Limit how many EventForms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventForm upsert
   */
  export type EventFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventForm
     */
    select?: EventFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventForm
     */
    omit?: EventFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormInclude<ExtArgs> | null
    /**
     * The filter to search for the EventForm to update in case it exists.
     */
    where: EventFormWhereUniqueInput
    /**
     * In case the EventForm found by the `where` argument doesn't exist, create a new EventForm with this data.
     */
    create: XOR<EventFormCreateInput, EventFormUncheckedCreateInput>
    /**
     * In case the EventForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventFormUpdateInput, EventFormUncheckedUpdateInput>
  }

  /**
   * EventForm delete
   */
  export type EventFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventForm
     */
    select?: EventFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventForm
     */
    omit?: EventFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormInclude<ExtArgs> | null
    /**
     * Filter which EventForm to delete.
     */
    where: EventFormWhereUniqueInput
  }

  /**
   * EventForm deleteMany
   */
  export type EventFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventForms to delete
     */
    where?: EventFormWhereInput
    /**
     * Limit how many EventForms to delete.
     */
    limit?: number
  }

  /**
   * EventForm.submissions
   */
  export type EventForm$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    where?: FormSubmissionWhereInput
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    cursor?: FormSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * EventForm without action
   */
  export type EventFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventForm
     */
    select?: EventFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventForm
     */
    omit?: EventFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormInclude<ExtArgs> | null
  }


  /**
   * Model FormSubmission
   */

  export type AggregateFormSubmission = {
    _count: FormSubmissionCountAggregateOutputType | null
    _min: FormSubmissionMinAggregateOutputType | null
    _max: FormSubmissionMaxAggregateOutputType | null
  }

  export type FormSubmissionMinAggregateOutputType = {
    id: string | null
    formId: string | null
    userId: string | null
    eventId: string | null
    submittedAt: Date | null
  }

  export type FormSubmissionMaxAggregateOutputType = {
    id: string | null
    formId: string | null
    userId: string | null
    eventId: string | null
    submittedAt: Date | null
  }

  export type FormSubmissionCountAggregateOutputType = {
    id: number
    formId: number
    userId: number
    eventId: number
    data: number
    submittedAt: number
    _all: number
  }


  export type FormSubmissionMinAggregateInputType = {
    id?: true
    formId?: true
    userId?: true
    eventId?: true
    submittedAt?: true
  }

  export type FormSubmissionMaxAggregateInputType = {
    id?: true
    formId?: true
    userId?: true
    eventId?: true
    submittedAt?: true
  }

  export type FormSubmissionCountAggregateInputType = {
    id?: true
    formId?: true
    userId?: true
    eventId?: true
    data?: true
    submittedAt?: true
    _all?: true
  }

  export type FormSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormSubmission to aggregate.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormSubmissions
    **/
    _count?: true | FormSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormSubmissionMaxAggregateInputType
  }

  export type GetFormSubmissionAggregateType<T extends FormSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateFormSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormSubmission[P]>
      : GetScalarType<T[P], AggregateFormSubmission[P]>
  }




  export type FormSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormSubmissionWhereInput
    orderBy?: FormSubmissionOrderByWithAggregationInput | FormSubmissionOrderByWithAggregationInput[]
    by: FormSubmissionScalarFieldEnum[] | FormSubmissionScalarFieldEnum
    having?: FormSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormSubmissionCountAggregateInputType | true
    _min?: FormSubmissionMinAggregateInputType
    _max?: FormSubmissionMaxAggregateInputType
  }

  export type FormSubmissionGroupByOutputType = {
    id: string
    formId: string
    userId: string
    eventId: string
    data: JsonValue
    submittedAt: Date
    _count: FormSubmissionCountAggregateOutputType | null
    _min: FormSubmissionMinAggregateOutputType | null
    _max: FormSubmissionMaxAggregateOutputType | null
  }

  type GetFormSubmissionGroupByPayload<T extends FormSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], FormSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type FormSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    userId?: boolean
    eventId?: boolean
    data?: boolean
    submittedAt?: boolean
    form?: boolean | EventFormDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    userId?: boolean
    eventId?: boolean
    data?: boolean
    submittedAt?: boolean
    form?: boolean | EventFormDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    userId?: boolean
    eventId?: boolean
    data?: boolean
    submittedAt?: boolean
    form?: boolean | EventFormDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formSubmission"]>

  export type FormSubmissionSelectScalar = {
    id?: boolean
    formId?: boolean
    userId?: boolean
    eventId?: boolean
    data?: boolean
    submittedAt?: boolean
  }

  export type FormSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formId" | "userId" | "eventId" | "data" | "submittedAt", ExtArgs["result"]["formSubmission"]>
  export type FormSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | EventFormDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type FormSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | EventFormDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type FormSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | EventFormDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $FormSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormSubmission"
    objects: {
      form: Prisma.$EventFormPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formId: string
      userId: string
      eventId: string
      data: Prisma.JsonValue
      submittedAt: Date
    }, ExtArgs["result"]["formSubmission"]>
    composites: {}
  }

  type FormSubmissionGetPayload<S extends boolean | null | undefined | FormSubmissionDefaultArgs> = $Result.GetResult<Prisma.$FormSubmissionPayload, S>

  type FormSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormSubmissionCountAggregateInputType | true
    }

  export interface FormSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormSubmission'], meta: { name: 'FormSubmission' } }
    /**
     * Find zero or one FormSubmission that matches the filter.
     * @param {FormSubmissionFindUniqueArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormSubmissionFindUniqueArgs>(args: SelectSubset<T, FormSubmissionFindUniqueArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormSubmissionFindUniqueOrThrowArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, FormSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindFirstArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormSubmissionFindFirstArgs>(args?: SelectSubset<T, FormSubmissionFindFirstArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindFirstOrThrowArgs} args - Arguments to find a FormSubmission
     * @example
     * // Get one FormSubmission
     * const formSubmission = await prisma.formSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, FormSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormSubmissions
     * const formSubmissions = await prisma.formSubmission.findMany()
     * 
     * // Get first 10 FormSubmissions
     * const formSubmissions = await prisma.formSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormSubmissionFindManyArgs>(args?: SelectSubset<T, FormSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormSubmission.
     * @param {FormSubmissionCreateArgs} args - Arguments to create a FormSubmission.
     * @example
     * // Create one FormSubmission
     * const FormSubmission = await prisma.formSubmission.create({
     *   data: {
     *     // ... data to create a FormSubmission
     *   }
     * })
     * 
     */
    create<T extends FormSubmissionCreateArgs>(args: SelectSubset<T, FormSubmissionCreateArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormSubmissions.
     * @param {FormSubmissionCreateManyArgs} args - Arguments to create many FormSubmissions.
     * @example
     * // Create many FormSubmissions
     * const formSubmission = await prisma.formSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormSubmissionCreateManyArgs>(args?: SelectSubset<T, FormSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormSubmissions and returns the data saved in the database.
     * @param {FormSubmissionCreateManyAndReturnArgs} args - Arguments to create many FormSubmissions.
     * @example
     * // Create many FormSubmissions
     * const formSubmission = await prisma.formSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormSubmissions and only return the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, FormSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormSubmission.
     * @param {FormSubmissionDeleteArgs} args - Arguments to delete one FormSubmission.
     * @example
     * // Delete one FormSubmission
     * const FormSubmission = await prisma.formSubmission.delete({
     *   where: {
     *     // ... filter to delete one FormSubmission
     *   }
     * })
     * 
     */
    delete<T extends FormSubmissionDeleteArgs>(args: SelectSubset<T, FormSubmissionDeleteArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormSubmission.
     * @param {FormSubmissionUpdateArgs} args - Arguments to update one FormSubmission.
     * @example
     * // Update one FormSubmission
     * const formSubmission = await prisma.formSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormSubmissionUpdateArgs>(args: SelectSubset<T, FormSubmissionUpdateArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormSubmissions.
     * @param {FormSubmissionDeleteManyArgs} args - Arguments to filter FormSubmissions to delete.
     * @example
     * // Delete a few FormSubmissions
     * const { count } = await prisma.formSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormSubmissionDeleteManyArgs>(args?: SelectSubset<T, FormSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormSubmissions
     * const formSubmission = await prisma.formSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormSubmissionUpdateManyArgs>(args: SelectSubset<T, FormSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormSubmissions and returns the data updated in the database.
     * @param {FormSubmissionUpdateManyAndReturnArgs} args - Arguments to update many FormSubmissions.
     * @example
     * // Update many FormSubmissions
     * const formSubmission = await prisma.formSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormSubmissions and only return the `id`
     * const formSubmissionWithIdOnly = await prisma.formSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, FormSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormSubmission.
     * @param {FormSubmissionUpsertArgs} args - Arguments to update or create a FormSubmission.
     * @example
     * // Update or create a FormSubmission
     * const formSubmission = await prisma.formSubmission.upsert({
     *   create: {
     *     // ... data to create a FormSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormSubmission we want to update
     *   }
     * })
     */
    upsert<T extends FormSubmissionUpsertArgs>(args: SelectSubset<T, FormSubmissionUpsertArgs<ExtArgs>>): Prisma__FormSubmissionClient<$Result.GetResult<Prisma.$FormSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionCountArgs} args - Arguments to filter FormSubmissions to count.
     * @example
     * // Count the number of FormSubmissions
     * const count = await prisma.formSubmission.count({
     *   where: {
     *     // ... the filter for the FormSubmissions we want to count
     *   }
     * })
    **/
    count<T extends FormSubmissionCountArgs>(
      args?: Subset<T, FormSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormSubmissionAggregateArgs>(args: Subset<T, FormSubmissionAggregateArgs>): Prisma.PrismaPromise<GetFormSubmissionAggregateType<T>>

    /**
     * Group by FormSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: FormSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormSubmission model
   */
  readonly fields: FormSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends EventFormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventFormDefaultArgs<ExtArgs>>): Prisma__EventFormClient<$Result.GetResult<Prisma.$EventFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FormSubmission model
   */
  interface FormSubmissionFieldRefs {
    readonly id: FieldRef<"FormSubmission", 'String'>
    readonly formId: FieldRef<"FormSubmission", 'String'>
    readonly userId: FieldRef<"FormSubmission", 'String'>
    readonly eventId: FieldRef<"FormSubmission", 'String'>
    readonly data: FieldRef<"FormSubmission", 'Json'>
    readonly submittedAt: FieldRef<"FormSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormSubmission findUnique
   */
  export type FormSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission findUniqueOrThrow
   */
  export type FormSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission findFirst
   */
  export type FormSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormSubmissions.
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSubmissions.
     */
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * FormSubmission findFirstOrThrow
   */
  export type FormSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which FormSubmission to fetch.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormSubmissions.
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSubmissions.
     */
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * FormSubmission findMany
   */
  export type FormSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which FormSubmissions to fetch.
     */
    where?: FormSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissions to fetch.
     */
    orderBy?: FormSubmissionOrderByWithRelationInput | FormSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormSubmissions.
     */
    cursor?: FormSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissions.
     */
    skip?: number
    distinct?: FormSubmissionScalarFieldEnum | FormSubmissionScalarFieldEnum[]
  }

  /**
   * FormSubmission create
   */
  export type FormSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a FormSubmission.
     */
    data: XOR<FormSubmissionCreateInput, FormSubmissionUncheckedCreateInput>
  }

  /**
   * FormSubmission createMany
   */
  export type FormSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormSubmissions.
     */
    data: FormSubmissionCreateManyInput | FormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormSubmission createManyAndReturn
   */
  export type FormSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many FormSubmissions.
     */
    data: FormSubmissionCreateManyInput | FormSubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormSubmission update
   */
  export type FormSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a FormSubmission.
     */
    data: XOR<FormSubmissionUpdateInput, FormSubmissionUncheckedUpdateInput>
    /**
     * Choose, which FormSubmission to update.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission updateMany
   */
  export type FormSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormSubmissions.
     */
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which FormSubmissions to update
     */
    where?: FormSubmissionWhereInput
    /**
     * Limit how many FormSubmissions to update.
     */
    limit?: number
  }

  /**
   * FormSubmission updateManyAndReturn
   */
  export type FormSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update FormSubmissions.
     */
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which FormSubmissions to update
     */
    where?: FormSubmissionWhereInput
    /**
     * Limit how many FormSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormSubmission upsert
   */
  export type FormSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the FormSubmission to update in case it exists.
     */
    where: FormSubmissionWhereUniqueInput
    /**
     * In case the FormSubmission found by the `where` argument doesn't exist, create a new FormSubmission with this data.
     */
    create: XOR<FormSubmissionCreateInput, FormSubmissionUncheckedCreateInput>
    /**
     * In case the FormSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormSubmissionUpdateInput, FormSubmissionUncheckedUpdateInput>
  }

  /**
   * FormSubmission delete
   */
  export type FormSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
    /**
     * Filter which FormSubmission to delete.
     */
    where: FormSubmissionWhereUniqueInput
  }

  /**
   * FormSubmission deleteMany
   */
  export type FormSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormSubmissions to delete
     */
    where?: FormSubmissionWhereInput
    /**
     * Limit how many FormSubmissions to delete.
     */
    limit?: number
  }

  /**
   * FormSubmission without action
   */
  export type FormSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmission
     */
    select?: FormSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmission
     */
    omit?: FormSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormSubmissionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    avatar: 'avatar',
    password: 'password',
    role: 'role',
    status: 'status',
    college: 'college',
    department: 'department',
    year: 'year',
    approvedAt: 'approvedAt',
    approvedBy: 'approvedBy',
    rejectionReason: 'rejectionReason',
    suspensionReason: 'suspensionReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    date: 'date',
    time: 'time',
    venue: 'venue',
    city: 'city',
    state: 'state',
    address: 'address',
    posterUrl: 'posterUrl',
    type: 'type',
    isPaid: 'isPaid',
    price: 'price',
    maxAttendees: 'maxAttendees',
    status: 'status',
    featured: 'featured',
    tags: 'tags',
    organizerId: 'organizerId',
    rejectionReason: 'rejectionReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventRegistrationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventId: 'eventId',
    status: 'status',
    qrCode: 'qrCode',
    attendedAt: 'attendedAt',
    notes: 'notes',
    registeredAt: 'registeredAt',
    updatedAt: 'updatedAt'
  };

  export type EventRegistrationScalarFieldEnum = (typeof EventRegistrationScalarFieldEnum)[keyof typeof EventRegistrationScalarFieldEnum]


  export const EventFormScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    fields: 'fields',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventFormScalarFieldEnum = (typeof EventFormScalarFieldEnum)[keyof typeof EventFormScalarFieldEnum]


  export const FormSubmissionScalarFieldEnum: {
    id: 'id',
    formId: 'formId',
    userId: 'userId',
    eventId: 'eventId',
    data: 'data',
    submittedAt: 'submittedAt'
  };

  export type FormSubmissionScalarFieldEnum = (typeof FormSubmissionScalarFieldEnum)[keyof typeof FormSubmissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    


  /**
   * Reference to a field of type 'RegistrationStatus'
   */
  export type EnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus'>
    


  /**
   * Reference to a field of type 'RegistrationStatus[]'
   */
  export type ListEnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    college?: StringNullableFilter<"User"> | string | null
    department?: StringNullableFilter<"User"> | string | null
    year?: StringNullableFilter<"User"> | string | null
    approvedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    approvedBy?: StringNullableFilter<"User"> | string | null
    rejectionReason?: StringNullableFilter<"User"> | string | null
    suspensionReason?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organizedEvents?: EventListRelationFilter
    registrations?: EventRegistrationListRelationFilter
    formSubmissions?: FormSubmissionListRelationFilter
    approvedUsers?: UserListRelationFilter
    approver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    college?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    suspensionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizedEvents?: EventOrderByRelationAggregateInput
    registrations?: EventRegistrationOrderByRelationAggregateInput
    formSubmissions?: FormSubmissionOrderByRelationAggregateInput
    approvedUsers?: UserOrderByRelationAggregateInput
    approver?: UserOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    college?: StringNullableFilter<"User"> | string | null
    department?: StringNullableFilter<"User"> | string | null
    year?: StringNullableFilter<"User"> | string | null
    approvedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    approvedBy?: StringNullableFilter<"User"> | string | null
    rejectionReason?: StringNullableFilter<"User"> | string | null
    suspensionReason?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organizedEvents?: EventListRelationFilter
    registrations?: EventRegistrationListRelationFilter
    formSubmissions?: FormSubmissionListRelationFilter
    approvedUsers?: UserListRelationFilter
    approver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    college?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    suspensionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    college?: StringNullableWithAggregatesFilter<"User"> | string | null
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    year?: StringNullableWithAggregatesFilter<"User"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"User"> | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    suspensionReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: StringFilter<"Event"> | string
    time?: StringFilter<"Event"> | string
    venue?: StringFilter<"Event"> | string
    city?: StringFilter<"Event"> | string
    state?: StringFilter<"Event"> | string
    address?: StringNullableFilter<"Event"> | string | null
    posterUrl?: StringNullableFilter<"Event"> | string | null
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    isPaid?: BoolFilter<"Event"> | boolean
    price?: FloatFilter<"Event"> | number
    maxAttendees?: IntFilter<"Event"> | number
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    featured?: BoolFilter<"Event"> | boolean
    tags?: StringNullableListFilter<"Event">
    organizerId?: StringFilter<"Event"> | string
    rejectionReason?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    registrations?: EventRegistrationListRelationFilter
    eventForm?: XOR<EventFormNullableScalarRelationFilter, EventFormWhereInput> | null
    formSubmissions?: FormSubmissionListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    venue?: SortOrder
    city?: SortOrder
    state?: SortOrder
    address?: SortOrderInput | SortOrder
    posterUrl?: SortOrderInput | SortOrder
    type?: SortOrder
    isPaid?: SortOrder
    price?: SortOrder
    maxAttendees?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    tags?: SortOrder
    organizerId?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizer?: UserOrderByWithRelationInput
    registrations?: EventRegistrationOrderByRelationAggregateInput
    eventForm?: EventFormOrderByWithRelationInput
    formSubmissions?: FormSubmissionOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: StringFilter<"Event"> | string
    time?: StringFilter<"Event"> | string
    venue?: StringFilter<"Event"> | string
    city?: StringFilter<"Event"> | string
    state?: StringFilter<"Event"> | string
    address?: StringNullableFilter<"Event"> | string | null
    posterUrl?: StringNullableFilter<"Event"> | string | null
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    isPaid?: BoolFilter<"Event"> | boolean
    price?: FloatFilter<"Event"> | number
    maxAttendees?: IntFilter<"Event"> | number
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    featured?: BoolFilter<"Event"> | boolean
    tags?: StringNullableListFilter<"Event">
    organizerId?: StringFilter<"Event"> | string
    rejectionReason?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    registrations?: EventRegistrationListRelationFilter
    eventForm?: XOR<EventFormNullableScalarRelationFilter, EventFormWhereInput> | null
    formSubmissions?: FormSubmissionListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    venue?: SortOrder
    city?: SortOrder
    state?: SortOrder
    address?: SortOrderInput | SortOrder
    posterUrl?: SortOrderInput | SortOrder
    type?: SortOrder
    isPaid?: SortOrder
    price?: SortOrder
    maxAttendees?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    tags?: SortOrder
    organizerId?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    name?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    date?: StringWithAggregatesFilter<"Event"> | string
    time?: StringWithAggregatesFilter<"Event"> | string
    venue?: StringWithAggregatesFilter<"Event"> | string
    city?: StringWithAggregatesFilter<"Event"> | string
    state?: StringWithAggregatesFilter<"Event"> | string
    address?: StringNullableWithAggregatesFilter<"Event"> | string | null
    posterUrl?: StringNullableWithAggregatesFilter<"Event"> | string | null
    type?: EnumEventTypeWithAggregatesFilter<"Event"> | $Enums.EventType
    isPaid?: BoolWithAggregatesFilter<"Event"> | boolean
    price?: FloatWithAggregatesFilter<"Event"> | number
    maxAttendees?: IntWithAggregatesFilter<"Event"> | number
    status?: EnumEventStatusWithAggregatesFilter<"Event"> | $Enums.EventStatus
    featured?: BoolWithAggregatesFilter<"Event"> | boolean
    tags?: StringNullableListFilter<"Event">
    organizerId?: StringWithAggregatesFilter<"Event"> | string
    rejectionReason?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type EventRegistrationWhereInput = {
    AND?: EventRegistrationWhereInput | EventRegistrationWhereInput[]
    OR?: EventRegistrationWhereInput[]
    NOT?: EventRegistrationWhereInput | EventRegistrationWhereInput[]
    id?: StringFilter<"EventRegistration"> | string
    userId?: StringFilter<"EventRegistration"> | string
    eventId?: StringFilter<"EventRegistration"> | string
    status?: EnumRegistrationStatusFilter<"EventRegistration"> | $Enums.RegistrationStatus
    qrCode?: StringFilter<"EventRegistration"> | string
    attendedAt?: DateTimeNullableFilter<"EventRegistration"> | Date | string | null
    notes?: StringNullableFilter<"EventRegistration"> | string | null
    registeredAt?: DateTimeFilter<"EventRegistration"> | Date | string
    updatedAt?: DateTimeFilter<"EventRegistration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type EventRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    attendedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    registeredAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type EventRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qrCode?: string
    userId_eventId?: EventRegistrationUserIdEventIdCompoundUniqueInput
    AND?: EventRegistrationWhereInput | EventRegistrationWhereInput[]
    OR?: EventRegistrationWhereInput[]
    NOT?: EventRegistrationWhereInput | EventRegistrationWhereInput[]
    userId?: StringFilter<"EventRegistration"> | string
    eventId?: StringFilter<"EventRegistration"> | string
    status?: EnumRegistrationStatusFilter<"EventRegistration"> | $Enums.RegistrationStatus
    attendedAt?: DateTimeNullableFilter<"EventRegistration"> | Date | string | null
    notes?: StringNullableFilter<"EventRegistration"> | string | null
    registeredAt?: DateTimeFilter<"EventRegistration"> | Date | string
    updatedAt?: DateTimeFilter<"EventRegistration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id" | "qrCode" | "userId_eventId">

  export type EventRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    attendedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    registeredAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventRegistrationCountOrderByAggregateInput
    _max?: EventRegistrationMaxOrderByAggregateInput
    _min?: EventRegistrationMinOrderByAggregateInput
  }

  export type EventRegistrationScalarWhereWithAggregatesInput = {
    AND?: EventRegistrationScalarWhereWithAggregatesInput | EventRegistrationScalarWhereWithAggregatesInput[]
    OR?: EventRegistrationScalarWhereWithAggregatesInput[]
    NOT?: EventRegistrationScalarWhereWithAggregatesInput | EventRegistrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventRegistration"> | string
    userId?: StringWithAggregatesFilter<"EventRegistration"> | string
    eventId?: StringWithAggregatesFilter<"EventRegistration"> | string
    status?: EnumRegistrationStatusWithAggregatesFilter<"EventRegistration"> | $Enums.RegistrationStatus
    qrCode?: StringWithAggregatesFilter<"EventRegistration"> | string
    attendedAt?: DateTimeNullableWithAggregatesFilter<"EventRegistration"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"EventRegistration"> | string | null
    registeredAt?: DateTimeWithAggregatesFilter<"EventRegistration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventRegistration"> | Date | string
  }

  export type EventFormWhereInput = {
    AND?: EventFormWhereInput | EventFormWhereInput[]
    OR?: EventFormWhereInput[]
    NOT?: EventFormWhereInput | EventFormWhereInput[]
    id?: StringFilter<"EventForm"> | string
    eventId?: StringFilter<"EventForm"> | string
    fields?: JsonFilter<"EventForm">
    createdAt?: DateTimeFilter<"EventForm"> | Date | string
    updatedAt?: DateTimeFilter<"EventForm"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    submissions?: FormSubmissionListRelationFilter
  }

  export type EventFormOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    fields?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    submissions?: FormSubmissionOrderByRelationAggregateInput
  }

  export type EventFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId?: string
    AND?: EventFormWhereInput | EventFormWhereInput[]
    OR?: EventFormWhereInput[]
    NOT?: EventFormWhereInput | EventFormWhereInput[]
    fields?: JsonFilter<"EventForm">
    createdAt?: DateTimeFilter<"EventForm"> | Date | string
    updatedAt?: DateTimeFilter<"EventForm"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    submissions?: FormSubmissionListRelationFilter
  }, "id" | "eventId">

  export type EventFormOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    fields?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventFormCountOrderByAggregateInput
    _max?: EventFormMaxOrderByAggregateInput
    _min?: EventFormMinOrderByAggregateInput
  }

  export type EventFormScalarWhereWithAggregatesInput = {
    AND?: EventFormScalarWhereWithAggregatesInput | EventFormScalarWhereWithAggregatesInput[]
    OR?: EventFormScalarWhereWithAggregatesInput[]
    NOT?: EventFormScalarWhereWithAggregatesInput | EventFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventForm"> | string
    eventId?: StringWithAggregatesFilter<"EventForm"> | string
    fields?: JsonWithAggregatesFilter<"EventForm">
    createdAt?: DateTimeWithAggregatesFilter<"EventForm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventForm"> | Date | string
  }

  export type FormSubmissionWhereInput = {
    AND?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    OR?: FormSubmissionWhereInput[]
    NOT?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    id?: StringFilter<"FormSubmission"> | string
    formId?: StringFilter<"FormSubmission"> | string
    userId?: StringFilter<"FormSubmission"> | string
    eventId?: StringFilter<"FormSubmission"> | string
    data?: JsonFilter<"FormSubmission">
    submittedAt?: DateTimeFilter<"FormSubmission"> | Date | string
    form?: XOR<EventFormScalarRelationFilter, EventFormWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type FormSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    formId?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    data?: SortOrder
    submittedAt?: SortOrder
    form?: EventFormOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type FormSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    formId_userId?: FormSubmissionFormIdUserIdCompoundUniqueInput
    AND?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    OR?: FormSubmissionWhereInput[]
    NOT?: FormSubmissionWhereInput | FormSubmissionWhereInput[]
    formId?: StringFilter<"FormSubmission"> | string
    userId?: StringFilter<"FormSubmission"> | string
    eventId?: StringFilter<"FormSubmission"> | string
    data?: JsonFilter<"FormSubmission">
    submittedAt?: DateTimeFilter<"FormSubmission"> | Date | string
    form?: XOR<EventFormScalarRelationFilter, EventFormWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id" | "formId_userId">

  export type FormSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    formId?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    data?: SortOrder
    submittedAt?: SortOrder
    _count?: FormSubmissionCountOrderByAggregateInput
    _max?: FormSubmissionMaxOrderByAggregateInput
    _min?: FormSubmissionMinOrderByAggregateInput
  }

  export type FormSubmissionScalarWhereWithAggregatesInput = {
    AND?: FormSubmissionScalarWhereWithAggregatesInput | FormSubmissionScalarWhereWithAggregatesInput[]
    OR?: FormSubmissionScalarWhereWithAggregatesInput[]
    NOT?: FormSubmissionScalarWhereWithAggregatesInput | FormSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormSubmission"> | string
    formId?: StringWithAggregatesFilter<"FormSubmission"> | string
    userId?: StringWithAggregatesFilter<"FormSubmission"> | string
    eventId?: StringWithAggregatesFilter<"FormSubmission"> | string
    data?: JsonWithAggregatesFilter<"FormSubmission">
    submittedAt?: DateTimeWithAggregatesFilter<"FormSubmission"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    avatar?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    college?: string | null
    department?: string | null
    year?: string | null
    approvedAt?: Date | string | null
    rejectionReason?: string | null
    suspensionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationCreateNestedManyWithoutUserInput
    formSubmissions?: FormSubmissionCreateNestedManyWithoutUserInput
    approvedUsers?: UserCreateNestedManyWithoutApproverInput
    approver?: UserCreateNestedOneWithoutApprovedUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    avatar?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    college?: string | null
    department?: string | null
    year?: string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectionReason?: string | null
    suspensionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutUserInput
    formSubmissions?: FormSubmissionUncheckedCreateNestedManyWithoutUserInput
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApproverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    college?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUpdateManyWithoutUserNestedInput
    formSubmissions?: FormSubmissionUpdateManyWithoutUserNestedInput
    approvedUsers?: UserUpdateManyWithoutApproverNestedInput
    approver?: UserUpdateOneWithoutApprovedUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    college?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUncheckedUpdateManyWithoutUserNestedInput
    formSubmissions?: FormSubmissionUncheckedUpdateManyWithoutUserNestedInput
    approvedUsers?: UserUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    avatar?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    college?: string | null
    department?: string | null
    year?: string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectionReason?: string | null
    suspensionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    college?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    college?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    name: string
    description: string
    date: string
    time: string
    venue: string
    city: string
    state: string
    address?: string | null
    posterUrl?: string | null
    type?: $Enums.EventType
    isPaid?: boolean
    price?: number
    maxAttendees: number
    status?: $Enums.EventStatus
    featured?: boolean
    tags?: EventCreatetagsInput | string[]
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    registrations?: EventRegistrationCreateNestedManyWithoutEventInput
    eventForm?: EventFormCreateNestedOneWithoutEventInput
    formSubmissions?: FormSubmissionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    date: string
    time: string
    venue: string
    city: string
    state: string
    address?: string | null
    posterUrl?: string | null
    type?: $Enums.EventType
    isPaid?: boolean
    price?: number
    maxAttendees: number
    status?: $Enums.EventStatus
    featured?: boolean
    tags?: EventCreatetagsInput | string[]
    organizerId: string
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutEventInput
    eventForm?: EventFormUncheckedCreateNestedOneWithoutEventInput
    formSubmissions?: FormSubmissionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: EventUpdatetagsInput | string[]
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    registrations?: EventRegistrationUpdateManyWithoutEventNestedInput
    eventForm?: EventFormUpdateOneWithoutEventNestedInput
    formSubmissions?: FormSubmissionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: EventUpdatetagsInput | string[]
    organizerId?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: EventRegistrationUncheckedUpdateManyWithoutEventNestedInput
    eventForm?: EventFormUncheckedUpdateOneWithoutEventNestedInput
    formSubmissions?: FormSubmissionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    name: string
    description: string
    date: string
    time: string
    venue: string
    city: string
    state: string
    address?: string | null
    posterUrl?: string | null
    type?: $Enums.EventType
    isPaid?: boolean
    price?: number
    maxAttendees: number
    status?: $Enums.EventStatus
    featured?: boolean
    tags?: EventCreatetagsInput | string[]
    organizerId: string
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: EventUpdatetagsInput | string[]
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: EventUpdatetagsInput | string[]
    organizerId?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRegistrationCreateInput = {
    id?: string
    status?: $Enums.RegistrationStatus
    qrCode: string
    attendedAt?: Date | string | null
    notes?: string | null
    registeredAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRegistrationsInput
    event: EventCreateNestedOneWithoutRegistrationsInput
  }

  export type EventRegistrationUncheckedCreateInput = {
    id?: string
    userId: string
    eventId: string
    status?: $Enums.RegistrationStatus
    qrCode: string
    attendedAt?: Date | string | null
    notes?: string | null
    registeredAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
    event?: EventUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type EventRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRegistrationCreateManyInput = {
    id?: string
    userId: string
    eventId: string
    status?: $Enums.RegistrationStatus
    qrCode: string
    attendedAt?: Date | string | null
    notes?: string | null
    registeredAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventFormCreateInput = {
    id?: string
    fields: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutEventFormInput
    submissions?: FormSubmissionCreateNestedManyWithoutFormInput
  }

  export type EventFormUncheckedCreateInput = {
    id?: string
    eventId: string
    fields: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: FormSubmissionUncheckedCreateNestedManyWithoutFormInput
  }

  export type EventFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEventFormNestedInput
    submissions?: FormSubmissionUpdateManyWithoutFormNestedInput
  }

  export type EventFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: FormSubmissionUncheckedUpdateManyWithoutFormNestedInput
  }

  export type EventFormCreateManyInput = {
    id?: string
    eventId: string
    fields: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionCreateInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
    form: EventFormCreateNestedOneWithoutSubmissionsInput
    user: UserCreateNestedOneWithoutFormSubmissionsInput
    event: EventCreateNestedOneWithoutFormSubmissionsInput
  }

  export type FormSubmissionUncheckedCreateInput = {
    id?: string
    formId: string
    userId: string
    eventId: string
    data: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
  }

  export type FormSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: EventFormUpdateOneRequiredWithoutSubmissionsNestedInput
    user?: UserUpdateOneRequiredWithoutFormSubmissionsNestedInput
    event?: EventUpdateOneRequiredWithoutFormSubmissionsNestedInput
  }

  export type FormSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionCreateManyInput = {
    id?: string
    formId: string
    userId: string
    eventId: string
    data: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
  }

  export type FormSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventRegistrationListRelationFilter = {
    every?: EventRegistrationWhereInput
    some?: EventRegistrationWhereInput
    none?: EventRegistrationWhereInput
  }

  export type FormSubmissionListRelationFilter = {
    every?: FormSubmissionWhereInput
    some?: FormSubmissionWhereInput
    none?: FormSubmissionWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventRegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    college?: SortOrder
    department?: SortOrder
    year?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    rejectionReason?: SortOrder
    suspensionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    college?: SortOrder
    department?: SortOrder
    year?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    rejectionReason?: SortOrder
    suspensionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    college?: SortOrder
    department?: SortOrder
    year?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    rejectionReason?: SortOrder
    suspensionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EventFormNullableScalarRelationFilter = {
    is?: EventFormWhereInput | null
    isNot?: EventFormWhereInput | null
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    venue?: SortOrder
    city?: SortOrder
    state?: SortOrder
    address?: SortOrder
    posterUrl?: SortOrder
    type?: SortOrder
    isPaid?: SortOrder
    price?: SortOrder
    maxAttendees?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    tags?: SortOrder
    organizerId?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    price?: SortOrder
    maxAttendees?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    venue?: SortOrder
    city?: SortOrder
    state?: SortOrder
    address?: SortOrder
    posterUrl?: SortOrder
    type?: SortOrder
    isPaid?: SortOrder
    price?: SortOrder
    maxAttendees?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    organizerId?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    venue?: SortOrder
    city?: SortOrder
    state?: SortOrder
    address?: SortOrder
    posterUrl?: SortOrder
    type?: SortOrder
    isPaid?: SortOrder
    price?: SortOrder
    maxAttendees?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    organizerId?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    price?: SortOrder
    maxAttendees?: SortOrder
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type EnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventRegistrationUserIdEventIdCompoundUniqueInput = {
    userId: string
    eventId: string
  }

  export type EventRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    attendedAt?: SortOrder
    notes?: SortOrder
    registeredAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    attendedAt?: SortOrder
    notes?: SortOrder
    registeredAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    attendedAt?: SortOrder
    notes?: SortOrder
    registeredAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EventFormCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    fields?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventFormMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventFormMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EventFormScalarRelationFilter = {
    is?: EventFormWhereInput
    isNot?: EventFormWhereInput
  }

  export type FormSubmissionFormIdUserIdCompoundUniqueInput = {
    formId: string
    userId: string
  }

  export type FormSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    data?: SortOrder
    submittedAt?: SortOrder
  }

  export type FormSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    submittedAt?: SortOrder
  }

  export type FormSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    submittedAt?: SortOrder
  }

  export type EventCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventRegistrationCreateNestedManyWithoutUserInput = {
    create?: XOR<EventRegistrationCreateWithoutUserInput, EventRegistrationUncheckedCreateWithoutUserInput> | EventRegistrationCreateWithoutUserInput[] | EventRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutUserInput | EventRegistrationCreateOrConnectWithoutUserInput[]
    createMany?: EventRegistrationCreateManyUserInputEnvelope
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
  }

  export type FormSubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<FormSubmissionCreateWithoutUserInput, FormSubmissionUncheckedCreateWithoutUserInput> | FormSubmissionCreateWithoutUserInput[] | FormSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutUserInput | FormSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: FormSubmissionCreateManyUserInputEnvelope
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutApproverInput = {
    create?: XOR<UserCreateWithoutApproverInput, UserUncheckedCreateWithoutApproverInput> | UserCreateWithoutApproverInput[] | UserUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: UserCreateOrConnectWithoutApproverInput | UserCreateOrConnectWithoutApproverInput[]
    createMany?: UserCreateManyApproverInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutApprovedUsersInput = {
    create?: XOR<UserCreateWithoutApprovedUsersInput, UserUncheckedCreateWithoutApprovedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type EventUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventRegistrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventRegistrationCreateWithoutUserInput, EventRegistrationUncheckedCreateWithoutUserInput> | EventRegistrationCreateWithoutUserInput[] | EventRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutUserInput | EventRegistrationCreateOrConnectWithoutUserInput[]
    createMany?: EventRegistrationCreateManyUserInputEnvelope
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
  }

  export type FormSubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FormSubmissionCreateWithoutUserInput, FormSubmissionUncheckedCreateWithoutUserInput> | FormSubmissionCreateWithoutUserInput[] | FormSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutUserInput | FormSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: FormSubmissionCreateManyUserInputEnvelope
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<UserCreateWithoutApproverInput, UserUncheckedCreateWithoutApproverInput> | UserCreateWithoutApproverInput[] | UserUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: UserCreateOrConnectWithoutApproverInput | UserCreateOrConnectWithoutApproverInput[]
    createMany?: UserCreateManyApproverInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventRegistrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventRegistrationCreateWithoutUserInput, EventRegistrationUncheckedCreateWithoutUserInput> | EventRegistrationCreateWithoutUserInput[] | EventRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutUserInput | EventRegistrationCreateOrConnectWithoutUserInput[]
    upsert?: EventRegistrationUpsertWithWhereUniqueWithoutUserInput | EventRegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventRegistrationCreateManyUserInputEnvelope
    set?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    disconnect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    delete?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    update?: EventRegistrationUpdateWithWhereUniqueWithoutUserInput | EventRegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventRegistrationUpdateManyWithWhereWithoutUserInput | EventRegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
  }

  export type FormSubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<FormSubmissionCreateWithoutUserInput, FormSubmissionUncheckedCreateWithoutUserInput> | FormSubmissionCreateWithoutUserInput[] | FormSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutUserInput | FormSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: FormSubmissionUpsertWithWhereUniqueWithoutUserInput | FormSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FormSubmissionCreateManyUserInputEnvelope
    set?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    disconnect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    delete?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    update?: FormSubmissionUpdateWithWhereUniqueWithoutUserInput | FormSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FormSubmissionUpdateManyWithWhereWithoutUserInput | FormSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FormSubmissionScalarWhereInput | FormSubmissionScalarWhereInput[]
  }

  export type UserUpdateManyWithoutApproverNestedInput = {
    create?: XOR<UserCreateWithoutApproverInput, UserUncheckedCreateWithoutApproverInput> | UserCreateWithoutApproverInput[] | UserUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: UserCreateOrConnectWithoutApproverInput | UserCreateOrConnectWithoutApproverInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutApproverInput | UserUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: UserCreateManyApproverInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutApproverInput | UserUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: UserUpdateManyWithWhereWithoutApproverInput | UserUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneWithoutApprovedUsersNestedInput = {
    create?: XOR<UserCreateWithoutApprovedUsersInput, UserUncheckedCreateWithoutApprovedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedUsersInput
    upsert?: UserUpsertWithoutApprovedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovedUsersInput, UserUpdateWithoutApprovedUsersInput>, UserUncheckedUpdateWithoutApprovedUsersInput>
  }

  export type EventUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventRegistrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventRegistrationCreateWithoutUserInput, EventRegistrationUncheckedCreateWithoutUserInput> | EventRegistrationCreateWithoutUserInput[] | EventRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutUserInput | EventRegistrationCreateOrConnectWithoutUserInput[]
    upsert?: EventRegistrationUpsertWithWhereUniqueWithoutUserInput | EventRegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventRegistrationCreateManyUserInputEnvelope
    set?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    disconnect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    delete?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    update?: EventRegistrationUpdateWithWhereUniqueWithoutUserInput | EventRegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventRegistrationUpdateManyWithWhereWithoutUserInput | EventRegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
  }

  export type FormSubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FormSubmissionCreateWithoutUserInput, FormSubmissionUncheckedCreateWithoutUserInput> | FormSubmissionCreateWithoutUserInput[] | FormSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutUserInput | FormSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: FormSubmissionUpsertWithWhereUniqueWithoutUserInput | FormSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FormSubmissionCreateManyUserInputEnvelope
    set?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    disconnect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    delete?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    update?: FormSubmissionUpdateWithWhereUniqueWithoutUserInput | FormSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FormSubmissionUpdateManyWithWhereWithoutUserInput | FormSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FormSubmissionScalarWhereInput | FormSubmissionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<UserCreateWithoutApproverInput, UserUncheckedCreateWithoutApproverInput> | UserCreateWithoutApproverInput[] | UserUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: UserCreateOrConnectWithoutApproverInput | UserCreateOrConnectWithoutApproverInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutApproverInput | UserUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: UserCreateManyApproverInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutApproverInput | UserUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: UserUpdateManyWithWhereWithoutApproverInput | UserUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EventCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutOrganizedEventsInput = {
    create?: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizedEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EventRegistrationCreateNestedManyWithoutEventInput = {
    create?: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput> | EventRegistrationCreateWithoutEventInput[] | EventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutEventInput | EventRegistrationCreateOrConnectWithoutEventInput[]
    createMany?: EventRegistrationCreateManyEventInputEnvelope
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
  }

  export type EventFormCreateNestedOneWithoutEventInput = {
    create?: XOR<EventFormCreateWithoutEventInput, EventFormUncheckedCreateWithoutEventInput>
    connectOrCreate?: EventFormCreateOrConnectWithoutEventInput
    connect?: EventFormWhereUniqueInput
  }

  export type FormSubmissionCreateNestedManyWithoutEventInput = {
    create?: XOR<FormSubmissionCreateWithoutEventInput, FormSubmissionUncheckedCreateWithoutEventInput> | FormSubmissionCreateWithoutEventInput[] | FormSubmissionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutEventInput | FormSubmissionCreateOrConnectWithoutEventInput[]
    createMany?: FormSubmissionCreateManyEventInputEnvelope
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
  }

  export type EventRegistrationUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput> | EventRegistrationCreateWithoutEventInput[] | EventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutEventInput | EventRegistrationCreateOrConnectWithoutEventInput[]
    createMany?: EventRegistrationCreateManyEventInputEnvelope
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
  }

  export type EventFormUncheckedCreateNestedOneWithoutEventInput = {
    create?: XOR<EventFormCreateWithoutEventInput, EventFormUncheckedCreateWithoutEventInput>
    connectOrCreate?: EventFormCreateOrConnectWithoutEventInput
    connect?: EventFormWhereUniqueInput
  }

  export type FormSubmissionUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<FormSubmissionCreateWithoutEventInput, FormSubmissionUncheckedCreateWithoutEventInput> | FormSubmissionCreateWithoutEventInput[] | FormSubmissionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutEventInput | FormSubmissionCreateOrConnectWithoutEventInput[]
    createMany?: FormSubmissionCreateManyEventInputEnvelope
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type EventUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutOrganizedEventsNestedInput = {
    create?: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizedEventsInput
    upsert?: UserUpsertWithoutOrganizedEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganizedEventsInput, UserUpdateWithoutOrganizedEventsInput>, UserUncheckedUpdateWithoutOrganizedEventsInput>
  }

  export type EventRegistrationUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput> | EventRegistrationCreateWithoutEventInput[] | EventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutEventInput | EventRegistrationCreateOrConnectWithoutEventInput[]
    upsert?: EventRegistrationUpsertWithWhereUniqueWithoutEventInput | EventRegistrationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventRegistrationCreateManyEventInputEnvelope
    set?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    disconnect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    delete?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    update?: EventRegistrationUpdateWithWhereUniqueWithoutEventInput | EventRegistrationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventRegistrationUpdateManyWithWhereWithoutEventInput | EventRegistrationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
  }

  export type EventFormUpdateOneWithoutEventNestedInput = {
    create?: XOR<EventFormCreateWithoutEventInput, EventFormUncheckedCreateWithoutEventInput>
    connectOrCreate?: EventFormCreateOrConnectWithoutEventInput
    upsert?: EventFormUpsertWithoutEventInput
    disconnect?: EventFormWhereInput | boolean
    delete?: EventFormWhereInput | boolean
    connect?: EventFormWhereUniqueInput
    update?: XOR<XOR<EventFormUpdateToOneWithWhereWithoutEventInput, EventFormUpdateWithoutEventInput>, EventFormUncheckedUpdateWithoutEventInput>
  }

  export type FormSubmissionUpdateManyWithoutEventNestedInput = {
    create?: XOR<FormSubmissionCreateWithoutEventInput, FormSubmissionUncheckedCreateWithoutEventInput> | FormSubmissionCreateWithoutEventInput[] | FormSubmissionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutEventInput | FormSubmissionCreateOrConnectWithoutEventInput[]
    upsert?: FormSubmissionUpsertWithWhereUniqueWithoutEventInput | FormSubmissionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: FormSubmissionCreateManyEventInputEnvelope
    set?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    disconnect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    delete?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    update?: FormSubmissionUpdateWithWhereUniqueWithoutEventInput | FormSubmissionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: FormSubmissionUpdateManyWithWhereWithoutEventInput | FormSubmissionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: FormSubmissionScalarWhereInput | FormSubmissionScalarWhereInput[]
  }

  export type EventRegistrationUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput> | EventRegistrationCreateWithoutEventInput[] | EventRegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegistrationCreateOrConnectWithoutEventInput | EventRegistrationCreateOrConnectWithoutEventInput[]
    upsert?: EventRegistrationUpsertWithWhereUniqueWithoutEventInput | EventRegistrationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventRegistrationCreateManyEventInputEnvelope
    set?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    disconnect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    delete?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    connect?: EventRegistrationWhereUniqueInput | EventRegistrationWhereUniqueInput[]
    update?: EventRegistrationUpdateWithWhereUniqueWithoutEventInput | EventRegistrationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventRegistrationUpdateManyWithWhereWithoutEventInput | EventRegistrationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
  }

  export type EventFormUncheckedUpdateOneWithoutEventNestedInput = {
    create?: XOR<EventFormCreateWithoutEventInput, EventFormUncheckedCreateWithoutEventInput>
    connectOrCreate?: EventFormCreateOrConnectWithoutEventInput
    upsert?: EventFormUpsertWithoutEventInput
    disconnect?: EventFormWhereInput | boolean
    delete?: EventFormWhereInput | boolean
    connect?: EventFormWhereUniqueInput
    update?: XOR<XOR<EventFormUpdateToOneWithWhereWithoutEventInput, EventFormUpdateWithoutEventInput>, EventFormUncheckedUpdateWithoutEventInput>
  }

  export type FormSubmissionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<FormSubmissionCreateWithoutEventInput, FormSubmissionUncheckedCreateWithoutEventInput> | FormSubmissionCreateWithoutEventInput[] | FormSubmissionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutEventInput | FormSubmissionCreateOrConnectWithoutEventInput[]
    upsert?: FormSubmissionUpsertWithWhereUniqueWithoutEventInput | FormSubmissionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: FormSubmissionCreateManyEventInputEnvelope
    set?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    disconnect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    delete?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    update?: FormSubmissionUpdateWithWhereUniqueWithoutEventInput | FormSubmissionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: FormSubmissionUpdateManyWithWhereWithoutEventInput | FormSubmissionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: FormSubmissionScalarWhereInput | FormSubmissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRegistrationsInput
    connect?: EventWhereUniqueInput
  }

  export type EnumRegistrationStatusFieldUpdateOperationsInput = {
    set?: $Enums.RegistrationStatus
  }

  export type UserUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    upsert?: UserUpsertWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegistrationsInput, UserUpdateWithoutRegistrationsInput>, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type EventUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRegistrationsInput
    upsert?: EventUpsertWithoutRegistrationsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutRegistrationsInput, EventUpdateWithoutRegistrationsInput>, EventUncheckedUpdateWithoutRegistrationsInput>
  }

  export type EventCreateNestedOneWithoutEventFormInput = {
    create?: XOR<EventCreateWithoutEventFormInput, EventUncheckedCreateWithoutEventFormInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventFormInput
    connect?: EventWhereUniqueInput
  }

  export type FormSubmissionCreateNestedManyWithoutFormInput = {
    create?: XOR<FormSubmissionCreateWithoutFormInput, FormSubmissionUncheckedCreateWithoutFormInput> | FormSubmissionCreateWithoutFormInput[] | FormSubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutFormInput | FormSubmissionCreateOrConnectWithoutFormInput[]
    createMany?: FormSubmissionCreateManyFormInputEnvelope
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
  }

  export type FormSubmissionUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<FormSubmissionCreateWithoutFormInput, FormSubmissionUncheckedCreateWithoutFormInput> | FormSubmissionCreateWithoutFormInput[] | FormSubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutFormInput | FormSubmissionCreateOrConnectWithoutFormInput[]
    createMany?: FormSubmissionCreateManyFormInputEnvelope
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutEventFormNestedInput = {
    create?: XOR<EventCreateWithoutEventFormInput, EventUncheckedCreateWithoutEventFormInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventFormInput
    upsert?: EventUpsertWithoutEventFormInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventFormInput, EventUpdateWithoutEventFormInput>, EventUncheckedUpdateWithoutEventFormInput>
  }

  export type FormSubmissionUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormSubmissionCreateWithoutFormInput, FormSubmissionUncheckedCreateWithoutFormInput> | FormSubmissionCreateWithoutFormInput[] | FormSubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutFormInput | FormSubmissionCreateOrConnectWithoutFormInput[]
    upsert?: FormSubmissionUpsertWithWhereUniqueWithoutFormInput | FormSubmissionUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormSubmissionCreateManyFormInputEnvelope
    set?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    disconnect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    delete?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    update?: FormSubmissionUpdateWithWhereUniqueWithoutFormInput | FormSubmissionUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormSubmissionUpdateManyWithWhereWithoutFormInput | FormSubmissionUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormSubmissionScalarWhereInput | FormSubmissionScalarWhereInput[]
  }

  export type FormSubmissionUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormSubmissionCreateWithoutFormInput, FormSubmissionUncheckedCreateWithoutFormInput> | FormSubmissionCreateWithoutFormInput[] | FormSubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormSubmissionCreateOrConnectWithoutFormInput | FormSubmissionCreateOrConnectWithoutFormInput[]
    upsert?: FormSubmissionUpsertWithWhereUniqueWithoutFormInput | FormSubmissionUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormSubmissionCreateManyFormInputEnvelope
    set?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    disconnect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    delete?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    connect?: FormSubmissionWhereUniqueInput | FormSubmissionWhereUniqueInput[]
    update?: FormSubmissionUpdateWithWhereUniqueWithoutFormInput | FormSubmissionUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormSubmissionUpdateManyWithWhereWithoutFormInput | FormSubmissionUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormSubmissionScalarWhereInput | FormSubmissionScalarWhereInput[]
  }

  export type EventFormCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<EventFormCreateWithoutSubmissionsInput, EventFormUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: EventFormCreateOrConnectWithoutSubmissionsInput
    connect?: EventFormWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFormSubmissionsInput = {
    create?: XOR<UserCreateWithoutFormSubmissionsInput, UserUncheckedCreateWithoutFormSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutFormSubmissionsInput = {
    create?: XOR<EventCreateWithoutFormSubmissionsInput, EventUncheckedCreateWithoutFormSubmissionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutFormSubmissionsInput
    connect?: EventWhereUniqueInput
  }

  export type EventFormUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<EventFormCreateWithoutSubmissionsInput, EventFormUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: EventFormCreateOrConnectWithoutSubmissionsInput
    upsert?: EventFormUpsertWithoutSubmissionsInput
    connect?: EventFormWhereUniqueInput
    update?: XOR<XOR<EventFormUpdateToOneWithWhereWithoutSubmissionsInput, EventFormUpdateWithoutSubmissionsInput>, EventFormUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneRequiredWithoutFormSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutFormSubmissionsInput, UserUncheckedCreateWithoutFormSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormSubmissionsInput
    upsert?: UserUpsertWithoutFormSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFormSubmissionsInput, UserUpdateWithoutFormSubmissionsInput>, UserUncheckedUpdateWithoutFormSubmissionsInput>
  }

  export type EventUpdateOneRequiredWithoutFormSubmissionsNestedInput = {
    create?: XOR<EventCreateWithoutFormSubmissionsInput, EventUncheckedCreateWithoutFormSubmissionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutFormSubmissionsInput
    upsert?: EventUpsertWithoutFormSubmissionsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutFormSubmissionsInput, EventUpdateWithoutFormSubmissionsInput>, EventUncheckedUpdateWithoutFormSubmissionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type NestedEnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EventCreateWithoutOrganizerInput = {
    id?: string
    name: string
    description: string
    date: string
    time: string
    venue: string
    city: string
    state: string
    address?: string | null
    posterUrl?: string | null
    type?: $Enums.EventType
    isPaid?: boolean
    price?: number
    maxAttendees: number
    status?: $Enums.EventStatus
    featured?: boolean
    tags?: EventCreatetagsInput | string[]
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: EventRegistrationCreateNestedManyWithoutEventInput
    eventForm?: EventFormCreateNestedOneWithoutEventInput
    formSubmissions?: FormSubmissionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrganizerInput = {
    id?: string
    name: string
    description: string
    date: string
    time: string
    venue: string
    city: string
    state: string
    address?: string | null
    posterUrl?: string | null
    type?: $Enums.EventType
    isPaid?: boolean
    price?: number
    maxAttendees: number
    status?: $Enums.EventStatus
    featured?: boolean
    tags?: EventCreatetagsInput | string[]
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutEventInput
    eventForm?: EventFormUncheckedCreateNestedOneWithoutEventInput
    formSubmissions?: FormSubmissionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventCreateManyOrganizerInputEnvelope = {
    data: EventCreateManyOrganizerInput | EventCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type EventRegistrationCreateWithoutUserInput = {
    id?: string
    status?: $Enums.RegistrationStatus
    qrCode: string
    attendedAt?: Date | string | null
    notes?: string | null
    registeredAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutRegistrationsInput
  }

  export type EventRegistrationUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    status?: $Enums.RegistrationStatus
    qrCode: string
    attendedAt?: Date | string | null
    notes?: string | null
    registeredAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventRegistrationCreateOrConnectWithoutUserInput = {
    where: EventRegistrationWhereUniqueInput
    create: XOR<EventRegistrationCreateWithoutUserInput, EventRegistrationUncheckedCreateWithoutUserInput>
  }

  export type EventRegistrationCreateManyUserInputEnvelope = {
    data: EventRegistrationCreateManyUserInput | EventRegistrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FormSubmissionCreateWithoutUserInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
    form: EventFormCreateNestedOneWithoutSubmissionsInput
    event: EventCreateNestedOneWithoutFormSubmissionsInput
  }

  export type FormSubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    formId: string
    eventId: string
    data: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
  }

  export type FormSubmissionCreateOrConnectWithoutUserInput = {
    where: FormSubmissionWhereUniqueInput
    create: XOR<FormSubmissionCreateWithoutUserInput, FormSubmissionUncheckedCreateWithoutUserInput>
  }

  export type FormSubmissionCreateManyUserInputEnvelope = {
    data: FormSubmissionCreateManyUserInput | FormSubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutApproverInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    avatar?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    college?: string | null
    department?: string | null
    year?: string | null
    approvedAt?: Date | string | null
    rejectionReason?: string | null
    suspensionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationCreateNestedManyWithoutUserInput
    formSubmissions?: FormSubmissionCreateNestedManyWithoutUserInput
    approvedUsers?: UserCreateNestedManyWithoutApproverInput
  }

  export type UserUncheckedCreateWithoutApproverInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    avatar?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    college?: string | null
    department?: string | null
    year?: string | null
    approvedAt?: Date | string | null
    rejectionReason?: string | null
    suspensionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutUserInput
    formSubmissions?: FormSubmissionUncheckedCreateNestedManyWithoutUserInput
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApproverInput
  }

  export type UserCreateOrConnectWithoutApproverInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApproverInput, UserUncheckedCreateWithoutApproverInput>
  }

  export type UserCreateManyApproverInputEnvelope = {
    data: UserCreateManyApproverInput | UserCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutApprovedUsersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    avatar?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    college?: string | null
    department?: string | null
    year?: string | null
    approvedAt?: Date | string | null
    rejectionReason?: string | null
    suspensionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationCreateNestedManyWithoutUserInput
    formSubmissions?: FormSubmissionCreateNestedManyWithoutUserInput
    approver?: UserCreateNestedOneWithoutApprovedUsersInput
  }

  export type UserUncheckedCreateWithoutApprovedUsersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    avatar?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    college?: string | null
    department?: string | null
    year?: string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectionReason?: string | null
    suspensionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutUserInput
    formSubmissions?: FormSubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprovedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedUsersInput, UserUncheckedCreateWithoutApprovedUsersInput>
  }

  export type EventUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
  }

  export type EventUpdateManyWithWhereWithoutOrganizerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: StringFilter<"Event"> | string
    time?: StringFilter<"Event"> | string
    venue?: StringFilter<"Event"> | string
    city?: StringFilter<"Event"> | string
    state?: StringFilter<"Event"> | string
    address?: StringNullableFilter<"Event"> | string | null
    posterUrl?: StringNullableFilter<"Event"> | string | null
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    isPaid?: BoolFilter<"Event"> | boolean
    price?: FloatFilter<"Event"> | number
    maxAttendees?: IntFilter<"Event"> | number
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    featured?: BoolFilter<"Event"> | boolean
    tags?: StringNullableListFilter<"Event">
    organizerId?: StringFilter<"Event"> | string
    rejectionReason?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventRegistrationUpsertWithWhereUniqueWithoutUserInput = {
    where: EventRegistrationWhereUniqueInput
    update: XOR<EventRegistrationUpdateWithoutUserInput, EventRegistrationUncheckedUpdateWithoutUserInput>
    create: XOR<EventRegistrationCreateWithoutUserInput, EventRegistrationUncheckedCreateWithoutUserInput>
  }

  export type EventRegistrationUpdateWithWhereUniqueWithoutUserInput = {
    where: EventRegistrationWhereUniqueInput
    data: XOR<EventRegistrationUpdateWithoutUserInput, EventRegistrationUncheckedUpdateWithoutUserInput>
  }

  export type EventRegistrationUpdateManyWithWhereWithoutUserInput = {
    where: EventRegistrationScalarWhereInput
    data: XOR<EventRegistrationUpdateManyMutationInput, EventRegistrationUncheckedUpdateManyWithoutUserInput>
  }

  export type EventRegistrationScalarWhereInput = {
    AND?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
    OR?: EventRegistrationScalarWhereInput[]
    NOT?: EventRegistrationScalarWhereInput | EventRegistrationScalarWhereInput[]
    id?: StringFilter<"EventRegistration"> | string
    userId?: StringFilter<"EventRegistration"> | string
    eventId?: StringFilter<"EventRegistration"> | string
    status?: EnumRegistrationStatusFilter<"EventRegistration"> | $Enums.RegistrationStatus
    qrCode?: StringFilter<"EventRegistration"> | string
    attendedAt?: DateTimeNullableFilter<"EventRegistration"> | Date | string | null
    notes?: StringNullableFilter<"EventRegistration"> | string | null
    registeredAt?: DateTimeFilter<"EventRegistration"> | Date | string
    updatedAt?: DateTimeFilter<"EventRegistration"> | Date | string
  }

  export type FormSubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: FormSubmissionWhereUniqueInput
    update: XOR<FormSubmissionUpdateWithoutUserInput, FormSubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<FormSubmissionCreateWithoutUserInput, FormSubmissionUncheckedCreateWithoutUserInput>
  }

  export type FormSubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: FormSubmissionWhereUniqueInput
    data: XOR<FormSubmissionUpdateWithoutUserInput, FormSubmissionUncheckedUpdateWithoutUserInput>
  }

  export type FormSubmissionUpdateManyWithWhereWithoutUserInput = {
    where: FormSubmissionScalarWhereInput
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type FormSubmissionScalarWhereInput = {
    AND?: FormSubmissionScalarWhereInput | FormSubmissionScalarWhereInput[]
    OR?: FormSubmissionScalarWhereInput[]
    NOT?: FormSubmissionScalarWhereInput | FormSubmissionScalarWhereInput[]
    id?: StringFilter<"FormSubmission"> | string
    formId?: StringFilter<"FormSubmission"> | string
    userId?: StringFilter<"FormSubmission"> | string
    eventId?: StringFilter<"FormSubmission"> | string
    data?: JsonFilter<"FormSubmission">
    submittedAt?: DateTimeFilter<"FormSubmission"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutApproverInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutApproverInput, UserUncheckedUpdateWithoutApproverInput>
    create: XOR<UserCreateWithoutApproverInput, UserUncheckedCreateWithoutApproverInput>
  }

  export type UserUpdateWithWhereUniqueWithoutApproverInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutApproverInput, UserUncheckedUpdateWithoutApproverInput>
  }

  export type UserUpdateManyWithWhereWithoutApproverInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutApproverInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    college?: StringNullableFilter<"User"> | string | null
    department?: StringNullableFilter<"User"> | string | null
    year?: StringNullableFilter<"User"> | string | null
    approvedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    approvedBy?: StringNullableFilter<"User"> | string | null
    rejectionReason?: StringNullableFilter<"User"> | string | null
    suspensionReason?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserUpsertWithoutApprovedUsersInput = {
    update: XOR<UserUpdateWithoutApprovedUsersInput, UserUncheckedUpdateWithoutApprovedUsersInput>
    create: XOR<UserCreateWithoutApprovedUsersInput, UserUncheckedCreateWithoutApprovedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovedUsersInput, UserUncheckedUpdateWithoutApprovedUsersInput>
  }

  export type UserUpdateWithoutApprovedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    college?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUpdateManyWithoutUserNestedInput
    formSubmissions?: FormSubmissionUpdateManyWithoutUserNestedInput
    approver?: UserUpdateOneWithoutApprovedUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    college?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUncheckedUpdateManyWithoutUserNestedInput
    formSubmissions?: FormSubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOrganizedEventsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    avatar?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    college?: string | null
    department?: string | null
    year?: string | null
    approvedAt?: Date | string | null
    rejectionReason?: string | null
    suspensionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: EventRegistrationCreateNestedManyWithoutUserInput
    formSubmissions?: FormSubmissionCreateNestedManyWithoutUserInput
    approvedUsers?: UserCreateNestedManyWithoutApproverInput
    approver?: UserCreateNestedOneWithoutApprovedUsersInput
  }

  export type UserUncheckedCreateWithoutOrganizedEventsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    avatar?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    college?: string | null
    department?: string | null
    year?: string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectionReason?: string | null
    suspensionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutUserInput
    formSubmissions?: FormSubmissionUncheckedCreateNestedManyWithoutUserInput
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApproverInput
  }

  export type UserCreateOrConnectWithoutOrganizedEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
  }

  export type EventRegistrationCreateWithoutEventInput = {
    id?: string
    status?: $Enums.RegistrationStatus
    qrCode: string
    attendedAt?: Date | string | null
    notes?: string | null
    registeredAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRegistrationsInput
  }

  export type EventRegistrationUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    status?: $Enums.RegistrationStatus
    qrCode: string
    attendedAt?: Date | string | null
    notes?: string | null
    registeredAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventRegistrationCreateOrConnectWithoutEventInput = {
    where: EventRegistrationWhereUniqueInput
    create: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput>
  }

  export type EventRegistrationCreateManyEventInputEnvelope = {
    data: EventRegistrationCreateManyEventInput | EventRegistrationCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventFormCreateWithoutEventInput = {
    id?: string
    fields: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: FormSubmissionCreateNestedManyWithoutFormInput
  }

  export type EventFormUncheckedCreateWithoutEventInput = {
    id?: string
    fields: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: FormSubmissionUncheckedCreateNestedManyWithoutFormInput
  }

  export type EventFormCreateOrConnectWithoutEventInput = {
    where: EventFormWhereUniqueInput
    create: XOR<EventFormCreateWithoutEventInput, EventFormUncheckedCreateWithoutEventInput>
  }

  export type FormSubmissionCreateWithoutEventInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
    form: EventFormCreateNestedOneWithoutSubmissionsInput
    user: UserCreateNestedOneWithoutFormSubmissionsInput
  }

  export type FormSubmissionUncheckedCreateWithoutEventInput = {
    id?: string
    formId: string
    userId: string
    data: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
  }

  export type FormSubmissionCreateOrConnectWithoutEventInput = {
    where: FormSubmissionWhereUniqueInput
    create: XOR<FormSubmissionCreateWithoutEventInput, FormSubmissionUncheckedCreateWithoutEventInput>
  }

  export type FormSubmissionCreateManyEventInputEnvelope = {
    data: FormSubmissionCreateManyEventInput | FormSubmissionCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrganizedEventsInput = {
    update: XOR<UserUpdateWithoutOrganizedEventsInput, UserUncheckedUpdateWithoutOrganizedEventsInput>
    create: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganizedEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganizedEventsInput, UserUncheckedUpdateWithoutOrganizedEventsInput>
  }

  export type UserUpdateWithoutOrganizedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    college?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: EventRegistrationUpdateManyWithoutUserNestedInput
    formSubmissions?: FormSubmissionUpdateManyWithoutUserNestedInput
    approvedUsers?: UserUpdateManyWithoutApproverNestedInput
    approver?: UserUpdateOneWithoutApprovedUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    college?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: EventRegistrationUncheckedUpdateManyWithoutUserNestedInput
    formSubmissions?: FormSubmissionUncheckedUpdateManyWithoutUserNestedInput
    approvedUsers?: UserUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type EventRegistrationUpsertWithWhereUniqueWithoutEventInput = {
    where: EventRegistrationWhereUniqueInput
    update: XOR<EventRegistrationUpdateWithoutEventInput, EventRegistrationUncheckedUpdateWithoutEventInput>
    create: XOR<EventRegistrationCreateWithoutEventInput, EventRegistrationUncheckedCreateWithoutEventInput>
  }

  export type EventRegistrationUpdateWithWhereUniqueWithoutEventInput = {
    where: EventRegistrationWhereUniqueInput
    data: XOR<EventRegistrationUpdateWithoutEventInput, EventRegistrationUncheckedUpdateWithoutEventInput>
  }

  export type EventRegistrationUpdateManyWithWhereWithoutEventInput = {
    where: EventRegistrationScalarWhereInput
    data: XOR<EventRegistrationUpdateManyMutationInput, EventRegistrationUncheckedUpdateManyWithoutEventInput>
  }

  export type EventFormUpsertWithoutEventInput = {
    update: XOR<EventFormUpdateWithoutEventInput, EventFormUncheckedUpdateWithoutEventInput>
    create: XOR<EventFormCreateWithoutEventInput, EventFormUncheckedCreateWithoutEventInput>
    where?: EventFormWhereInput
  }

  export type EventFormUpdateToOneWithWhereWithoutEventInput = {
    where?: EventFormWhereInput
    data: XOR<EventFormUpdateWithoutEventInput, EventFormUncheckedUpdateWithoutEventInput>
  }

  export type EventFormUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: FormSubmissionUpdateManyWithoutFormNestedInput
  }

  export type EventFormUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: FormSubmissionUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormSubmissionUpsertWithWhereUniqueWithoutEventInput = {
    where: FormSubmissionWhereUniqueInput
    update: XOR<FormSubmissionUpdateWithoutEventInput, FormSubmissionUncheckedUpdateWithoutEventInput>
    create: XOR<FormSubmissionCreateWithoutEventInput, FormSubmissionUncheckedCreateWithoutEventInput>
  }

  export type FormSubmissionUpdateWithWhereUniqueWithoutEventInput = {
    where: FormSubmissionWhereUniqueInput
    data: XOR<FormSubmissionUpdateWithoutEventInput, FormSubmissionUncheckedUpdateWithoutEventInput>
  }

  export type FormSubmissionUpdateManyWithWhereWithoutEventInput = {
    where: FormSubmissionScalarWhereInput
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyWithoutEventInput>
  }

  export type UserCreateWithoutRegistrationsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    avatar?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    college?: string | null
    department?: string | null
    year?: string | null
    approvedAt?: Date | string | null
    rejectionReason?: string | null
    suspensionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    formSubmissions?: FormSubmissionCreateNestedManyWithoutUserInput
    approvedUsers?: UserCreateNestedManyWithoutApproverInput
    approver?: UserCreateNestedOneWithoutApprovedUsersInput
  }

  export type UserUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    avatar?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    college?: string | null
    department?: string | null
    year?: string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectionReason?: string | null
    suspensionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    formSubmissions?: FormSubmissionUncheckedCreateNestedManyWithoutUserInput
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApproverInput
  }

  export type UserCreateOrConnectWithoutRegistrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
  }

  export type EventCreateWithoutRegistrationsInput = {
    id?: string
    name: string
    description: string
    date: string
    time: string
    venue: string
    city: string
    state: string
    address?: string | null
    posterUrl?: string | null
    type?: $Enums.EventType
    isPaid?: boolean
    price?: number
    maxAttendees: number
    status?: $Enums.EventStatus
    featured?: boolean
    tags?: EventCreatetagsInput | string[]
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    eventForm?: EventFormCreateNestedOneWithoutEventInput
    formSubmissions?: FormSubmissionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    name: string
    description: string
    date: string
    time: string
    venue: string
    city: string
    state: string
    address?: string | null
    posterUrl?: string | null
    type?: $Enums.EventType
    isPaid?: boolean
    price?: number
    maxAttendees: number
    status?: $Enums.EventStatus
    featured?: boolean
    tags?: EventCreatetagsInput | string[]
    organizerId: string
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    eventForm?: EventFormUncheckedCreateNestedOneWithoutEventInput
    formSubmissions?: FormSubmissionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutRegistrationsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
  }

  export type UserUpsertWithoutRegistrationsInput = {
    update: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    college?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    formSubmissions?: FormSubmissionUpdateManyWithoutUserNestedInput
    approvedUsers?: UserUpdateManyWithoutApproverNestedInput
    approver?: UserUpdateOneWithoutApprovedUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    college?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    formSubmissions?: FormSubmissionUncheckedUpdateManyWithoutUserNestedInput
    approvedUsers?: UserUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type EventUpsertWithoutRegistrationsInput = {
    update: XOR<EventUpdateWithoutRegistrationsInput, EventUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutRegistrationsInput, EventUncheckedUpdateWithoutRegistrationsInput>
  }

  export type EventUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: EventUpdatetagsInput | string[]
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    eventForm?: EventFormUpdateOneWithoutEventNestedInput
    formSubmissions?: FormSubmissionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: EventUpdatetagsInput | string[]
    organizerId?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventForm?: EventFormUncheckedUpdateOneWithoutEventNestedInput
    formSubmissions?: FormSubmissionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateWithoutEventFormInput = {
    id?: string
    name: string
    description: string
    date: string
    time: string
    venue: string
    city: string
    state: string
    address?: string | null
    posterUrl?: string | null
    type?: $Enums.EventType
    isPaid?: boolean
    price?: number
    maxAttendees: number
    status?: $Enums.EventStatus
    featured?: boolean
    tags?: EventCreatetagsInput | string[]
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    registrations?: EventRegistrationCreateNestedManyWithoutEventInput
    formSubmissions?: FormSubmissionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventFormInput = {
    id?: string
    name: string
    description: string
    date: string
    time: string
    venue: string
    city: string
    state: string
    address?: string | null
    posterUrl?: string | null
    type?: $Enums.EventType
    isPaid?: boolean
    price?: number
    maxAttendees: number
    status?: $Enums.EventStatus
    featured?: boolean
    tags?: EventCreatetagsInput | string[]
    organizerId: string
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutEventInput
    formSubmissions?: FormSubmissionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventFormInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventFormInput, EventUncheckedCreateWithoutEventFormInput>
  }

  export type FormSubmissionCreateWithoutFormInput = {
    id?: string
    data: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
    user: UserCreateNestedOneWithoutFormSubmissionsInput
    event: EventCreateNestedOneWithoutFormSubmissionsInput
  }

  export type FormSubmissionUncheckedCreateWithoutFormInput = {
    id?: string
    userId: string
    eventId: string
    data: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
  }

  export type FormSubmissionCreateOrConnectWithoutFormInput = {
    where: FormSubmissionWhereUniqueInput
    create: XOR<FormSubmissionCreateWithoutFormInput, FormSubmissionUncheckedCreateWithoutFormInput>
  }

  export type FormSubmissionCreateManyFormInputEnvelope = {
    data: FormSubmissionCreateManyFormInput | FormSubmissionCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutEventFormInput = {
    update: XOR<EventUpdateWithoutEventFormInput, EventUncheckedUpdateWithoutEventFormInput>
    create: XOR<EventCreateWithoutEventFormInput, EventUncheckedCreateWithoutEventFormInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventFormInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventFormInput, EventUncheckedUpdateWithoutEventFormInput>
  }

  export type EventUpdateWithoutEventFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: EventUpdatetagsInput | string[]
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    registrations?: EventRegistrationUpdateManyWithoutEventNestedInput
    formSubmissions?: FormSubmissionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: EventUpdatetagsInput | string[]
    organizerId?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: EventRegistrationUncheckedUpdateManyWithoutEventNestedInput
    formSubmissions?: FormSubmissionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type FormSubmissionUpsertWithWhereUniqueWithoutFormInput = {
    where: FormSubmissionWhereUniqueInput
    update: XOR<FormSubmissionUpdateWithoutFormInput, FormSubmissionUncheckedUpdateWithoutFormInput>
    create: XOR<FormSubmissionCreateWithoutFormInput, FormSubmissionUncheckedCreateWithoutFormInput>
  }

  export type FormSubmissionUpdateWithWhereUniqueWithoutFormInput = {
    where: FormSubmissionWhereUniqueInput
    data: XOR<FormSubmissionUpdateWithoutFormInput, FormSubmissionUncheckedUpdateWithoutFormInput>
  }

  export type FormSubmissionUpdateManyWithWhereWithoutFormInput = {
    where: FormSubmissionScalarWhereInput
    data: XOR<FormSubmissionUpdateManyMutationInput, FormSubmissionUncheckedUpdateManyWithoutFormInput>
  }

  export type EventFormCreateWithoutSubmissionsInput = {
    id?: string
    fields: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutEventFormInput
  }

  export type EventFormUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    eventId: string
    fields: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventFormCreateOrConnectWithoutSubmissionsInput = {
    where: EventFormWhereUniqueInput
    create: XOR<EventFormCreateWithoutSubmissionsInput, EventFormUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutFormSubmissionsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    avatar?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    college?: string | null
    department?: string | null
    year?: string | null
    approvedAt?: Date | string | null
    rejectionReason?: string | null
    suspensionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationCreateNestedManyWithoutUserInput
    approvedUsers?: UserCreateNestedManyWithoutApproverInput
    approver?: UserCreateNestedOneWithoutApprovedUsersInput
  }

  export type UserUncheckedCreateWithoutFormSubmissionsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    avatar?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    college?: string | null
    department?: string | null
    year?: string | null
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectionReason?: string | null
    suspensionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutUserInput
    approvedUsers?: UserUncheckedCreateNestedManyWithoutApproverInput
  }

  export type UserCreateOrConnectWithoutFormSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFormSubmissionsInput, UserUncheckedCreateWithoutFormSubmissionsInput>
  }

  export type EventCreateWithoutFormSubmissionsInput = {
    id?: string
    name: string
    description: string
    date: string
    time: string
    venue: string
    city: string
    state: string
    address?: string | null
    posterUrl?: string | null
    type?: $Enums.EventType
    isPaid?: boolean
    price?: number
    maxAttendees: number
    status?: $Enums.EventStatus
    featured?: boolean
    tags?: EventCreatetagsInput | string[]
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    registrations?: EventRegistrationCreateNestedManyWithoutEventInput
    eventForm?: EventFormCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutFormSubmissionsInput = {
    id?: string
    name: string
    description: string
    date: string
    time: string
    venue: string
    city: string
    state: string
    address?: string | null
    posterUrl?: string | null
    type?: $Enums.EventType
    isPaid?: boolean
    price?: number
    maxAttendees: number
    status?: $Enums.EventStatus
    featured?: boolean
    tags?: EventCreatetagsInput | string[]
    organizerId: string
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: EventRegistrationUncheckedCreateNestedManyWithoutEventInput
    eventForm?: EventFormUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutFormSubmissionsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutFormSubmissionsInput, EventUncheckedCreateWithoutFormSubmissionsInput>
  }

  export type EventFormUpsertWithoutSubmissionsInput = {
    update: XOR<EventFormUpdateWithoutSubmissionsInput, EventFormUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<EventFormCreateWithoutSubmissionsInput, EventFormUncheckedCreateWithoutSubmissionsInput>
    where?: EventFormWhereInput
  }

  export type EventFormUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: EventFormWhereInput
    data: XOR<EventFormUpdateWithoutSubmissionsInput, EventFormUncheckedUpdateWithoutSubmissionsInput>
  }

  export type EventFormUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEventFormNestedInput
  }

  export type EventFormUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutFormSubmissionsInput = {
    update: XOR<UserUpdateWithoutFormSubmissionsInput, UserUncheckedUpdateWithoutFormSubmissionsInput>
    create: XOR<UserCreateWithoutFormSubmissionsInput, UserUncheckedCreateWithoutFormSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFormSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFormSubmissionsInput, UserUncheckedUpdateWithoutFormSubmissionsInput>
  }

  export type UserUpdateWithoutFormSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    college?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUpdateManyWithoutUserNestedInput
    approvedUsers?: UserUpdateManyWithoutApproverNestedInput
    approver?: UserUpdateOneWithoutApprovedUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutFormSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    college?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUncheckedUpdateManyWithoutUserNestedInput
    approvedUsers?: UserUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type EventUpsertWithoutFormSubmissionsInput = {
    update: XOR<EventUpdateWithoutFormSubmissionsInput, EventUncheckedUpdateWithoutFormSubmissionsInput>
    create: XOR<EventCreateWithoutFormSubmissionsInput, EventUncheckedCreateWithoutFormSubmissionsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutFormSubmissionsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutFormSubmissionsInput, EventUncheckedUpdateWithoutFormSubmissionsInput>
  }

  export type EventUpdateWithoutFormSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: EventUpdatetagsInput | string[]
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    registrations?: EventRegistrationUpdateManyWithoutEventNestedInput
    eventForm?: EventFormUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutFormSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: EventUpdatetagsInput | string[]
    organizerId?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: EventRegistrationUncheckedUpdateManyWithoutEventNestedInput
    eventForm?: EventFormUncheckedUpdateOneWithoutEventNestedInput
  }

  export type EventCreateManyOrganizerInput = {
    id?: string
    name: string
    description: string
    date: string
    time: string
    venue: string
    city: string
    state: string
    address?: string | null
    posterUrl?: string | null
    type?: $Enums.EventType
    isPaid?: boolean
    price?: number
    maxAttendees: number
    status?: $Enums.EventStatus
    featured?: boolean
    tags?: EventCreatetagsInput | string[]
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventRegistrationCreateManyUserInput = {
    id?: string
    eventId: string
    status?: $Enums.RegistrationStatus
    qrCode: string
    attendedAt?: Date | string | null
    notes?: string | null
    registeredAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormSubmissionCreateManyUserInput = {
    id?: string
    formId: string
    eventId: string
    data: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
  }

  export type UserCreateManyApproverInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    avatar?: string | null
    password?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    college?: string | null
    department?: string | null
    year?: string | null
    approvedAt?: Date | string | null
    rejectionReason?: string | null
    suspensionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: EventUpdatetagsInput | string[]
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: EventRegistrationUpdateManyWithoutEventNestedInput
    eventForm?: EventFormUpdateOneWithoutEventNestedInput
    formSubmissions?: FormSubmissionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: EventUpdatetagsInput | string[]
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: EventRegistrationUncheckedUpdateManyWithoutEventNestedInput
    eventForm?: EventFormUncheckedUpdateOneWithoutEventNestedInput
    formSubmissions?: FormSubmissionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    tags?: EventUpdatetagsInput | string[]
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRegistrationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type EventRegistrationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRegistrationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: EventFormUpdateOneRequiredWithoutSubmissionsNestedInput
    event?: EventUpdateOneRequiredWithoutFormSubmissionsNestedInput
  }

  export type FormSubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    college?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUpdateManyWithoutUserNestedInput
    formSubmissions?: FormSubmissionUpdateManyWithoutUserNestedInput
    approvedUsers?: UserUpdateManyWithoutApproverNestedInput
  }

  export type UserUncheckedUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    college?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    registrations?: EventRegistrationUncheckedUpdateManyWithoutUserNestedInput
    formSubmissions?: FormSubmissionUncheckedUpdateManyWithoutUserNestedInput
    approvedUsers?: UserUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type UserUncheckedUpdateManyWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    college?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    suspensionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRegistrationCreateManyEventInput = {
    id?: string
    userId: string
    status?: $Enums.RegistrationStatus
    qrCode: string
    attendedAt?: Date | string | null
    notes?: string | null
    registeredAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormSubmissionCreateManyEventInput = {
    id?: string
    formId: string
    userId: string
    data: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
  }

  export type EventRegistrationUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type EventRegistrationUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventRegistrationUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: EventFormUpdateOneRequiredWithoutSubmissionsNestedInput
    user?: UserUpdateOneRequiredWithoutFormSubmissionsNestedInput
  }

  export type FormSubmissionUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionCreateManyFormInput = {
    id?: string
    userId: string
    eventId: string
    data: JsonNullValueInput | InputJsonValue
    submittedAt?: Date | string
  }

  export type FormSubmissionUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFormSubmissionsNestedInput
    event?: EventUpdateOneRequiredWithoutFormSubmissionsNestedInput
  }

  export type FormSubmissionUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionUncheckedUpdateManyWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}