
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
 * Model FoodItem
 * 
 */
export type FoodItem = $Result.DefaultSelection<Prisma.$FoodItemPayload>
/**
 * Model FoodLog
 * 
 */
export type FoodLog = $Result.DefaultSelection<Prisma.$FoodLogPayload>
/**
 * Model MealSuggestion
 * 
 */
export type MealSuggestion = $Result.DefaultSelection<Prisma.$MealSuggestionPayload>
/**
 * Model ProgressRecord
 * 
 */
export type ProgressRecord = $Result.DefaultSelection<Prisma.$ProgressRecordPayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.foodItem`: Exposes CRUD operations for the **FoodItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodItems
    * const foodItems = await prisma.foodItem.findMany()
    * ```
    */
  get foodItem(): Prisma.FoodItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodLog`: Exposes CRUD operations for the **FoodLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodLogs
    * const foodLogs = await prisma.foodLog.findMany()
    * ```
    */
  get foodLog(): Prisma.FoodLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealSuggestion`: Exposes CRUD operations for the **MealSuggestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealSuggestions
    * const mealSuggestions = await prisma.mealSuggestion.findMany()
    * ```
    */
  get mealSuggestion(): Prisma.MealSuggestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progressRecord`: Exposes CRUD operations for the **ProgressRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressRecords
    * const progressRecords = await prisma.progressRecord.findMany()
    * ```
    */
  get progressRecord(): Prisma.ProgressRecordDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    FoodItem: 'FoodItem',
    FoodLog: 'FoodLog',
    MealSuggestion: 'MealSuggestion',
    ProgressRecord: 'ProgressRecord'
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
      modelProps: "user" | "foodItem" | "foodLog" | "mealSuggestion" | "progressRecord"
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
      FoodItem: {
        payload: Prisma.$FoodItemPayload<ExtArgs>
        fields: Prisma.FoodItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          findFirst: {
            args: Prisma.FoodItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          findMany: {
            args: Prisma.FoodItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          create: {
            args: Prisma.FoodItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          createMany: {
            args: Prisma.FoodItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          delete: {
            args: Prisma.FoodItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          update: {
            args: Prisma.FoodItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          deleteMany: {
            args: Prisma.FoodItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          upsert: {
            args: Prisma.FoodItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          aggregate: {
            args: Prisma.FoodItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodItem>
          }
          groupBy: {
            args: Prisma.FoodItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodItemCountArgs<ExtArgs>
            result: $Utils.Optional<FoodItemCountAggregateOutputType> | number
          }
        }
      }
      FoodLog: {
        payload: Prisma.$FoodLogPayload<ExtArgs>
        fields: Prisma.FoodLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>
          }
          findFirst: {
            args: Prisma.FoodLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>
          }
          findMany: {
            args: Prisma.FoodLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>[]
          }
          create: {
            args: Prisma.FoodLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>
          }
          createMany: {
            args: Prisma.FoodLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>[]
          }
          delete: {
            args: Prisma.FoodLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>
          }
          update: {
            args: Prisma.FoodLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>
          }
          deleteMany: {
            args: Prisma.FoodLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>[]
          }
          upsert: {
            args: Prisma.FoodLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodLogPayload>
          }
          aggregate: {
            args: Prisma.FoodLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodLog>
          }
          groupBy: {
            args: Prisma.FoodLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodLogCountArgs<ExtArgs>
            result: $Utils.Optional<FoodLogCountAggregateOutputType> | number
          }
        }
      }
      MealSuggestion: {
        payload: Prisma.$MealSuggestionPayload<ExtArgs>
        fields: Prisma.MealSuggestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealSuggestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSuggestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealSuggestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSuggestionPayload>
          }
          findFirst: {
            args: Prisma.MealSuggestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSuggestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealSuggestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSuggestionPayload>
          }
          findMany: {
            args: Prisma.MealSuggestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSuggestionPayload>[]
          }
          create: {
            args: Prisma.MealSuggestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSuggestionPayload>
          }
          createMany: {
            args: Prisma.MealSuggestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealSuggestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSuggestionPayload>[]
          }
          delete: {
            args: Prisma.MealSuggestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSuggestionPayload>
          }
          update: {
            args: Prisma.MealSuggestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSuggestionPayload>
          }
          deleteMany: {
            args: Prisma.MealSuggestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealSuggestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealSuggestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSuggestionPayload>[]
          }
          upsert: {
            args: Prisma.MealSuggestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSuggestionPayload>
          }
          aggregate: {
            args: Prisma.MealSuggestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealSuggestion>
          }
          groupBy: {
            args: Prisma.MealSuggestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealSuggestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealSuggestionCountArgs<ExtArgs>
            result: $Utils.Optional<MealSuggestionCountAggregateOutputType> | number
          }
        }
      }
      ProgressRecord: {
        payload: Prisma.$ProgressRecordPayload<ExtArgs>
        fields: Prisma.ProgressRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressRecordPayload>
          }
          findFirst: {
            args: Prisma.ProgressRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressRecordPayload>
          }
          findMany: {
            args: Prisma.ProgressRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressRecordPayload>[]
          }
          create: {
            args: Prisma.ProgressRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressRecordPayload>
          }
          createMany: {
            args: Prisma.ProgressRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressRecordPayload>[]
          }
          delete: {
            args: Prisma.ProgressRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressRecordPayload>
          }
          update: {
            args: Prisma.ProgressRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressRecordPayload>
          }
          deleteMany: {
            args: Prisma.ProgressRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgressRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressRecordPayload>[]
          }
          upsert: {
            args: Prisma.ProgressRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressRecordPayload>
          }
          aggregate: {
            args: Prisma.ProgressRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgressRecord>
          }
          groupBy: {
            args: Prisma.ProgressRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressRecordCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    foodItem?: FoodItemOmit
    foodLog?: FoodLogOmit
    mealSuggestion?: MealSuggestionOmit
    progressRecord?: ProgressRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    foodLogs: number
    mealSuggestions: number
    progressRecords: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodLogs?: boolean | UserCountOutputTypeCountFoodLogsArgs
    mealSuggestions?: boolean | UserCountOutputTypeCountMealSuggestionsArgs
    progressRecords?: boolean | UserCountOutputTypeCountProgressRecordsArgs
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
  export type UserCountOutputTypeCountFoodLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMealSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealSuggestionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressRecordWhereInput
  }


  /**
   * Count Type FoodItemCountOutputType
   */

  export type FoodItemCountOutputType = {
    foodLogs: number
  }

  export type FoodItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodLogs?: boolean | FoodItemCountOutputTypeCountFoodLogsArgs
  }

  // Custom InputTypes
  /**
   * FoodItemCountOutputType without action
   */
  export type FoodItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItemCountOutputType
     */
    select?: FoodItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodItemCountOutputType without action
   */
  export type FoodItemCountOutputTypeCountFoodLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    age: number | null
    weight: number | null
    height: number | null
  }

  export type UserSumAggregateOutputType = {
    age: number | null
    weight: number | null
    height: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    name: string | null
    email: string | null
    imageUrl: string | null
    age: number | null
    weight: number | null
    height: number | null
    gender: string | null
    activityLevel: string | null
    dietaryPreference: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    name: string | null
    email: string | null
    imageUrl: string | null
    age: number | null
    weight: number | null
    height: number | null
    gender: string | null
    activityLevel: string | null
    dietaryPreference: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkUserId: number
    name: number
    email: number
    imageUrl: number
    age: number
    weight: number
    height: number
    gender: number
    activityLevel: number
    dietaryPreference: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    age?: true
    weight?: true
    height?: true
  }

  export type UserSumAggregateInputType = {
    age?: true
    weight?: true
    height?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    name?: true
    email?: true
    imageUrl?: true
    age?: true
    weight?: true
    height?: true
    gender?: true
    activityLevel?: true
    dietaryPreference?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    name?: true
    email?: true
    imageUrl?: true
    age?: true
    weight?: true
    height?: true
    gender?: true
    activityLevel?: true
    dietaryPreference?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    name?: true
    email?: true
    imageUrl?: true
    age?: true
    weight?: true
    height?: true
    gender?: true
    activityLevel?: true
    dietaryPreference?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkUserId: string
    name: string
    email: string
    imageUrl: string
    age: number | null
    weight: number | null
    height: number | null
    gender: string | null
    activityLevel: string | null
    dietaryPreference: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    clerkUserId?: boolean
    name?: boolean
    email?: boolean
    imageUrl?: boolean
    age?: boolean
    weight?: boolean
    height?: boolean
    gender?: boolean
    activityLevel?: boolean
    dietaryPreference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    foodLogs?: boolean | User$foodLogsArgs<ExtArgs>
    mealSuggestions?: boolean | User$mealSuggestionsArgs<ExtArgs>
    progressRecords?: boolean | User$progressRecordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    name?: boolean
    email?: boolean
    imageUrl?: boolean
    age?: boolean
    weight?: boolean
    height?: boolean
    gender?: boolean
    activityLevel?: boolean
    dietaryPreference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    name?: boolean
    email?: boolean
    imageUrl?: boolean
    age?: boolean
    weight?: boolean
    height?: boolean
    gender?: boolean
    activityLevel?: boolean
    dietaryPreference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    name?: boolean
    email?: boolean
    imageUrl?: boolean
    age?: boolean
    weight?: boolean
    height?: boolean
    gender?: boolean
    activityLevel?: boolean
    dietaryPreference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "name" | "email" | "imageUrl" | "age" | "weight" | "height" | "gender" | "activityLevel" | "dietaryPreference" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodLogs?: boolean | User$foodLogsArgs<ExtArgs>
    mealSuggestions?: boolean | User$mealSuggestionsArgs<ExtArgs>
    progressRecords?: boolean | User$progressRecordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      foodLogs: Prisma.$FoodLogPayload<ExtArgs>[]
      mealSuggestions: Prisma.$MealSuggestionPayload<ExtArgs>[]
      progressRecords: Prisma.$ProgressRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      name: string
      email: string
      imageUrl: string
      age: number | null
      weight: number | null
      height: number | null
      gender: string | null
      activityLevel: string | null
      dietaryPreference: string | null
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
    foodLogs<T extends User$foodLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$foodLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mealSuggestions<T extends User$mealSuggestionsArgs<ExtArgs> = {}>(args?: Subset<T, User$mealSuggestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealSuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progressRecords<T extends User$progressRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$progressRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly clerkUserId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly weight: FieldRef<"User", 'Float'>
    readonly height: FieldRef<"User", 'Float'>
    readonly gender: FieldRef<"User", 'String'>
    readonly activityLevel: FieldRef<"User", 'String'>
    readonly dietaryPreference: FieldRef<"User", 'String'>
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
   * User.foodLogs
   */
  export type User$foodLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    where?: FoodLogWhereInput
    orderBy?: FoodLogOrderByWithRelationInput | FoodLogOrderByWithRelationInput[]
    cursor?: FoodLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodLogScalarFieldEnum | FoodLogScalarFieldEnum[]
  }

  /**
   * User.mealSuggestions
   */
  export type User$mealSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSuggestion
     */
    select?: MealSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSuggestion
     */
    omit?: MealSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealSuggestionInclude<ExtArgs> | null
    where?: MealSuggestionWhereInput
    orderBy?: MealSuggestionOrderByWithRelationInput | MealSuggestionOrderByWithRelationInput[]
    cursor?: MealSuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealSuggestionScalarFieldEnum | MealSuggestionScalarFieldEnum[]
  }

  /**
   * User.progressRecords
   */
  export type User$progressRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRecord
     */
    select?: ProgressRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressRecord
     */
    omit?: ProgressRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressRecordInclude<ExtArgs> | null
    where?: ProgressRecordWhereInput
    orderBy?: ProgressRecordOrderByWithRelationInput | ProgressRecordOrderByWithRelationInput[]
    cursor?: ProgressRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressRecordScalarFieldEnum | ProgressRecordScalarFieldEnum[]
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
   * Model FoodItem
   */

  export type AggregateFoodItem = {
    _count: FoodItemCountAggregateOutputType | null
    _avg: FoodItemAvgAggregateOutputType | null
    _sum: FoodItemSumAggregateOutputType | null
    _min: FoodItemMinAggregateOutputType | null
    _max: FoodItemMaxAggregateOutputType | null
  }

  export type FoodItemAvgAggregateOutputType = {
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type FoodItemSumAggregateOutputType = {
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type FoodItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    category: string | null
    isCustom: boolean | null
  }

  export type FoodItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    category: string | null
    isCustom: boolean | null
  }

  export type FoodItemCountAggregateOutputType = {
    id: number
    name: number
    calories: number
    protein: number
    carbs: number
    fat: number
    category: number
    isCustom: number
    _all: number
  }


  export type FoodItemAvgAggregateInputType = {
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type FoodItemSumAggregateInputType = {
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type FoodItemMinAggregateInputType = {
    id?: true
    name?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    category?: true
    isCustom?: true
  }

  export type FoodItemMaxAggregateInputType = {
    id?: true
    name?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    category?: true
    isCustom?: true
  }

  export type FoodItemCountAggregateInputType = {
    id?: true
    name?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    category?: true
    isCustom?: true
    _all?: true
  }

  export type FoodItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodItem to aggregate.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodItems
    **/
    _count?: true | FoodItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodItemMaxAggregateInputType
  }

  export type GetFoodItemAggregateType<T extends FoodItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodItem[P]>
      : GetScalarType<T[P], AggregateFoodItem[P]>
  }




  export type FoodItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodItemWhereInput
    orderBy?: FoodItemOrderByWithAggregationInput | FoodItemOrderByWithAggregationInput[]
    by: FoodItemScalarFieldEnum[] | FoodItemScalarFieldEnum
    having?: FoodItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodItemCountAggregateInputType | true
    _avg?: FoodItemAvgAggregateInputType
    _sum?: FoodItemSumAggregateInputType
    _min?: FoodItemMinAggregateInputType
    _max?: FoodItemMaxAggregateInputType
  }

  export type FoodItemGroupByOutputType = {
    id: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    category: string | null
    isCustom: boolean
    _count: FoodItemCountAggregateOutputType | null
    _avg: FoodItemAvgAggregateOutputType | null
    _sum: FoodItemSumAggregateOutputType | null
    _min: FoodItemMinAggregateOutputType | null
    _max: FoodItemMaxAggregateOutputType | null
  }

  type GetFoodItemGroupByPayload<T extends FoodItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodItemGroupByOutputType[P]>
            : GetScalarType<T[P], FoodItemGroupByOutputType[P]>
        }
      >
    >


  export type FoodItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    category?: boolean
    isCustom?: boolean
    foodLogs?: boolean | FoodItem$foodLogsArgs<ExtArgs>
    _count?: boolean | FoodItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    category?: boolean
    isCustom?: boolean
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    category?: boolean
    isCustom?: boolean
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectScalar = {
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    category?: boolean
    isCustom?: boolean
  }

  export type FoodItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "calories" | "protein" | "carbs" | "fat" | "category" | "isCustom", ExtArgs["result"]["foodItem"]>
  export type FoodItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodLogs?: boolean | FoodItem$foodLogsArgs<ExtArgs>
    _count?: boolean | FoodItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FoodItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FoodItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodItem"
    objects: {
      foodLogs: Prisma.$FoodLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      calories: number
      protein: number
      carbs: number
      fat: number
      category: string | null
      isCustom: boolean
    }, ExtArgs["result"]["foodItem"]>
    composites: {}
  }

  type FoodItemGetPayload<S extends boolean | null | undefined | FoodItemDefaultArgs> = $Result.GetResult<Prisma.$FoodItemPayload, S>

  type FoodItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodItemCountAggregateInputType | true
    }

  export interface FoodItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodItem'], meta: { name: 'FoodItem' } }
    /**
     * Find zero or one FoodItem that matches the filter.
     * @param {FoodItemFindUniqueArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodItemFindUniqueArgs>(args: SelectSubset<T, FoodItemFindUniqueArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodItemFindUniqueOrThrowArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindFirstArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodItemFindFirstArgs>(args?: SelectSubset<T, FoodItemFindFirstArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindFirstOrThrowArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodItems
     * const foodItems = await prisma.foodItem.findMany()
     * 
     * // Get first 10 FoodItems
     * const foodItems = await prisma.foodItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodItemFindManyArgs>(args?: SelectSubset<T, FoodItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodItem.
     * @param {FoodItemCreateArgs} args - Arguments to create a FoodItem.
     * @example
     * // Create one FoodItem
     * const FoodItem = await prisma.foodItem.create({
     *   data: {
     *     // ... data to create a FoodItem
     *   }
     * })
     * 
     */
    create<T extends FoodItemCreateArgs>(args: SelectSubset<T, FoodItemCreateArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodItems.
     * @param {FoodItemCreateManyArgs} args - Arguments to create many FoodItems.
     * @example
     * // Create many FoodItems
     * const foodItem = await prisma.foodItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodItemCreateManyArgs>(args?: SelectSubset<T, FoodItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodItems and returns the data saved in the database.
     * @param {FoodItemCreateManyAndReturnArgs} args - Arguments to create many FoodItems.
     * @example
     * // Create many FoodItems
     * const foodItem = await prisma.foodItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodItems and only return the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodItemCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoodItem.
     * @param {FoodItemDeleteArgs} args - Arguments to delete one FoodItem.
     * @example
     * // Delete one FoodItem
     * const FoodItem = await prisma.foodItem.delete({
     *   where: {
     *     // ... filter to delete one FoodItem
     *   }
     * })
     * 
     */
    delete<T extends FoodItemDeleteArgs>(args: SelectSubset<T, FoodItemDeleteArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodItem.
     * @param {FoodItemUpdateArgs} args - Arguments to update one FoodItem.
     * @example
     * // Update one FoodItem
     * const foodItem = await prisma.foodItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodItemUpdateArgs>(args: SelectSubset<T, FoodItemUpdateArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodItems.
     * @param {FoodItemDeleteManyArgs} args - Arguments to filter FoodItems to delete.
     * @example
     * // Delete a few FoodItems
     * const { count } = await prisma.foodItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodItemDeleteManyArgs>(args?: SelectSubset<T, FoodItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodItems
     * const foodItem = await prisma.foodItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodItemUpdateManyArgs>(args: SelectSubset<T, FoodItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodItems and returns the data updated in the database.
     * @param {FoodItemUpdateManyAndReturnArgs} args - Arguments to update many FoodItems.
     * @example
     * // Update many FoodItems
     * const foodItem = await prisma.foodItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoodItems and only return the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends FoodItemUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoodItem.
     * @param {FoodItemUpsertArgs} args - Arguments to update or create a FoodItem.
     * @example
     * // Update or create a FoodItem
     * const foodItem = await prisma.foodItem.upsert({
     *   create: {
     *     // ... data to create a FoodItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodItem we want to update
     *   }
     * })
     */
    upsert<T extends FoodItemUpsertArgs>(args: SelectSubset<T, FoodItemUpsertArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemCountArgs} args - Arguments to filter FoodItems to count.
     * @example
     * // Count the number of FoodItems
     * const count = await prisma.foodItem.count({
     *   where: {
     *     // ... the filter for the FoodItems we want to count
     *   }
     * })
    **/
    count<T extends FoodItemCountArgs>(
      args?: Subset<T, FoodItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodItemAggregateArgs>(args: Subset<T, FoodItemAggregateArgs>): Prisma.PrismaPromise<GetFoodItemAggregateType<T>>

    /**
     * Group by FoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemGroupByArgs} args - Group by arguments.
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
      T extends FoodItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodItemGroupByArgs['orderBy'] }
        : { orderBy?: FoodItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodItem model
   */
  readonly fields: FoodItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foodLogs<T extends FoodItem$foodLogsArgs<ExtArgs> = {}>(args?: Subset<T, FoodItem$foodLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FoodItem model
   */
  interface FoodItemFieldRefs {
    readonly id: FieldRef<"FoodItem", 'String'>
    readonly name: FieldRef<"FoodItem", 'String'>
    readonly calories: FieldRef<"FoodItem", 'Int'>
    readonly protein: FieldRef<"FoodItem", 'Float'>
    readonly carbs: FieldRef<"FoodItem", 'Float'>
    readonly fat: FieldRef<"FoodItem", 'Float'>
    readonly category: FieldRef<"FoodItem", 'String'>
    readonly isCustom: FieldRef<"FoodItem", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * FoodItem findUnique
   */
  export type FoodItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem findUniqueOrThrow
   */
  export type FoodItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem findFirst
   */
  export type FoodItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodItems.
     */
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem findFirstOrThrow
   */
  export type FoodItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodItems.
     */
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem findMany
   */
  export type FoodItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItems to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem create
   */
  export type FoodItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodItem.
     */
    data: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>
  }

  /**
   * FoodItem createMany
   */
  export type FoodItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodItems.
     */
    data: FoodItemCreateManyInput | FoodItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodItem createManyAndReturn
   */
  export type FoodItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * The data used to create many FoodItems.
     */
    data: FoodItemCreateManyInput | FoodItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodItem update
   */
  export type FoodItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodItem.
     */
    data: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>
    /**
     * Choose, which FoodItem to update.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem updateMany
   */
  export type FoodItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodItems.
     */
    data: XOR<FoodItemUpdateManyMutationInput, FoodItemUncheckedUpdateManyInput>
    /**
     * Filter which FoodItems to update
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to update.
     */
    limit?: number
  }

  /**
   * FoodItem updateManyAndReturn
   */
  export type FoodItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * The data used to update FoodItems.
     */
    data: XOR<FoodItemUpdateManyMutationInput, FoodItemUncheckedUpdateManyInput>
    /**
     * Filter which FoodItems to update
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to update.
     */
    limit?: number
  }

  /**
   * FoodItem upsert
   */
  export type FoodItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodItem to update in case it exists.
     */
    where: FoodItemWhereUniqueInput
    /**
     * In case the FoodItem found by the `where` argument doesn't exist, create a new FoodItem with this data.
     */
    create: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>
    /**
     * In case the FoodItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>
  }

  /**
   * FoodItem delete
   */
  export type FoodItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter which FoodItem to delete.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem deleteMany
   */
  export type FoodItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodItems to delete
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to delete.
     */
    limit?: number
  }

  /**
   * FoodItem.foodLogs
   */
  export type FoodItem$foodLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    where?: FoodLogWhereInput
    orderBy?: FoodLogOrderByWithRelationInput | FoodLogOrderByWithRelationInput[]
    cursor?: FoodLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodLogScalarFieldEnum | FoodLogScalarFieldEnum[]
  }

  /**
   * FoodItem without action
   */
  export type FoodItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
  }


  /**
   * Model FoodLog
   */

  export type AggregateFoodLog = {
    _count: FoodLogCountAggregateOutputType | null
    _avg: FoodLogAvgAggregateOutputType | null
    _sum: FoodLogSumAggregateOutputType | null
    _min: FoodLogMinAggregateOutputType | null
    _max: FoodLogMaxAggregateOutputType | null
  }

  export type FoodLogAvgAggregateOutputType = {
    quantity: number | null
  }

  export type FoodLogSumAggregateOutputType = {
    quantity: number | null
  }

  export type FoodLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    foodItemId: string | null
    quantity: number | null
    mealType: string | null
    timestamp: Date | null
  }

  export type FoodLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    foodItemId: string | null
    quantity: number | null
    mealType: string | null
    timestamp: Date | null
  }

  export type FoodLogCountAggregateOutputType = {
    id: number
    userId: number
    foodItemId: number
    quantity: number
    mealType: number
    timestamp: number
    _all: number
  }


  export type FoodLogAvgAggregateInputType = {
    quantity?: true
  }

  export type FoodLogSumAggregateInputType = {
    quantity?: true
  }

  export type FoodLogMinAggregateInputType = {
    id?: true
    userId?: true
    foodItemId?: true
    quantity?: true
    mealType?: true
    timestamp?: true
  }

  export type FoodLogMaxAggregateInputType = {
    id?: true
    userId?: true
    foodItemId?: true
    quantity?: true
    mealType?: true
    timestamp?: true
  }

  export type FoodLogCountAggregateInputType = {
    id?: true
    userId?: true
    foodItemId?: true
    quantity?: true
    mealType?: true
    timestamp?: true
    _all?: true
  }

  export type FoodLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodLog to aggregate.
     */
    where?: FoodLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodLogs to fetch.
     */
    orderBy?: FoodLogOrderByWithRelationInput | FoodLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodLogs
    **/
    _count?: true | FoodLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodLogMaxAggregateInputType
  }

  export type GetFoodLogAggregateType<T extends FoodLogAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodLog[P]>
      : GetScalarType<T[P], AggregateFoodLog[P]>
  }




  export type FoodLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodLogWhereInput
    orderBy?: FoodLogOrderByWithAggregationInput | FoodLogOrderByWithAggregationInput[]
    by: FoodLogScalarFieldEnum[] | FoodLogScalarFieldEnum
    having?: FoodLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodLogCountAggregateInputType | true
    _avg?: FoodLogAvgAggregateInputType
    _sum?: FoodLogSumAggregateInputType
    _min?: FoodLogMinAggregateInputType
    _max?: FoodLogMaxAggregateInputType
  }

  export type FoodLogGroupByOutputType = {
    id: string
    userId: string
    foodItemId: string
    quantity: number
    mealType: string
    timestamp: Date
    _count: FoodLogCountAggregateOutputType | null
    _avg: FoodLogAvgAggregateOutputType | null
    _sum: FoodLogSumAggregateOutputType | null
    _min: FoodLogMinAggregateOutputType | null
    _max: FoodLogMaxAggregateOutputType | null
  }

  type GetFoodLogGroupByPayload<T extends FoodLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodLogGroupByOutputType[P]>
            : GetScalarType<T[P], FoodLogGroupByOutputType[P]>
        }
      >
    >


  export type FoodLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodItemId?: boolean
    quantity?: boolean
    mealType?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodLog"]>

  export type FoodLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodItemId?: boolean
    quantity?: boolean
    mealType?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodLog"]>

  export type FoodLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodItemId?: boolean
    quantity?: boolean
    mealType?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodLog"]>

  export type FoodLogSelectScalar = {
    id?: boolean
    userId?: boolean
    foodItemId?: boolean
    quantity?: boolean
    mealType?: boolean
    timestamp?: boolean
  }

  export type FoodLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "foodItemId" | "quantity" | "mealType" | "timestamp", ExtArgs["result"]["foodLog"]>
  export type FoodLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }
  export type FoodLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }
  export type FoodLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }

  export type $FoodLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      foodItem: Prisma.$FoodItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      foodItemId: string
      quantity: number
      mealType: string
      timestamp: Date
    }, ExtArgs["result"]["foodLog"]>
    composites: {}
  }

  type FoodLogGetPayload<S extends boolean | null | undefined | FoodLogDefaultArgs> = $Result.GetResult<Prisma.$FoodLogPayload, S>

  type FoodLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodLogCountAggregateInputType | true
    }

  export interface FoodLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodLog'], meta: { name: 'FoodLog' } }
    /**
     * Find zero or one FoodLog that matches the filter.
     * @param {FoodLogFindUniqueArgs} args - Arguments to find a FoodLog
     * @example
     * // Get one FoodLog
     * const foodLog = await prisma.foodLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodLogFindUniqueArgs>(args: SelectSubset<T, FoodLogFindUniqueArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodLogFindUniqueOrThrowArgs} args - Arguments to find a FoodLog
     * @example
     * // Get one FoodLog
     * const foodLog = await prisma.foodLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodLogFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodLogFindFirstArgs} args - Arguments to find a FoodLog
     * @example
     * // Get one FoodLog
     * const foodLog = await prisma.foodLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodLogFindFirstArgs>(args?: SelectSubset<T, FoodLogFindFirstArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodLogFindFirstOrThrowArgs} args - Arguments to find a FoodLog
     * @example
     * // Get one FoodLog
     * const foodLog = await prisma.foodLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodLogFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodLogs
     * const foodLogs = await prisma.foodLog.findMany()
     * 
     * // Get first 10 FoodLogs
     * const foodLogs = await prisma.foodLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodLogWithIdOnly = await prisma.foodLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodLogFindManyArgs>(args?: SelectSubset<T, FoodLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodLog.
     * @param {FoodLogCreateArgs} args - Arguments to create a FoodLog.
     * @example
     * // Create one FoodLog
     * const FoodLog = await prisma.foodLog.create({
     *   data: {
     *     // ... data to create a FoodLog
     *   }
     * })
     * 
     */
    create<T extends FoodLogCreateArgs>(args: SelectSubset<T, FoodLogCreateArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodLogs.
     * @param {FoodLogCreateManyArgs} args - Arguments to create many FoodLogs.
     * @example
     * // Create many FoodLogs
     * const foodLog = await prisma.foodLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodLogCreateManyArgs>(args?: SelectSubset<T, FoodLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodLogs and returns the data saved in the database.
     * @param {FoodLogCreateManyAndReturnArgs} args - Arguments to create many FoodLogs.
     * @example
     * // Create many FoodLogs
     * const foodLog = await prisma.foodLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodLogs and only return the `id`
     * const foodLogWithIdOnly = await prisma.foodLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodLogCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoodLog.
     * @param {FoodLogDeleteArgs} args - Arguments to delete one FoodLog.
     * @example
     * // Delete one FoodLog
     * const FoodLog = await prisma.foodLog.delete({
     *   where: {
     *     // ... filter to delete one FoodLog
     *   }
     * })
     * 
     */
    delete<T extends FoodLogDeleteArgs>(args: SelectSubset<T, FoodLogDeleteArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodLog.
     * @param {FoodLogUpdateArgs} args - Arguments to update one FoodLog.
     * @example
     * // Update one FoodLog
     * const foodLog = await prisma.foodLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodLogUpdateArgs>(args: SelectSubset<T, FoodLogUpdateArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodLogs.
     * @param {FoodLogDeleteManyArgs} args - Arguments to filter FoodLogs to delete.
     * @example
     * // Delete a few FoodLogs
     * const { count } = await prisma.foodLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodLogDeleteManyArgs>(args?: SelectSubset<T, FoodLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodLogs
     * const foodLog = await prisma.foodLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodLogUpdateManyArgs>(args: SelectSubset<T, FoodLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodLogs and returns the data updated in the database.
     * @param {FoodLogUpdateManyAndReturnArgs} args - Arguments to update many FoodLogs.
     * @example
     * // Update many FoodLogs
     * const foodLog = await prisma.foodLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoodLogs and only return the `id`
     * const foodLogWithIdOnly = await prisma.foodLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends FoodLogUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoodLog.
     * @param {FoodLogUpsertArgs} args - Arguments to update or create a FoodLog.
     * @example
     * // Update or create a FoodLog
     * const foodLog = await prisma.foodLog.upsert({
     *   create: {
     *     // ... data to create a FoodLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodLog we want to update
     *   }
     * })
     */
    upsert<T extends FoodLogUpsertArgs>(args: SelectSubset<T, FoodLogUpsertArgs<ExtArgs>>): Prisma__FoodLogClient<$Result.GetResult<Prisma.$FoodLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodLogCountArgs} args - Arguments to filter FoodLogs to count.
     * @example
     * // Count the number of FoodLogs
     * const count = await prisma.foodLog.count({
     *   where: {
     *     // ... the filter for the FoodLogs we want to count
     *   }
     * })
    **/
    count<T extends FoodLogCountArgs>(
      args?: Subset<T, FoodLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodLogAggregateArgs>(args: Subset<T, FoodLogAggregateArgs>): Prisma.PrismaPromise<GetFoodLogAggregateType<T>>

    /**
     * Group by FoodLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodLogGroupByArgs} args - Group by arguments.
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
      T extends FoodLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodLogGroupByArgs['orderBy'] }
        : { orderBy?: FoodLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodLog model
   */
  readonly fields: FoodLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    foodItem<T extends FoodItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodItemDefaultArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FoodLog model
   */
  interface FoodLogFieldRefs {
    readonly id: FieldRef<"FoodLog", 'String'>
    readonly userId: FieldRef<"FoodLog", 'String'>
    readonly foodItemId: FieldRef<"FoodLog", 'String'>
    readonly quantity: FieldRef<"FoodLog", 'Float'>
    readonly mealType: FieldRef<"FoodLog", 'String'>
    readonly timestamp: FieldRef<"FoodLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoodLog findUnique
   */
  export type FoodLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * Filter, which FoodLog to fetch.
     */
    where: FoodLogWhereUniqueInput
  }

  /**
   * FoodLog findUniqueOrThrow
   */
  export type FoodLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * Filter, which FoodLog to fetch.
     */
    where: FoodLogWhereUniqueInput
  }

  /**
   * FoodLog findFirst
   */
  export type FoodLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * Filter, which FoodLog to fetch.
     */
    where?: FoodLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodLogs to fetch.
     */
    orderBy?: FoodLogOrderByWithRelationInput | FoodLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodLogs.
     */
    cursor?: FoodLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodLogs.
     */
    distinct?: FoodLogScalarFieldEnum | FoodLogScalarFieldEnum[]
  }

  /**
   * FoodLog findFirstOrThrow
   */
  export type FoodLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * Filter, which FoodLog to fetch.
     */
    where?: FoodLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodLogs to fetch.
     */
    orderBy?: FoodLogOrderByWithRelationInput | FoodLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodLogs.
     */
    cursor?: FoodLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodLogs.
     */
    distinct?: FoodLogScalarFieldEnum | FoodLogScalarFieldEnum[]
  }

  /**
   * FoodLog findMany
   */
  export type FoodLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * Filter, which FoodLogs to fetch.
     */
    where?: FoodLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodLogs to fetch.
     */
    orderBy?: FoodLogOrderByWithRelationInput | FoodLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodLogs.
     */
    cursor?: FoodLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodLogs.
     */
    skip?: number
    distinct?: FoodLogScalarFieldEnum | FoodLogScalarFieldEnum[]
  }

  /**
   * FoodLog create
   */
  export type FoodLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodLog.
     */
    data: XOR<FoodLogCreateInput, FoodLogUncheckedCreateInput>
  }

  /**
   * FoodLog createMany
   */
  export type FoodLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodLogs.
     */
    data: FoodLogCreateManyInput | FoodLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodLog createManyAndReturn
   */
  export type FoodLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * The data used to create many FoodLogs.
     */
    data: FoodLogCreateManyInput | FoodLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoodLog update
   */
  export type FoodLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodLog.
     */
    data: XOR<FoodLogUpdateInput, FoodLogUncheckedUpdateInput>
    /**
     * Choose, which FoodLog to update.
     */
    where: FoodLogWhereUniqueInput
  }

  /**
   * FoodLog updateMany
   */
  export type FoodLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodLogs.
     */
    data: XOR<FoodLogUpdateManyMutationInput, FoodLogUncheckedUpdateManyInput>
    /**
     * Filter which FoodLogs to update
     */
    where?: FoodLogWhereInput
    /**
     * Limit how many FoodLogs to update.
     */
    limit?: number
  }

  /**
   * FoodLog updateManyAndReturn
   */
  export type FoodLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * The data used to update FoodLogs.
     */
    data: XOR<FoodLogUpdateManyMutationInput, FoodLogUncheckedUpdateManyInput>
    /**
     * Filter which FoodLogs to update
     */
    where?: FoodLogWhereInput
    /**
     * Limit how many FoodLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoodLog upsert
   */
  export type FoodLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodLog to update in case it exists.
     */
    where: FoodLogWhereUniqueInput
    /**
     * In case the FoodLog found by the `where` argument doesn't exist, create a new FoodLog with this data.
     */
    create: XOR<FoodLogCreateInput, FoodLogUncheckedCreateInput>
    /**
     * In case the FoodLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodLogUpdateInput, FoodLogUncheckedUpdateInput>
  }

  /**
   * FoodLog delete
   */
  export type FoodLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
    /**
     * Filter which FoodLog to delete.
     */
    where: FoodLogWhereUniqueInput
  }

  /**
   * FoodLog deleteMany
   */
  export type FoodLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodLogs to delete
     */
    where?: FoodLogWhereInput
    /**
     * Limit how many FoodLogs to delete.
     */
    limit?: number
  }

  /**
   * FoodLog without action
   */
  export type FoodLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodLog
     */
    select?: FoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodLog
     */
    omit?: FoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodLogInclude<ExtArgs> | null
  }


  /**
   * Model MealSuggestion
   */

  export type AggregateMealSuggestion = {
    _count: MealSuggestionCountAggregateOutputType | null
    _avg: MealSuggestionAvgAggregateOutputType | null
    _sum: MealSuggestionSumAggregateOutputType | null
    _min: MealSuggestionMinAggregateOutputType | null
    _max: MealSuggestionMaxAggregateOutputType | null
  }

  export type MealSuggestionAvgAggregateOutputType = {
    calories: number | null
  }

  export type MealSuggestionSumAggregateOutputType = {
    calories: number | null
  }

  export type MealSuggestionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    suggestion: string | null
    calories: number | null
    createdAt: Date | null
    aiModelUsed: string | null
  }

  export type MealSuggestionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    suggestion: string | null
    calories: number | null
    createdAt: Date | null
    aiModelUsed: string | null
  }

  export type MealSuggestionCountAggregateOutputType = {
    id: number
    userId: number
    suggestion: number
    meals: number
    calories: number
    createdAt: number
    aiModelUsed: number
    _all: number
  }


  export type MealSuggestionAvgAggregateInputType = {
    calories?: true
  }

  export type MealSuggestionSumAggregateInputType = {
    calories?: true
  }

  export type MealSuggestionMinAggregateInputType = {
    id?: true
    userId?: true
    suggestion?: true
    calories?: true
    createdAt?: true
    aiModelUsed?: true
  }

  export type MealSuggestionMaxAggregateInputType = {
    id?: true
    userId?: true
    suggestion?: true
    calories?: true
    createdAt?: true
    aiModelUsed?: true
  }

  export type MealSuggestionCountAggregateInputType = {
    id?: true
    userId?: true
    suggestion?: true
    meals?: true
    calories?: true
    createdAt?: true
    aiModelUsed?: true
    _all?: true
  }

  export type MealSuggestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealSuggestion to aggregate.
     */
    where?: MealSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealSuggestions to fetch.
     */
    orderBy?: MealSuggestionOrderByWithRelationInput | MealSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealSuggestions
    **/
    _count?: true | MealSuggestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealSuggestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealSuggestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealSuggestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealSuggestionMaxAggregateInputType
  }

  export type GetMealSuggestionAggregateType<T extends MealSuggestionAggregateArgs> = {
        [P in keyof T & keyof AggregateMealSuggestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealSuggestion[P]>
      : GetScalarType<T[P], AggregateMealSuggestion[P]>
  }




  export type MealSuggestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealSuggestionWhereInput
    orderBy?: MealSuggestionOrderByWithAggregationInput | MealSuggestionOrderByWithAggregationInput[]
    by: MealSuggestionScalarFieldEnum[] | MealSuggestionScalarFieldEnum
    having?: MealSuggestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealSuggestionCountAggregateInputType | true
    _avg?: MealSuggestionAvgAggregateInputType
    _sum?: MealSuggestionSumAggregateInputType
    _min?: MealSuggestionMinAggregateInputType
    _max?: MealSuggestionMaxAggregateInputType
  }

  export type MealSuggestionGroupByOutputType = {
    id: string
    userId: string
    suggestion: string
    meals: JsonValue
    calories: number
    createdAt: Date
    aiModelUsed: string | null
    _count: MealSuggestionCountAggregateOutputType | null
    _avg: MealSuggestionAvgAggregateOutputType | null
    _sum: MealSuggestionSumAggregateOutputType | null
    _min: MealSuggestionMinAggregateOutputType | null
    _max: MealSuggestionMaxAggregateOutputType | null
  }

  type GetMealSuggestionGroupByPayload<T extends MealSuggestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealSuggestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealSuggestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealSuggestionGroupByOutputType[P]>
            : GetScalarType<T[P], MealSuggestionGroupByOutputType[P]>
        }
      >
    >


  export type MealSuggestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    suggestion?: boolean
    meals?: boolean
    calories?: boolean
    createdAt?: boolean
    aiModelUsed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealSuggestion"]>

  export type MealSuggestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    suggestion?: boolean
    meals?: boolean
    calories?: boolean
    createdAt?: boolean
    aiModelUsed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealSuggestion"]>

  export type MealSuggestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    suggestion?: boolean
    meals?: boolean
    calories?: boolean
    createdAt?: boolean
    aiModelUsed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealSuggestion"]>

  export type MealSuggestionSelectScalar = {
    id?: boolean
    userId?: boolean
    suggestion?: boolean
    meals?: boolean
    calories?: boolean
    createdAt?: boolean
    aiModelUsed?: boolean
  }

  export type MealSuggestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "suggestion" | "meals" | "calories" | "createdAt" | "aiModelUsed", ExtArgs["result"]["mealSuggestion"]>
  export type MealSuggestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MealSuggestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MealSuggestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MealSuggestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealSuggestion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      suggestion: string
      meals: Prisma.JsonValue
      calories: number
      createdAt: Date
      aiModelUsed: string | null
    }, ExtArgs["result"]["mealSuggestion"]>
    composites: {}
  }

  type MealSuggestionGetPayload<S extends boolean | null | undefined | MealSuggestionDefaultArgs> = $Result.GetResult<Prisma.$MealSuggestionPayload, S>

  type MealSuggestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealSuggestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealSuggestionCountAggregateInputType | true
    }

  export interface MealSuggestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealSuggestion'], meta: { name: 'MealSuggestion' } }
    /**
     * Find zero or one MealSuggestion that matches the filter.
     * @param {MealSuggestionFindUniqueArgs} args - Arguments to find a MealSuggestion
     * @example
     * // Get one MealSuggestion
     * const mealSuggestion = await prisma.mealSuggestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealSuggestionFindUniqueArgs>(args: SelectSubset<T, MealSuggestionFindUniqueArgs<ExtArgs>>): Prisma__MealSuggestionClient<$Result.GetResult<Prisma.$MealSuggestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealSuggestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealSuggestionFindUniqueOrThrowArgs} args - Arguments to find a MealSuggestion
     * @example
     * // Get one MealSuggestion
     * const mealSuggestion = await prisma.mealSuggestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealSuggestionFindUniqueOrThrowArgs>(args: SelectSubset<T, MealSuggestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealSuggestionClient<$Result.GetResult<Prisma.$MealSuggestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealSuggestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealSuggestionFindFirstArgs} args - Arguments to find a MealSuggestion
     * @example
     * // Get one MealSuggestion
     * const mealSuggestion = await prisma.mealSuggestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealSuggestionFindFirstArgs>(args?: SelectSubset<T, MealSuggestionFindFirstArgs<ExtArgs>>): Prisma__MealSuggestionClient<$Result.GetResult<Prisma.$MealSuggestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealSuggestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealSuggestionFindFirstOrThrowArgs} args - Arguments to find a MealSuggestion
     * @example
     * // Get one MealSuggestion
     * const mealSuggestion = await prisma.mealSuggestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealSuggestionFindFirstOrThrowArgs>(args?: SelectSubset<T, MealSuggestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealSuggestionClient<$Result.GetResult<Prisma.$MealSuggestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealSuggestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealSuggestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealSuggestions
     * const mealSuggestions = await prisma.mealSuggestion.findMany()
     * 
     * // Get first 10 MealSuggestions
     * const mealSuggestions = await prisma.mealSuggestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealSuggestionWithIdOnly = await prisma.mealSuggestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealSuggestionFindManyArgs>(args?: SelectSubset<T, MealSuggestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealSuggestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealSuggestion.
     * @param {MealSuggestionCreateArgs} args - Arguments to create a MealSuggestion.
     * @example
     * // Create one MealSuggestion
     * const MealSuggestion = await prisma.mealSuggestion.create({
     *   data: {
     *     // ... data to create a MealSuggestion
     *   }
     * })
     * 
     */
    create<T extends MealSuggestionCreateArgs>(args: SelectSubset<T, MealSuggestionCreateArgs<ExtArgs>>): Prisma__MealSuggestionClient<$Result.GetResult<Prisma.$MealSuggestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealSuggestions.
     * @param {MealSuggestionCreateManyArgs} args - Arguments to create many MealSuggestions.
     * @example
     * // Create many MealSuggestions
     * const mealSuggestion = await prisma.mealSuggestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealSuggestionCreateManyArgs>(args?: SelectSubset<T, MealSuggestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealSuggestions and returns the data saved in the database.
     * @param {MealSuggestionCreateManyAndReturnArgs} args - Arguments to create many MealSuggestions.
     * @example
     * // Create many MealSuggestions
     * const mealSuggestion = await prisma.mealSuggestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealSuggestions and only return the `id`
     * const mealSuggestionWithIdOnly = await prisma.mealSuggestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealSuggestionCreateManyAndReturnArgs>(args?: SelectSubset<T, MealSuggestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealSuggestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealSuggestion.
     * @param {MealSuggestionDeleteArgs} args - Arguments to delete one MealSuggestion.
     * @example
     * // Delete one MealSuggestion
     * const MealSuggestion = await prisma.mealSuggestion.delete({
     *   where: {
     *     // ... filter to delete one MealSuggestion
     *   }
     * })
     * 
     */
    delete<T extends MealSuggestionDeleteArgs>(args: SelectSubset<T, MealSuggestionDeleteArgs<ExtArgs>>): Prisma__MealSuggestionClient<$Result.GetResult<Prisma.$MealSuggestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealSuggestion.
     * @param {MealSuggestionUpdateArgs} args - Arguments to update one MealSuggestion.
     * @example
     * // Update one MealSuggestion
     * const mealSuggestion = await prisma.mealSuggestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealSuggestionUpdateArgs>(args: SelectSubset<T, MealSuggestionUpdateArgs<ExtArgs>>): Prisma__MealSuggestionClient<$Result.GetResult<Prisma.$MealSuggestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealSuggestions.
     * @param {MealSuggestionDeleteManyArgs} args - Arguments to filter MealSuggestions to delete.
     * @example
     * // Delete a few MealSuggestions
     * const { count } = await prisma.mealSuggestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealSuggestionDeleteManyArgs>(args?: SelectSubset<T, MealSuggestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealSuggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealSuggestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealSuggestions
     * const mealSuggestion = await prisma.mealSuggestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealSuggestionUpdateManyArgs>(args: SelectSubset<T, MealSuggestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealSuggestions and returns the data updated in the database.
     * @param {MealSuggestionUpdateManyAndReturnArgs} args - Arguments to update many MealSuggestions.
     * @example
     * // Update many MealSuggestions
     * const mealSuggestion = await prisma.mealSuggestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealSuggestions and only return the `id`
     * const mealSuggestionWithIdOnly = await prisma.mealSuggestion.updateManyAndReturn({
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
    updateManyAndReturn<T extends MealSuggestionUpdateManyAndReturnArgs>(args: SelectSubset<T, MealSuggestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealSuggestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealSuggestion.
     * @param {MealSuggestionUpsertArgs} args - Arguments to update or create a MealSuggestion.
     * @example
     * // Update or create a MealSuggestion
     * const mealSuggestion = await prisma.mealSuggestion.upsert({
     *   create: {
     *     // ... data to create a MealSuggestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealSuggestion we want to update
     *   }
     * })
     */
    upsert<T extends MealSuggestionUpsertArgs>(args: SelectSubset<T, MealSuggestionUpsertArgs<ExtArgs>>): Prisma__MealSuggestionClient<$Result.GetResult<Prisma.$MealSuggestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealSuggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealSuggestionCountArgs} args - Arguments to filter MealSuggestions to count.
     * @example
     * // Count the number of MealSuggestions
     * const count = await prisma.mealSuggestion.count({
     *   where: {
     *     // ... the filter for the MealSuggestions we want to count
     *   }
     * })
    **/
    count<T extends MealSuggestionCountArgs>(
      args?: Subset<T, MealSuggestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealSuggestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealSuggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealSuggestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealSuggestionAggregateArgs>(args: Subset<T, MealSuggestionAggregateArgs>): Prisma.PrismaPromise<GetMealSuggestionAggregateType<T>>

    /**
     * Group by MealSuggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealSuggestionGroupByArgs} args - Group by arguments.
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
      T extends MealSuggestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealSuggestionGroupByArgs['orderBy'] }
        : { orderBy?: MealSuggestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealSuggestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealSuggestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealSuggestion model
   */
  readonly fields: MealSuggestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealSuggestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealSuggestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MealSuggestion model
   */
  interface MealSuggestionFieldRefs {
    readonly id: FieldRef<"MealSuggestion", 'String'>
    readonly userId: FieldRef<"MealSuggestion", 'String'>
    readonly suggestion: FieldRef<"MealSuggestion", 'String'>
    readonly meals: FieldRef<"MealSuggestion", 'Json'>
    readonly calories: FieldRef<"MealSuggestion", 'Int'>
    readonly createdAt: FieldRef<"MealSuggestion", 'DateTime'>
    readonly aiModelUsed: FieldRef<"MealSuggestion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MealSuggestion findUnique
   */
  export type MealSuggestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSuggestion
     */
    select?: MealSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSuggestion
     */
    omit?: MealSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which MealSuggestion to fetch.
     */
    where: MealSuggestionWhereUniqueInput
  }

  /**
   * MealSuggestion findUniqueOrThrow
   */
  export type MealSuggestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSuggestion
     */
    select?: MealSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSuggestion
     */
    omit?: MealSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which MealSuggestion to fetch.
     */
    where: MealSuggestionWhereUniqueInput
  }

  /**
   * MealSuggestion findFirst
   */
  export type MealSuggestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSuggestion
     */
    select?: MealSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSuggestion
     */
    omit?: MealSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which MealSuggestion to fetch.
     */
    where?: MealSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealSuggestions to fetch.
     */
    orderBy?: MealSuggestionOrderByWithRelationInput | MealSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealSuggestions.
     */
    cursor?: MealSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealSuggestions.
     */
    distinct?: MealSuggestionScalarFieldEnum | MealSuggestionScalarFieldEnum[]
  }

  /**
   * MealSuggestion findFirstOrThrow
   */
  export type MealSuggestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSuggestion
     */
    select?: MealSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSuggestion
     */
    omit?: MealSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which MealSuggestion to fetch.
     */
    where?: MealSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealSuggestions to fetch.
     */
    orderBy?: MealSuggestionOrderByWithRelationInput | MealSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealSuggestions.
     */
    cursor?: MealSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealSuggestions.
     */
    distinct?: MealSuggestionScalarFieldEnum | MealSuggestionScalarFieldEnum[]
  }

  /**
   * MealSuggestion findMany
   */
  export type MealSuggestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSuggestion
     */
    select?: MealSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSuggestion
     */
    omit?: MealSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which MealSuggestions to fetch.
     */
    where?: MealSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealSuggestions to fetch.
     */
    orderBy?: MealSuggestionOrderByWithRelationInput | MealSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealSuggestions.
     */
    cursor?: MealSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealSuggestions.
     */
    skip?: number
    distinct?: MealSuggestionScalarFieldEnum | MealSuggestionScalarFieldEnum[]
  }

  /**
   * MealSuggestion create
   */
  export type MealSuggestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSuggestion
     */
    select?: MealSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSuggestion
     */
    omit?: MealSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealSuggestionInclude<ExtArgs> | null
    /**
     * The data needed to create a MealSuggestion.
     */
    data: XOR<MealSuggestionCreateInput, MealSuggestionUncheckedCreateInput>
  }

  /**
   * MealSuggestion createMany
   */
  export type MealSuggestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealSuggestions.
     */
    data: MealSuggestionCreateManyInput | MealSuggestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealSuggestion createManyAndReturn
   */
  export type MealSuggestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSuggestion
     */
    select?: MealSuggestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealSuggestion
     */
    omit?: MealSuggestionOmit<ExtArgs> | null
    /**
     * The data used to create many MealSuggestions.
     */
    data: MealSuggestionCreateManyInput | MealSuggestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealSuggestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealSuggestion update
   */
  export type MealSuggestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSuggestion
     */
    select?: MealSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSuggestion
     */
    omit?: MealSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealSuggestionInclude<ExtArgs> | null
    /**
     * The data needed to update a MealSuggestion.
     */
    data: XOR<MealSuggestionUpdateInput, MealSuggestionUncheckedUpdateInput>
    /**
     * Choose, which MealSuggestion to update.
     */
    where: MealSuggestionWhereUniqueInput
  }

  /**
   * MealSuggestion updateMany
   */
  export type MealSuggestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealSuggestions.
     */
    data: XOR<MealSuggestionUpdateManyMutationInput, MealSuggestionUncheckedUpdateManyInput>
    /**
     * Filter which MealSuggestions to update
     */
    where?: MealSuggestionWhereInput
    /**
     * Limit how many MealSuggestions to update.
     */
    limit?: number
  }

  /**
   * MealSuggestion updateManyAndReturn
   */
  export type MealSuggestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSuggestion
     */
    select?: MealSuggestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealSuggestion
     */
    omit?: MealSuggestionOmit<ExtArgs> | null
    /**
     * The data used to update MealSuggestions.
     */
    data: XOR<MealSuggestionUpdateManyMutationInput, MealSuggestionUncheckedUpdateManyInput>
    /**
     * Filter which MealSuggestions to update
     */
    where?: MealSuggestionWhereInput
    /**
     * Limit how many MealSuggestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealSuggestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealSuggestion upsert
   */
  export type MealSuggestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSuggestion
     */
    select?: MealSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSuggestion
     */
    omit?: MealSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealSuggestionInclude<ExtArgs> | null
    /**
     * The filter to search for the MealSuggestion to update in case it exists.
     */
    where: MealSuggestionWhereUniqueInput
    /**
     * In case the MealSuggestion found by the `where` argument doesn't exist, create a new MealSuggestion with this data.
     */
    create: XOR<MealSuggestionCreateInput, MealSuggestionUncheckedCreateInput>
    /**
     * In case the MealSuggestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealSuggestionUpdateInput, MealSuggestionUncheckedUpdateInput>
  }

  /**
   * MealSuggestion delete
   */
  export type MealSuggestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSuggestion
     */
    select?: MealSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSuggestion
     */
    omit?: MealSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealSuggestionInclude<ExtArgs> | null
    /**
     * Filter which MealSuggestion to delete.
     */
    where: MealSuggestionWhereUniqueInput
  }

  /**
   * MealSuggestion deleteMany
   */
  export type MealSuggestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealSuggestions to delete
     */
    where?: MealSuggestionWhereInput
    /**
     * Limit how many MealSuggestions to delete.
     */
    limit?: number
  }

  /**
   * MealSuggestion without action
   */
  export type MealSuggestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSuggestion
     */
    select?: MealSuggestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSuggestion
     */
    omit?: MealSuggestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealSuggestionInclude<ExtArgs> | null
  }


  /**
   * Model ProgressRecord
   */

  export type AggregateProgressRecord = {
    _count: ProgressRecordCountAggregateOutputType | null
    _avg: ProgressRecordAvgAggregateOutputType | null
    _sum: ProgressRecordSumAggregateOutputType | null
    _min: ProgressRecordMinAggregateOutputType | null
    _max: ProgressRecordMaxAggregateOutputType | null
  }

  export type ProgressRecordAvgAggregateOutputType = {
    weight: number | null
    bodyFatPct: number | null
  }

  export type ProgressRecordSumAggregateOutputType = {
    weight: number | null
    bodyFatPct: number | null
  }

  export type ProgressRecordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    weight: number | null
    bodyFatPct: number | null
    loggedAt: Date | null
  }

  export type ProgressRecordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    weight: number | null
    bodyFatPct: number | null
    loggedAt: Date | null
  }

  export type ProgressRecordCountAggregateOutputType = {
    id: number
    userId: number
    weight: number
    bodyFatPct: number
    loggedAt: number
    _all: number
  }


  export type ProgressRecordAvgAggregateInputType = {
    weight?: true
    bodyFatPct?: true
  }

  export type ProgressRecordSumAggregateInputType = {
    weight?: true
    bodyFatPct?: true
  }

  export type ProgressRecordMinAggregateInputType = {
    id?: true
    userId?: true
    weight?: true
    bodyFatPct?: true
    loggedAt?: true
  }

  export type ProgressRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    weight?: true
    bodyFatPct?: true
    loggedAt?: true
  }

  export type ProgressRecordCountAggregateInputType = {
    id?: true
    userId?: true
    weight?: true
    bodyFatPct?: true
    loggedAt?: true
    _all?: true
  }

  export type ProgressRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressRecord to aggregate.
     */
    where?: ProgressRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressRecords to fetch.
     */
    orderBy?: ProgressRecordOrderByWithRelationInput | ProgressRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressRecords
    **/
    _count?: true | ProgressRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressRecordMaxAggregateInputType
  }

  export type GetProgressRecordAggregateType<T extends ProgressRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressRecord[P]>
      : GetScalarType<T[P], AggregateProgressRecord[P]>
  }




  export type ProgressRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressRecordWhereInput
    orderBy?: ProgressRecordOrderByWithAggregationInput | ProgressRecordOrderByWithAggregationInput[]
    by: ProgressRecordScalarFieldEnum[] | ProgressRecordScalarFieldEnum
    having?: ProgressRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressRecordCountAggregateInputType | true
    _avg?: ProgressRecordAvgAggregateInputType
    _sum?: ProgressRecordSumAggregateInputType
    _min?: ProgressRecordMinAggregateInputType
    _max?: ProgressRecordMaxAggregateInputType
  }

  export type ProgressRecordGroupByOutputType = {
    id: string
    userId: string
    weight: number
    bodyFatPct: number | null
    loggedAt: Date
    _count: ProgressRecordCountAggregateOutputType | null
    _avg: ProgressRecordAvgAggregateOutputType | null
    _sum: ProgressRecordSumAggregateOutputType | null
    _min: ProgressRecordMinAggregateOutputType | null
    _max: ProgressRecordMaxAggregateOutputType | null
  }

  type GetProgressRecordGroupByPayload<T extends ProgressRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressRecordGroupByOutputType[P]>
        }
      >
    >


  export type ProgressRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weight?: boolean
    bodyFatPct?: boolean
    loggedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressRecord"]>

  export type ProgressRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weight?: boolean
    bodyFatPct?: boolean
    loggedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressRecord"]>

  export type ProgressRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weight?: boolean
    bodyFatPct?: boolean
    loggedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressRecord"]>

  export type ProgressRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    weight?: boolean
    bodyFatPct?: boolean
    loggedAt?: boolean
  }

  export type ProgressRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "weight" | "bodyFatPct" | "loggedAt", ExtArgs["result"]["progressRecord"]>
  export type ProgressRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProgressRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      weight: number
      bodyFatPct: number | null
      loggedAt: Date
    }, ExtArgs["result"]["progressRecord"]>
    composites: {}
  }

  type ProgressRecordGetPayload<S extends boolean | null | undefined | ProgressRecordDefaultArgs> = $Result.GetResult<Prisma.$ProgressRecordPayload, S>

  type ProgressRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressRecordCountAggregateInputType | true
    }

  export interface ProgressRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressRecord'], meta: { name: 'ProgressRecord' } }
    /**
     * Find zero or one ProgressRecord that matches the filter.
     * @param {ProgressRecordFindUniqueArgs} args - Arguments to find a ProgressRecord
     * @example
     * // Get one ProgressRecord
     * const progressRecord = await prisma.progressRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressRecordFindUniqueArgs>(args: SelectSubset<T, ProgressRecordFindUniqueArgs<ExtArgs>>): Prisma__ProgressRecordClient<$Result.GetResult<Prisma.$ProgressRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgressRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressRecordFindUniqueOrThrowArgs} args - Arguments to find a ProgressRecord
     * @example
     * // Get one ProgressRecord
     * const progressRecord = await prisma.progressRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressRecordClient<$Result.GetResult<Prisma.$ProgressRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRecordFindFirstArgs} args - Arguments to find a ProgressRecord
     * @example
     * // Get one ProgressRecord
     * const progressRecord = await prisma.progressRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressRecordFindFirstArgs>(args?: SelectSubset<T, ProgressRecordFindFirstArgs<ExtArgs>>): Prisma__ProgressRecordClient<$Result.GetResult<Prisma.$ProgressRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgressRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRecordFindFirstOrThrowArgs} args - Arguments to find a ProgressRecord
     * @example
     * // Get one ProgressRecord
     * const progressRecord = await prisma.progressRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressRecordClient<$Result.GetResult<Prisma.$ProgressRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgressRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressRecords
     * const progressRecords = await prisma.progressRecord.findMany()
     * 
     * // Get first 10 ProgressRecords
     * const progressRecords = await prisma.progressRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressRecordWithIdOnly = await prisma.progressRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressRecordFindManyArgs>(args?: SelectSubset<T, ProgressRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgressRecord.
     * @param {ProgressRecordCreateArgs} args - Arguments to create a ProgressRecord.
     * @example
     * // Create one ProgressRecord
     * const ProgressRecord = await prisma.progressRecord.create({
     *   data: {
     *     // ... data to create a ProgressRecord
     *   }
     * })
     * 
     */
    create<T extends ProgressRecordCreateArgs>(args: SelectSubset<T, ProgressRecordCreateArgs<ExtArgs>>): Prisma__ProgressRecordClient<$Result.GetResult<Prisma.$ProgressRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgressRecords.
     * @param {ProgressRecordCreateManyArgs} args - Arguments to create many ProgressRecords.
     * @example
     * // Create many ProgressRecords
     * const progressRecord = await prisma.progressRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressRecordCreateManyArgs>(args?: SelectSubset<T, ProgressRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgressRecords and returns the data saved in the database.
     * @param {ProgressRecordCreateManyAndReturnArgs} args - Arguments to create many ProgressRecords.
     * @example
     * // Create many ProgressRecords
     * const progressRecord = await prisma.progressRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgressRecords and only return the `id`
     * const progressRecordWithIdOnly = await prisma.progressRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgressRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgressRecord.
     * @param {ProgressRecordDeleteArgs} args - Arguments to delete one ProgressRecord.
     * @example
     * // Delete one ProgressRecord
     * const ProgressRecord = await prisma.progressRecord.delete({
     *   where: {
     *     // ... filter to delete one ProgressRecord
     *   }
     * })
     * 
     */
    delete<T extends ProgressRecordDeleteArgs>(args: SelectSubset<T, ProgressRecordDeleteArgs<ExtArgs>>): Prisma__ProgressRecordClient<$Result.GetResult<Prisma.$ProgressRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgressRecord.
     * @param {ProgressRecordUpdateArgs} args - Arguments to update one ProgressRecord.
     * @example
     * // Update one ProgressRecord
     * const progressRecord = await prisma.progressRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressRecordUpdateArgs>(args: SelectSubset<T, ProgressRecordUpdateArgs<ExtArgs>>): Prisma__ProgressRecordClient<$Result.GetResult<Prisma.$ProgressRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgressRecords.
     * @param {ProgressRecordDeleteManyArgs} args - Arguments to filter ProgressRecords to delete.
     * @example
     * // Delete a few ProgressRecords
     * const { count } = await prisma.progressRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressRecordDeleteManyArgs>(args?: SelectSubset<T, ProgressRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressRecords
     * const progressRecord = await prisma.progressRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressRecordUpdateManyArgs>(args: SelectSubset<T, ProgressRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressRecords and returns the data updated in the database.
     * @param {ProgressRecordUpdateManyAndReturnArgs} args - Arguments to update many ProgressRecords.
     * @example
     * // Update many ProgressRecords
     * const progressRecord = await prisma.progressRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgressRecords and only return the `id`
     * const progressRecordWithIdOnly = await prisma.progressRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgressRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgressRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgressRecord.
     * @param {ProgressRecordUpsertArgs} args - Arguments to update or create a ProgressRecord.
     * @example
     * // Update or create a ProgressRecord
     * const progressRecord = await prisma.progressRecord.upsert({
     *   create: {
     *     // ... data to create a ProgressRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressRecord we want to update
     *   }
     * })
     */
    upsert<T extends ProgressRecordUpsertArgs>(args: SelectSubset<T, ProgressRecordUpsertArgs<ExtArgs>>): Prisma__ProgressRecordClient<$Result.GetResult<Prisma.$ProgressRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgressRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRecordCountArgs} args - Arguments to filter ProgressRecords to count.
     * @example
     * // Count the number of ProgressRecords
     * const count = await prisma.progressRecord.count({
     *   where: {
     *     // ... the filter for the ProgressRecords we want to count
     *   }
     * })
    **/
    count<T extends ProgressRecordCountArgs>(
      args?: Subset<T, ProgressRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressRecordAggregateArgs>(args: Subset<T, ProgressRecordAggregateArgs>): Prisma.PrismaPromise<GetProgressRecordAggregateType<T>>

    /**
     * Group by ProgressRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRecordGroupByArgs} args - Group by arguments.
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
      T extends ProgressRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressRecordGroupByArgs['orderBy'] }
        : { orderBy?: ProgressRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressRecord model
   */
  readonly fields: ProgressRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProgressRecord model
   */
  interface ProgressRecordFieldRefs {
    readonly id: FieldRef<"ProgressRecord", 'String'>
    readonly userId: FieldRef<"ProgressRecord", 'String'>
    readonly weight: FieldRef<"ProgressRecord", 'Float'>
    readonly bodyFatPct: FieldRef<"ProgressRecord", 'Float'>
    readonly loggedAt: FieldRef<"ProgressRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgressRecord findUnique
   */
  export type ProgressRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRecord
     */
    select?: ProgressRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressRecord
     */
    omit?: ProgressRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressRecordInclude<ExtArgs> | null
    /**
     * Filter, which ProgressRecord to fetch.
     */
    where: ProgressRecordWhereUniqueInput
  }

  /**
   * ProgressRecord findUniqueOrThrow
   */
  export type ProgressRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRecord
     */
    select?: ProgressRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressRecord
     */
    omit?: ProgressRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressRecordInclude<ExtArgs> | null
    /**
     * Filter, which ProgressRecord to fetch.
     */
    where: ProgressRecordWhereUniqueInput
  }

  /**
   * ProgressRecord findFirst
   */
  export type ProgressRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRecord
     */
    select?: ProgressRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressRecord
     */
    omit?: ProgressRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressRecordInclude<ExtArgs> | null
    /**
     * Filter, which ProgressRecord to fetch.
     */
    where?: ProgressRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressRecords to fetch.
     */
    orderBy?: ProgressRecordOrderByWithRelationInput | ProgressRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressRecords.
     */
    cursor?: ProgressRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressRecords.
     */
    distinct?: ProgressRecordScalarFieldEnum | ProgressRecordScalarFieldEnum[]
  }

  /**
   * ProgressRecord findFirstOrThrow
   */
  export type ProgressRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRecord
     */
    select?: ProgressRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressRecord
     */
    omit?: ProgressRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressRecordInclude<ExtArgs> | null
    /**
     * Filter, which ProgressRecord to fetch.
     */
    where?: ProgressRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressRecords to fetch.
     */
    orderBy?: ProgressRecordOrderByWithRelationInput | ProgressRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressRecords.
     */
    cursor?: ProgressRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressRecords.
     */
    distinct?: ProgressRecordScalarFieldEnum | ProgressRecordScalarFieldEnum[]
  }

  /**
   * ProgressRecord findMany
   */
  export type ProgressRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRecord
     */
    select?: ProgressRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressRecord
     */
    omit?: ProgressRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressRecordInclude<ExtArgs> | null
    /**
     * Filter, which ProgressRecords to fetch.
     */
    where?: ProgressRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressRecords to fetch.
     */
    orderBy?: ProgressRecordOrderByWithRelationInput | ProgressRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressRecords.
     */
    cursor?: ProgressRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressRecords.
     */
    skip?: number
    distinct?: ProgressRecordScalarFieldEnum | ProgressRecordScalarFieldEnum[]
  }

  /**
   * ProgressRecord create
   */
  export type ProgressRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRecord
     */
    select?: ProgressRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressRecord
     */
    omit?: ProgressRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressRecord.
     */
    data: XOR<ProgressRecordCreateInput, ProgressRecordUncheckedCreateInput>
  }

  /**
   * ProgressRecord createMany
   */
  export type ProgressRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressRecords.
     */
    data: ProgressRecordCreateManyInput | ProgressRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgressRecord createManyAndReturn
   */
  export type ProgressRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRecord
     */
    select?: ProgressRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressRecord
     */
    omit?: ProgressRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ProgressRecords.
     */
    data: ProgressRecordCreateManyInput | ProgressRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressRecord update
   */
  export type ProgressRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRecord
     */
    select?: ProgressRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressRecord
     */
    omit?: ProgressRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressRecord.
     */
    data: XOR<ProgressRecordUpdateInput, ProgressRecordUncheckedUpdateInput>
    /**
     * Choose, which ProgressRecord to update.
     */
    where: ProgressRecordWhereUniqueInput
  }

  /**
   * ProgressRecord updateMany
   */
  export type ProgressRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressRecords.
     */
    data: XOR<ProgressRecordUpdateManyMutationInput, ProgressRecordUncheckedUpdateManyInput>
    /**
     * Filter which ProgressRecords to update
     */
    where?: ProgressRecordWhereInput
    /**
     * Limit how many ProgressRecords to update.
     */
    limit?: number
  }

  /**
   * ProgressRecord updateManyAndReturn
   */
  export type ProgressRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRecord
     */
    select?: ProgressRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressRecord
     */
    omit?: ProgressRecordOmit<ExtArgs> | null
    /**
     * The data used to update ProgressRecords.
     */
    data: XOR<ProgressRecordUpdateManyMutationInput, ProgressRecordUncheckedUpdateManyInput>
    /**
     * Filter which ProgressRecords to update
     */
    where?: ProgressRecordWhereInput
    /**
     * Limit how many ProgressRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgressRecord upsert
   */
  export type ProgressRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRecord
     */
    select?: ProgressRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressRecord
     */
    omit?: ProgressRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressRecord to update in case it exists.
     */
    where: ProgressRecordWhereUniqueInput
    /**
     * In case the ProgressRecord found by the `where` argument doesn't exist, create a new ProgressRecord with this data.
     */
    create: XOR<ProgressRecordCreateInput, ProgressRecordUncheckedCreateInput>
    /**
     * In case the ProgressRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressRecordUpdateInput, ProgressRecordUncheckedUpdateInput>
  }

  /**
   * ProgressRecord delete
   */
  export type ProgressRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRecord
     */
    select?: ProgressRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressRecord
     */
    omit?: ProgressRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressRecordInclude<ExtArgs> | null
    /**
     * Filter which ProgressRecord to delete.
     */
    where: ProgressRecordWhereUniqueInput
  }

  /**
   * ProgressRecord deleteMany
   */
  export type ProgressRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressRecords to delete
     */
    where?: ProgressRecordWhereInput
    /**
     * Limit how many ProgressRecords to delete.
     */
    limit?: number
  }

  /**
   * ProgressRecord without action
   */
  export type ProgressRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRecord
     */
    select?: ProgressRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgressRecord
     */
    omit?: ProgressRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressRecordInclude<ExtArgs> | null
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
    clerkUserId: 'clerkUserId',
    name: 'name',
    email: 'email',
    imageUrl: 'imageUrl',
    age: 'age',
    weight: 'weight',
    height: 'height',
    gender: 'gender',
    activityLevel: 'activityLevel',
    dietaryPreference: 'dietaryPreference',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FoodItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    calories: 'calories',
    protein: 'protein',
    carbs: 'carbs',
    fat: 'fat',
    category: 'category',
    isCustom: 'isCustom'
  };

  export type FoodItemScalarFieldEnum = (typeof FoodItemScalarFieldEnum)[keyof typeof FoodItemScalarFieldEnum]


  export const FoodLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    foodItemId: 'foodItemId',
    quantity: 'quantity',
    mealType: 'mealType',
    timestamp: 'timestamp'
  };

  export type FoodLogScalarFieldEnum = (typeof FoodLogScalarFieldEnum)[keyof typeof FoodLogScalarFieldEnum]


  export const MealSuggestionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    suggestion: 'suggestion',
    meals: 'meals',
    calories: 'calories',
    createdAt: 'createdAt',
    aiModelUsed: 'aiModelUsed'
  };

  export type MealSuggestionScalarFieldEnum = (typeof MealSuggestionScalarFieldEnum)[keyof typeof MealSuggestionScalarFieldEnum]


  export const ProgressRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    weight: 'weight',
    bodyFatPct: 'bodyFatPct',
    loggedAt: 'loggedAt'
  };

  export type ProgressRecordScalarFieldEnum = (typeof ProgressRecordScalarFieldEnum)[keyof typeof ProgressRecordScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    clerkUserId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    imageUrl?: StringFilter<"User"> | string
    age?: IntNullableFilter<"User"> | number | null
    weight?: FloatNullableFilter<"User"> | number | null
    height?: FloatNullableFilter<"User"> | number | null
    gender?: StringNullableFilter<"User"> | string | null
    activityLevel?: StringNullableFilter<"User"> | string | null
    dietaryPreference?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    foodLogs?: FoodLogListRelationFilter
    mealSuggestions?: MealSuggestionListRelationFilter
    progressRecords?: ProgressRecordListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    age?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    activityLevel?: SortOrderInput | SortOrder
    dietaryPreference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foodLogs?: FoodLogOrderByRelationAggregateInput
    mealSuggestions?: MealSuggestionOrderByRelationAggregateInput
    progressRecords?: ProgressRecordOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    imageUrl?: StringFilter<"User"> | string
    age?: IntNullableFilter<"User"> | number | null
    weight?: FloatNullableFilter<"User"> | number | null
    height?: FloatNullableFilter<"User"> | number | null
    gender?: StringNullableFilter<"User"> | string | null
    activityLevel?: StringNullableFilter<"User"> | string | null
    dietaryPreference?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    foodLogs?: FoodLogListRelationFilter
    mealSuggestions?: MealSuggestionListRelationFilter
    progressRecords?: ProgressRecordListRelationFilter
  }, "id" | "clerkUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    age?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    activityLevel?: SortOrderInput | SortOrder
    dietaryPreference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkUserId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    imageUrl?: StringWithAggregatesFilter<"User"> | string
    age?: IntNullableWithAggregatesFilter<"User"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"User"> | number | null
    height?: FloatNullableWithAggregatesFilter<"User"> | number | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    activityLevel?: StringNullableWithAggregatesFilter<"User"> | string | null
    dietaryPreference?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FoodItemWhereInput = {
    AND?: FoodItemWhereInput | FoodItemWhereInput[]
    OR?: FoodItemWhereInput[]
    NOT?: FoodItemWhereInput | FoodItemWhereInput[]
    id?: StringFilter<"FoodItem"> | string
    name?: StringFilter<"FoodItem"> | string
    calories?: IntFilter<"FoodItem"> | number
    protein?: FloatFilter<"FoodItem"> | number
    carbs?: FloatFilter<"FoodItem"> | number
    fat?: FloatFilter<"FoodItem"> | number
    category?: StringNullableFilter<"FoodItem"> | string | null
    isCustom?: BoolFilter<"FoodItem"> | boolean
    foodLogs?: FoodLogListRelationFilter
  }

  export type FoodItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    category?: SortOrderInput | SortOrder
    isCustom?: SortOrder
    foodLogs?: FoodLogOrderByRelationAggregateInput
  }

  export type FoodItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodItemWhereInput | FoodItemWhereInput[]
    OR?: FoodItemWhereInput[]
    NOT?: FoodItemWhereInput | FoodItemWhereInput[]
    name?: StringFilter<"FoodItem"> | string
    calories?: IntFilter<"FoodItem"> | number
    protein?: FloatFilter<"FoodItem"> | number
    carbs?: FloatFilter<"FoodItem"> | number
    fat?: FloatFilter<"FoodItem"> | number
    category?: StringNullableFilter<"FoodItem"> | string | null
    isCustom?: BoolFilter<"FoodItem"> | boolean
    foodLogs?: FoodLogListRelationFilter
  }, "id">

  export type FoodItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    category?: SortOrderInput | SortOrder
    isCustom?: SortOrder
    _count?: FoodItemCountOrderByAggregateInput
    _avg?: FoodItemAvgOrderByAggregateInput
    _max?: FoodItemMaxOrderByAggregateInput
    _min?: FoodItemMinOrderByAggregateInput
    _sum?: FoodItemSumOrderByAggregateInput
  }

  export type FoodItemScalarWhereWithAggregatesInput = {
    AND?: FoodItemScalarWhereWithAggregatesInput | FoodItemScalarWhereWithAggregatesInput[]
    OR?: FoodItemScalarWhereWithAggregatesInput[]
    NOT?: FoodItemScalarWhereWithAggregatesInput | FoodItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoodItem"> | string
    name?: StringWithAggregatesFilter<"FoodItem"> | string
    calories?: IntWithAggregatesFilter<"FoodItem"> | number
    protein?: FloatWithAggregatesFilter<"FoodItem"> | number
    carbs?: FloatWithAggregatesFilter<"FoodItem"> | number
    fat?: FloatWithAggregatesFilter<"FoodItem"> | number
    category?: StringNullableWithAggregatesFilter<"FoodItem"> | string | null
    isCustom?: BoolWithAggregatesFilter<"FoodItem"> | boolean
  }

  export type FoodLogWhereInput = {
    AND?: FoodLogWhereInput | FoodLogWhereInput[]
    OR?: FoodLogWhereInput[]
    NOT?: FoodLogWhereInput | FoodLogWhereInput[]
    id?: StringFilter<"FoodLog"> | string
    userId?: StringFilter<"FoodLog"> | string
    foodItemId?: StringFilter<"FoodLog"> | string
    quantity?: FloatFilter<"FoodLog"> | number
    mealType?: StringFilter<"FoodLog"> | string
    timestamp?: DateTimeFilter<"FoodLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foodItem?: XOR<FoodItemScalarRelationFilter, FoodItemWhereInput>
  }

  export type FoodLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
    mealType?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
    foodItem?: FoodItemOrderByWithRelationInput
  }

  export type FoodLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodLogWhereInput | FoodLogWhereInput[]
    OR?: FoodLogWhereInput[]
    NOT?: FoodLogWhereInput | FoodLogWhereInput[]
    userId?: StringFilter<"FoodLog"> | string
    foodItemId?: StringFilter<"FoodLog"> | string
    quantity?: FloatFilter<"FoodLog"> | number
    mealType?: StringFilter<"FoodLog"> | string
    timestamp?: DateTimeFilter<"FoodLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foodItem?: XOR<FoodItemScalarRelationFilter, FoodItemWhereInput>
  }, "id">

  export type FoodLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
    mealType?: SortOrder
    timestamp?: SortOrder
    _count?: FoodLogCountOrderByAggregateInput
    _avg?: FoodLogAvgOrderByAggregateInput
    _max?: FoodLogMaxOrderByAggregateInput
    _min?: FoodLogMinOrderByAggregateInput
    _sum?: FoodLogSumOrderByAggregateInput
  }

  export type FoodLogScalarWhereWithAggregatesInput = {
    AND?: FoodLogScalarWhereWithAggregatesInput | FoodLogScalarWhereWithAggregatesInput[]
    OR?: FoodLogScalarWhereWithAggregatesInput[]
    NOT?: FoodLogScalarWhereWithAggregatesInput | FoodLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoodLog"> | string
    userId?: StringWithAggregatesFilter<"FoodLog"> | string
    foodItemId?: StringWithAggregatesFilter<"FoodLog"> | string
    quantity?: FloatWithAggregatesFilter<"FoodLog"> | number
    mealType?: StringWithAggregatesFilter<"FoodLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"FoodLog"> | Date | string
  }

  export type MealSuggestionWhereInput = {
    AND?: MealSuggestionWhereInput | MealSuggestionWhereInput[]
    OR?: MealSuggestionWhereInput[]
    NOT?: MealSuggestionWhereInput | MealSuggestionWhereInput[]
    id?: StringFilter<"MealSuggestion"> | string
    userId?: StringFilter<"MealSuggestion"> | string
    suggestion?: StringFilter<"MealSuggestion"> | string
    meals?: JsonFilter<"MealSuggestion">
    calories?: IntFilter<"MealSuggestion"> | number
    createdAt?: DateTimeFilter<"MealSuggestion"> | Date | string
    aiModelUsed?: StringNullableFilter<"MealSuggestion"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MealSuggestionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    suggestion?: SortOrder
    meals?: SortOrder
    calories?: SortOrder
    createdAt?: SortOrder
    aiModelUsed?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MealSuggestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealSuggestionWhereInput | MealSuggestionWhereInput[]
    OR?: MealSuggestionWhereInput[]
    NOT?: MealSuggestionWhereInput | MealSuggestionWhereInput[]
    userId?: StringFilter<"MealSuggestion"> | string
    suggestion?: StringFilter<"MealSuggestion"> | string
    meals?: JsonFilter<"MealSuggestion">
    calories?: IntFilter<"MealSuggestion"> | number
    createdAt?: DateTimeFilter<"MealSuggestion"> | Date | string
    aiModelUsed?: StringNullableFilter<"MealSuggestion"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MealSuggestionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    suggestion?: SortOrder
    meals?: SortOrder
    calories?: SortOrder
    createdAt?: SortOrder
    aiModelUsed?: SortOrderInput | SortOrder
    _count?: MealSuggestionCountOrderByAggregateInput
    _avg?: MealSuggestionAvgOrderByAggregateInput
    _max?: MealSuggestionMaxOrderByAggregateInput
    _min?: MealSuggestionMinOrderByAggregateInput
    _sum?: MealSuggestionSumOrderByAggregateInput
  }

  export type MealSuggestionScalarWhereWithAggregatesInput = {
    AND?: MealSuggestionScalarWhereWithAggregatesInput | MealSuggestionScalarWhereWithAggregatesInput[]
    OR?: MealSuggestionScalarWhereWithAggregatesInput[]
    NOT?: MealSuggestionScalarWhereWithAggregatesInput | MealSuggestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealSuggestion"> | string
    userId?: StringWithAggregatesFilter<"MealSuggestion"> | string
    suggestion?: StringWithAggregatesFilter<"MealSuggestion"> | string
    meals?: JsonWithAggregatesFilter<"MealSuggestion">
    calories?: IntWithAggregatesFilter<"MealSuggestion"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MealSuggestion"> | Date | string
    aiModelUsed?: StringNullableWithAggregatesFilter<"MealSuggestion"> | string | null
  }

  export type ProgressRecordWhereInput = {
    AND?: ProgressRecordWhereInput | ProgressRecordWhereInput[]
    OR?: ProgressRecordWhereInput[]
    NOT?: ProgressRecordWhereInput | ProgressRecordWhereInput[]
    id?: StringFilter<"ProgressRecord"> | string
    userId?: StringFilter<"ProgressRecord"> | string
    weight?: FloatFilter<"ProgressRecord"> | number
    bodyFatPct?: FloatNullableFilter<"ProgressRecord"> | number | null
    loggedAt?: DateTimeFilter<"ProgressRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProgressRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    weight?: SortOrder
    bodyFatPct?: SortOrderInput | SortOrder
    loggedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProgressRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgressRecordWhereInput | ProgressRecordWhereInput[]
    OR?: ProgressRecordWhereInput[]
    NOT?: ProgressRecordWhereInput | ProgressRecordWhereInput[]
    userId?: StringFilter<"ProgressRecord"> | string
    weight?: FloatFilter<"ProgressRecord"> | number
    bodyFatPct?: FloatNullableFilter<"ProgressRecord"> | number | null
    loggedAt?: DateTimeFilter<"ProgressRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProgressRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    weight?: SortOrder
    bodyFatPct?: SortOrderInput | SortOrder
    loggedAt?: SortOrder
    _count?: ProgressRecordCountOrderByAggregateInput
    _avg?: ProgressRecordAvgOrderByAggregateInput
    _max?: ProgressRecordMaxOrderByAggregateInput
    _min?: ProgressRecordMinOrderByAggregateInput
    _sum?: ProgressRecordSumOrderByAggregateInput
  }

  export type ProgressRecordScalarWhereWithAggregatesInput = {
    AND?: ProgressRecordScalarWhereWithAggregatesInput | ProgressRecordScalarWhereWithAggregatesInput[]
    OR?: ProgressRecordScalarWhereWithAggregatesInput[]
    NOT?: ProgressRecordScalarWhereWithAggregatesInput | ProgressRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgressRecord"> | string
    userId?: StringWithAggregatesFilter<"ProgressRecord"> | string
    weight?: FloatWithAggregatesFilter<"ProgressRecord"> | number
    bodyFatPct?: FloatNullableWithAggregatesFilter<"ProgressRecord"> | number | null
    loggedAt?: DateTimeWithAggregatesFilter<"ProgressRecord"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkUserId: string
    name: string
    email: string
    imageUrl: string
    age?: number | null
    weight?: number | null
    height?: number | null
    gender?: string | null
    activityLevel?: string | null
    dietaryPreference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodLogs?: FoodLogCreateNestedManyWithoutUserInput
    mealSuggestions?: MealSuggestionCreateNestedManyWithoutUserInput
    progressRecords?: ProgressRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    name: string
    email: string
    imageUrl: string
    age?: number | null
    weight?: number | null
    height?: number | null
    gender?: string | null
    activityLevel?: string | null
    dietaryPreference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodLogs?: FoodLogUncheckedCreateNestedManyWithoutUserInput
    mealSuggestions?: MealSuggestionUncheckedCreateNestedManyWithoutUserInput
    progressRecords?: ProgressRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    dietaryPreference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodLogs?: FoodLogUpdateManyWithoutUserNestedInput
    mealSuggestions?: MealSuggestionUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    dietaryPreference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodLogs?: FoodLogUncheckedUpdateManyWithoutUserNestedInput
    mealSuggestions?: MealSuggestionUncheckedUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkUserId: string
    name: string
    email: string
    imageUrl: string
    age?: number | null
    weight?: number | null
    height?: number | null
    gender?: string | null
    activityLevel?: string | null
    dietaryPreference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    dietaryPreference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    dietaryPreference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemCreateInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    category?: string | null
    isCustom?: boolean
    foodLogs?: FoodLogCreateNestedManyWithoutFoodItemInput
  }

  export type FoodItemUncheckedCreateInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    category?: string | null
    isCustom?: boolean
    foodLogs?: FoodLogUncheckedCreateNestedManyWithoutFoodItemInput
  }

  export type FoodItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    foodLogs?: FoodLogUpdateManyWithoutFoodItemNestedInput
  }

  export type FoodItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    foodLogs?: FoodLogUncheckedUpdateManyWithoutFoodItemNestedInput
  }

  export type FoodItemCreateManyInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    category?: string | null
    isCustom?: boolean
  }

  export type FoodItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isCustom?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FoodItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isCustom?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FoodLogCreateInput = {
    id?: string
    quantity: number
    mealType: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutFoodLogsInput
    foodItem: FoodItemCreateNestedOneWithoutFoodLogsInput
  }

  export type FoodLogUncheckedCreateInput = {
    id?: string
    userId: string
    foodItemId: string
    quantity: number
    mealType: string
    timestamp?: Date | string
  }

  export type FoodLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoodLogsNestedInput
    foodItem?: FoodItemUpdateOneRequiredWithoutFoodLogsNestedInput
  }

  export type FoodLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foodItemId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodLogCreateManyInput = {
    id?: string
    userId: string
    foodItemId: string
    quantity: number
    mealType: string
    timestamp?: Date | string
  }

  export type FoodLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    foodItemId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealSuggestionCreateInput = {
    id?: string
    suggestion: string
    meals: JsonNullValueInput | InputJsonValue
    calories: number
    createdAt?: Date | string
    aiModelUsed?: string | null
    user: UserCreateNestedOneWithoutMealSuggestionsInput
  }

  export type MealSuggestionUncheckedCreateInput = {
    id?: string
    userId: string
    suggestion: string
    meals: JsonNullValueInput | InputJsonValue
    calories: number
    createdAt?: Date | string
    aiModelUsed?: string | null
  }

  export type MealSuggestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    meals?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiModelUsed?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMealSuggestionsNestedInput
  }

  export type MealSuggestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    meals?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiModelUsed?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealSuggestionCreateManyInput = {
    id?: string
    userId: string
    suggestion: string
    meals: JsonNullValueInput | InputJsonValue
    calories: number
    createdAt?: Date | string
    aiModelUsed?: string | null
  }

  export type MealSuggestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    meals?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiModelUsed?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealSuggestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    meals?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiModelUsed?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgressRecordCreateInput = {
    id?: string
    weight: number
    bodyFatPct?: number | null
    loggedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressRecordsInput
  }

  export type ProgressRecordUncheckedCreateInput = {
    id?: string
    userId: string
    weight: number
    bodyFatPct?: number | null
    loggedAt?: Date | string
  }

  export type ProgressRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    bodyFatPct?: NullableFloatFieldUpdateOperationsInput | number | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressRecordsNestedInput
  }

  export type ProgressRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    bodyFatPct?: NullableFloatFieldUpdateOperationsInput | number | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressRecordCreateManyInput = {
    id?: string
    userId: string
    weight: number
    bodyFatPct?: number | null
    loggedAt?: Date | string
  }

  export type ProgressRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    bodyFatPct?: NullableFloatFieldUpdateOperationsInput | number | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    bodyFatPct?: NullableFloatFieldUpdateOperationsInput | number | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type FoodLogListRelationFilter = {
    every?: FoodLogWhereInput
    some?: FoodLogWhereInput
    none?: FoodLogWhereInput
  }

  export type MealSuggestionListRelationFilter = {
    every?: MealSuggestionWhereInput
    some?: MealSuggestionWhereInput
    none?: MealSuggestionWhereInput
  }

  export type ProgressRecordListRelationFilter = {
    every?: ProgressRecordWhereInput
    some?: ProgressRecordWhereInput
    none?: ProgressRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FoodLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealSuggestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    age?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    gender?: SortOrder
    activityLevel?: SortOrder
    dietaryPreference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    age?: SortOrder
    weight?: SortOrder
    height?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    age?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    gender?: SortOrder
    activityLevel?: SortOrder
    dietaryPreference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    age?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    gender?: SortOrder
    activityLevel?: SortOrder
    dietaryPreference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    age?: SortOrder
    weight?: SortOrder
    height?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FoodItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    category?: SortOrder
    isCustom?: SortOrder
  }

  export type FoodItemAvgOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type FoodItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    category?: SortOrder
    isCustom?: SortOrder
  }

  export type FoodItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    category?: SortOrder
    isCustom?: SortOrder
  }

  export type FoodItemSumOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FoodItemScalarRelationFilter = {
    is?: FoodItemWhereInput
    isNot?: FoodItemWhereInput
  }

  export type FoodLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
    mealType?: SortOrder
    timestamp?: SortOrder
  }

  export type FoodLogAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type FoodLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
    mealType?: SortOrder
    timestamp?: SortOrder
  }

  export type FoodLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
    mealType?: SortOrder
    timestamp?: SortOrder
  }

  export type FoodLogSumOrderByAggregateInput = {
    quantity?: SortOrder
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

  export type MealSuggestionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    suggestion?: SortOrder
    meals?: SortOrder
    calories?: SortOrder
    createdAt?: SortOrder
    aiModelUsed?: SortOrder
  }

  export type MealSuggestionAvgOrderByAggregateInput = {
    calories?: SortOrder
  }

  export type MealSuggestionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    suggestion?: SortOrder
    calories?: SortOrder
    createdAt?: SortOrder
    aiModelUsed?: SortOrder
  }

  export type MealSuggestionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    suggestion?: SortOrder
    calories?: SortOrder
    createdAt?: SortOrder
    aiModelUsed?: SortOrder
  }

  export type MealSuggestionSumOrderByAggregateInput = {
    calories?: SortOrder
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

  export type ProgressRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weight?: SortOrder
    bodyFatPct?: SortOrder
    loggedAt?: SortOrder
  }

  export type ProgressRecordAvgOrderByAggregateInput = {
    weight?: SortOrder
    bodyFatPct?: SortOrder
  }

  export type ProgressRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weight?: SortOrder
    bodyFatPct?: SortOrder
    loggedAt?: SortOrder
  }

  export type ProgressRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weight?: SortOrder
    bodyFatPct?: SortOrder
    loggedAt?: SortOrder
  }

  export type ProgressRecordSumOrderByAggregateInput = {
    weight?: SortOrder
    bodyFatPct?: SortOrder
  }

  export type FoodLogCreateNestedManyWithoutUserInput = {
    create?: XOR<FoodLogCreateWithoutUserInput, FoodLogUncheckedCreateWithoutUserInput> | FoodLogCreateWithoutUserInput[] | FoodLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodLogCreateOrConnectWithoutUserInput | FoodLogCreateOrConnectWithoutUserInput[]
    createMany?: FoodLogCreateManyUserInputEnvelope
    connect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
  }

  export type MealSuggestionCreateNestedManyWithoutUserInput = {
    create?: XOR<MealSuggestionCreateWithoutUserInput, MealSuggestionUncheckedCreateWithoutUserInput> | MealSuggestionCreateWithoutUserInput[] | MealSuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealSuggestionCreateOrConnectWithoutUserInput | MealSuggestionCreateOrConnectWithoutUserInput[]
    createMany?: MealSuggestionCreateManyUserInputEnvelope
    connect?: MealSuggestionWhereUniqueInput | MealSuggestionWhereUniqueInput[]
  }

  export type ProgressRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressRecordCreateWithoutUserInput, ProgressRecordUncheckedCreateWithoutUserInput> | ProgressRecordCreateWithoutUserInput[] | ProgressRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressRecordCreateOrConnectWithoutUserInput | ProgressRecordCreateOrConnectWithoutUserInput[]
    createMany?: ProgressRecordCreateManyUserInputEnvelope
    connect?: ProgressRecordWhereUniqueInput | ProgressRecordWhereUniqueInput[]
  }

  export type FoodLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FoodLogCreateWithoutUserInput, FoodLogUncheckedCreateWithoutUserInput> | FoodLogCreateWithoutUserInput[] | FoodLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodLogCreateOrConnectWithoutUserInput | FoodLogCreateOrConnectWithoutUserInput[]
    createMany?: FoodLogCreateManyUserInputEnvelope
    connect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
  }

  export type MealSuggestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MealSuggestionCreateWithoutUserInput, MealSuggestionUncheckedCreateWithoutUserInput> | MealSuggestionCreateWithoutUserInput[] | MealSuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealSuggestionCreateOrConnectWithoutUserInput | MealSuggestionCreateOrConnectWithoutUserInput[]
    createMany?: MealSuggestionCreateManyUserInputEnvelope
    connect?: MealSuggestionWhereUniqueInput | MealSuggestionWhereUniqueInput[]
  }

  export type ProgressRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressRecordCreateWithoutUserInput, ProgressRecordUncheckedCreateWithoutUserInput> | ProgressRecordCreateWithoutUserInput[] | ProgressRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressRecordCreateOrConnectWithoutUserInput | ProgressRecordCreateOrConnectWithoutUserInput[]
    createMany?: ProgressRecordCreateManyUserInputEnvelope
    connect?: ProgressRecordWhereUniqueInput | ProgressRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FoodLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<FoodLogCreateWithoutUserInput, FoodLogUncheckedCreateWithoutUserInput> | FoodLogCreateWithoutUserInput[] | FoodLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodLogCreateOrConnectWithoutUserInput | FoodLogCreateOrConnectWithoutUserInput[]
    upsert?: FoodLogUpsertWithWhereUniqueWithoutUserInput | FoodLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FoodLogCreateManyUserInputEnvelope
    set?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    disconnect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    delete?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    connect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    update?: FoodLogUpdateWithWhereUniqueWithoutUserInput | FoodLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FoodLogUpdateManyWithWhereWithoutUserInput | FoodLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FoodLogScalarWhereInput | FoodLogScalarWhereInput[]
  }

  export type MealSuggestionUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealSuggestionCreateWithoutUserInput, MealSuggestionUncheckedCreateWithoutUserInput> | MealSuggestionCreateWithoutUserInput[] | MealSuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealSuggestionCreateOrConnectWithoutUserInput | MealSuggestionCreateOrConnectWithoutUserInput[]
    upsert?: MealSuggestionUpsertWithWhereUniqueWithoutUserInput | MealSuggestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealSuggestionCreateManyUserInputEnvelope
    set?: MealSuggestionWhereUniqueInput | MealSuggestionWhereUniqueInput[]
    disconnect?: MealSuggestionWhereUniqueInput | MealSuggestionWhereUniqueInput[]
    delete?: MealSuggestionWhereUniqueInput | MealSuggestionWhereUniqueInput[]
    connect?: MealSuggestionWhereUniqueInput | MealSuggestionWhereUniqueInput[]
    update?: MealSuggestionUpdateWithWhereUniqueWithoutUserInput | MealSuggestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealSuggestionUpdateManyWithWhereWithoutUserInput | MealSuggestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealSuggestionScalarWhereInput | MealSuggestionScalarWhereInput[]
  }

  export type ProgressRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressRecordCreateWithoutUserInput, ProgressRecordUncheckedCreateWithoutUserInput> | ProgressRecordCreateWithoutUserInput[] | ProgressRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressRecordCreateOrConnectWithoutUserInput | ProgressRecordCreateOrConnectWithoutUserInput[]
    upsert?: ProgressRecordUpsertWithWhereUniqueWithoutUserInput | ProgressRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressRecordCreateManyUserInputEnvelope
    set?: ProgressRecordWhereUniqueInput | ProgressRecordWhereUniqueInput[]
    disconnect?: ProgressRecordWhereUniqueInput | ProgressRecordWhereUniqueInput[]
    delete?: ProgressRecordWhereUniqueInput | ProgressRecordWhereUniqueInput[]
    connect?: ProgressRecordWhereUniqueInput | ProgressRecordWhereUniqueInput[]
    update?: ProgressRecordUpdateWithWhereUniqueWithoutUserInput | ProgressRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressRecordUpdateManyWithWhereWithoutUserInput | ProgressRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressRecordScalarWhereInput | ProgressRecordScalarWhereInput[]
  }

  export type FoodLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FoodLogCreateWithoutUserInput, FoodLogUncheckedCreateWithoutUserInput> | FoodLogCreateWithoutUserInput[] | FoodLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodLogCreateOrConnectWithoutUserInput | FoodLogCreateOrConnectWithoutUserInput[]
    upsert?: FoodLogUpsertWithWhereUniqueWithoutUserInput | FoodLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FoodLogCreateManyUserInputEnvelope
    set?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    disconnect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    delete?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    connect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    update?: FoodLogUpdateWithWhereUniqueWithoutUserInput | FoodLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FoodLogUpdateManyWithWhereWithoutUserInput | FoodLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FoodLogScalarWhereInput | FoodLogScalarWhereInput[]
  }

  export type MealSuggestionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealSuggestionCreateWithoutUserInput, MealSuggestionUncheckedCreateWithoutUserInput> | MealSuggestionCreateWithoutUserInput[] | MealSuggestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealSuggestionCreateOrConnectWithoutUserInput | MealSuggestionCreateOrConnectWithoutUserInput[]
    upsert?: MealSuggestionUpsertWithWhereUniqueWithoutUserInput | MealSuggestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealSuggestionCreateManyUserInputEnvelope
    set?: MealSuggestionWhereUniqueInput | MealSuggestionWhereUniqueInput[]
    disconnect?: MealSuggestionWhereUniqueInput | MealSuggestionWhereUniqueInput[]
    delete?: MealSuggestionWhereUniqueInput | MealSuggestionWhereUniqueInput[]
    connect?: MealSuggestionWhereUniqueInput | MealSuggestionWhereUniqueInput[]
    update?: MealSuggestionUpdateWithWhereUniqueWithoutUserInput | MealSuggestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealSuggestionUpdateManyWithWhereWithoutUserInput | MealSuggestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealSuggestionScalarWhereInput | MealSuggestionScalarWhereInput[]
  }

  export type ProgressRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressRecordCreateWithoutUserInput, ProgressRecordUncheckedCreateWithoutUserInput> | ProgressRecordCreateWithoutUserInput[] | ProgressRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressRecordCreateOrConnectWithoutUserInput | ProgressRecordCreateOrConnectWithoutUserInput[]
    upsert?: ProgressRecordUpsertWithWhereUniqueWithoutUserInput | ProgressRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressRecordCreateManyUserInputEnvelope
    set?: ProgressRecordWhereUniqueInput | ProgressRecordWhereUniqueInput[]
    disconnect?: ProgressRecordWhereUniqueInput | ProgressRecordWhereUniqueInput[]
    delete?: ProgressRecordWhereUniqueInput | ProgressRecordWhereUniqueInput[]
    connect?: ProgressRecordWhereUniqueInput | ProgressRecordWhereUniqueInput[]
    update?: ProgressRecordUpdateWithWhereUniqueWithoutUserInput | ProgressRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressRecordUpdateManyWithWhereWithoutUserInput | ProgressRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressRecordScalarWhereInput | ProgressRecordScalarWhereInput[]
  }

  export type FoodLogCreateNestedManyWithoutFoodItemInput = {
    create?: XOR<FoodLogCreateWithoutFoodItemInput, FoodLogUncheckedCreateWithoutFoodItemInput> | FoodLogCreateWithoutFoodItemInput[] | FoodLogUncheckedCreateWithoutFoodItemInput[]
    connectOrCreate?: FoodLogCreateOrConnectWithoutFoodItemInput | FoodLogCreateOrConnectWithoutFoodItemInput[]
    createMany?: FoodLogCreateManyFoodItemInputEnvelope
    connect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
  }

  export type FoodLogUncheckedCreateNestedManyWithoutFoodItemInput = {
    create?: XOR<FoodLogCreateWithoutFoodItemInput, FoodLogUncheckedCreateWithoutFoodItemInput> | FoodLogCreateWithoutFoodItemInput[] | FoodLogUncheckedCreateWithoutFoodItemInput[]
    connectOrCreate?: FoodLogCreateOrConnectWithoutFoodItemInput | FoodLogCreateOrConnectWithoutFoodItemInput[]
    createMany?: FoodLogCreateManyFoodItemInputEnvelope
    connect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FoodLogUpdateManyWithoutFoodItemNestedInput = {
    create?: XOR<FoodLogCreateWithoutFoodItemInput, FoodLogUncheckedCreateWithoutFoodItemInput> | FoodLogCreateWithoutFoodItemInput[] | FoodLogUncheckedCreateWithoutFoodItemInput[]
    connectOrCreate?: FoodLogCreateOrConnectWithoutFoodItemInput | FoodLogCreateOrConnectWithoutFoodItemInput[]
    upsert?: FoodLogUpsertWithWhereUniqueWithoutFoodItemInput | FoodLogUpsertWithWhereUniqueWithoutFoodItemInput[]
    createMany?: FoodLogCreateManyFoodItemInputEnvelope
    set?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    disconnect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    delete?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    connect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    update?: FoodLogUpdateWithWhereUniqueWithoutFoodItemInput | FoodLogUpdateWithWhereUniqueWithoutFoodItemInput[]
    updateMany?: FoodLogUpdateManyWithWhereWithoutFoodItemInput | FoodLogUpdateManyWithWhereWithoutFoodItemInput[]
    deleteMany?: FoodLogScalarWhereInput | FoodLogScalarWhereInput[]
  }

  export type FoodLogUncheckedUpdateManyWithoutFoodItemNestedInput = {
    create?: XOR<FoodLogCreateWithoutFoodItemInput, FoodLogUncheckedCreateWithoutFoodItemInput> | FoodLogCreateWithoutFoodItemInput[] | FoodLogUncheckedCreateWithoutFoodItemInput[]
    connectOrCreate?: FoodLogCreateOrConnectWithoutFoodItemInput | FoodLogCreateOrConnectWithoutFoodItemInput[]
    upsert?: FoodLogUpsertWithWhereUniqueWithoutFoodItemInput | FoodLogUpsertWithWhereUniqueWithoutFoodItemInput[]
    createMany?: FoodLogCreateManyFoodItemInputEnvelope
    set?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    disconnect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    delete?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    connect?: FoodLogWhereUniqueInput | FoodLogWhereUniqueInput[]
    update?: FoodLogUpdateWithWhereUniqueWithoutFoodItemInput | FoodLogUpdateWithWhereUniqueWithoutFoodItemInput[]
    updateMany?: FoodLogUpdateManyWithWhereWithoutFoodItemInput | FoodLogUpdateManyWithWhereWithoutFoodItemInput[]
    deleteMany?: FoodLogScalarWhereInput | FoodLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFoodLogsInput = {
    create?: XOR<UserCreateWithoutFoodLogsInput, UserUncheckedCreateWithoutFoodLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoodLogsInput
    connect?: UserWhereUniqueInput
  }

  export type FoodItemCreateNestedOneWithoutFoodLogsInput = {
    create?: XOR<FoodItemCreateWithoutFoodLogsInput, FoodItemUncheckedCreateWithoutFoodLogsInput>
    connectOrCreate?: FoodItemCreateOrConnectWithoutFoodLogsInput
    connect?: FoodItemWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFoodLogsNestedInput = {
    create?: XOR<UserCreateWithoutFoodLogsInput, UserUncheckedCreateWithoutFoodLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoodLogsInput
    upsert?: UserUpsertWithoutFoodLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFoodLogsInput, UserUpdateWithoutFoodLogsInput>, UserUncheckedUpdateWithoutFoodLogsInput>
  }

  export type FoodItemUpdateOneRequiredWithoutFoodLogsNestedInput = {
    create?: XOR<FoodItemCreateWithoutFoodLogsInput, FoodItemUncheckedCreateWithoutFoodLogsInput>
    connectOrCreate?: FoodItemCreateOrConnectWithoutFoodLogsInput
    upsert?: FoodItemUpsertWithoutFoodLogsInput
    connect?: FoodItemWhereUniqueInput
    update?: XOR<XOR<FoodItemUpdateToOneWithWhereWithoutFoodLogsInput, FoodItemUpdateWithoutFoodLogsInput>, FoodItemUncheckedUpdateWithoutFoodLogsInput>
  }

  export type UserCreateNestedOneWithoutMealSuggestionsInput = {
    create?: XOR<UserCreateWithoutMealSuggestionsInput, UserUncheckedCreateWithoutMealSuggestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealSuggestionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMealSuggestionsNestedInput = {
    create?: XOR<UserCreateWithoutMealSuggestionsInput, UserUncheckedCreateWithoutMealSuggestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealSuggestionsInput
    upsert?: UserUpsertWithoutMealSuggestionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMealSuggestionsInput, UserUpdateWithoutMealSuggestionsInput>, UserUncheckedUpdateWithoutMealSuggestionsInput>
  }

  export type UserCreateNestedOneWithoutProgressRecordsInput = {
    create?: XOR<UserCreateWithoutProgressRecordsInput, UserUncheckedCreateWithoutProgressRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProgressRecordsNestedInput = {
    create?: XOR<UserCreateWithoutProgressRecordsInput, UserUncheckedCreateWithoutProgressRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressRecordsInput
    upsert?: UserUpsertWithoutProgressRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressRecordsInput, UserUpdateWithoutProgressRecordsInput>, UserUncheckedUpdateWithoutProgressRecordsInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FoodLogCreateWithoutUserInput = {
    id?: string
    quantity: number
    mealType: string
    timestamp?: Date | string
    foodItem: FoodItemCreateNestedOneWithoutFoodLogsInput
  }

  export type FoodLogUncheckedCreateWithoutUserInput = {
    id?: string
    foodItemId: string
    quantity: number
    mealType: string
    timestamp?: Date | string
  }

  export type FoodLogCreateOrConnectWithoutUserInput = {
    where: FoodLogWhereUniqueInput
    create: XOR<FoodLogCreateWithoutUserInput, FoodLogUncheckedCreateWithoutUserInput>
  }

  export type FoodLogCreateManyUserInputEnvelope = {
    data: FoodLogCreateManyUserInput | FoodLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MealSuggestionCreateWithoutUserInput = {
    id?: string
    suggestion: string
    meals: JsonNullValueInput | InputJsonValue
    calories: number
    createdAt?: Date | string
    aiModelUsed?: string | null
  }

  export type MealSuggestionUncheckedCreateWithoutUserInput = {
    id?: string
    suggestion: string
    meals: JsonNullValueInput | InputJsonValue
    calories: number
    createdAt?: Date | string
    aiModelUsed?: string | null
  }

  export type MealSuggestionCreateOrConnectWithoutUserInput = {
    where: MealSuggestionWhereUniqueInput
    create: XOR<MealSuggestionCreateWithoutUserInput, MealSuggestionUncheckedCreateWithoutUserInput>
  }

  export type MealSuggestionCreateManyUserInputEnvelope = {
    data: MealSuggestionCreateManyUserInput | MealSuggestionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProgressRecordCreateWithoutUserInput = {
    id?: string
    weight: number
    bodyFatPct?: number | null
    loggedAt?: Date | string
  }

  export type ProgressRecordUncheckedCreateWithoutUserInput = {
    id?: string
    weight: number
    bodyFatPct?: number | null
    loggedAt?: Date | string
  }

  export type ProgressRecordCreateOrConnectWithoutUserInput = {
    where: ProgressRecordWhereUniqueInput
    create: XOR<ProgressRecordCreateWithoutUserInput, ProgressRecordUncheckedCreateWithoutUserInput>
  }

  export type ProgressRecordCreateManyUserInputEnvelope = {
    data: ProgressRecordCreateManyUserInput | ProgressRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FoodLogUpsertWithWhereUniqueWithoutUserInput = {
    where: FoodLogWhereUniqueInput
    update: XOR<FoodLogUpdateWithoutUserInput, FoodLogUncheckedUpdateWithoutUserInput>
    create: XOR<FoodLogCreateWithoutUserInput, FoodLogUncheckedCreateWithoutUserInput>
  }

  export type FoodLogUpdateWithWhereUniqueWithoutUserInput = {
    where: FoodLogWhereUniqueInput
    data: XOR<FoodLogUpdateWithoutUserInput, FoodLogUncheckedUpdateWithoutUserInput>
  }

  export type FoodLogUpdateManyWithWhereWithoutUserInput = {
    where: FoodLogScalarWhereInput
    data: XOR<FoodLogUpdateManyMutationInput, FoodLogUncheckedUpdateManyWithoutUserInput>
  }

  export type FoodLogScalarWhereInput = {
    AND?: FoodLogScalarWhereInput | FoodLogScalarWhereInput[]
    OR?: FoodLogScalarWhereInput[]
    NOT?: FoodLogScalarWhereInput | FoodLogScalarWhereInput[]
    id?: StringFilter<"FoodLog"> | string
    userId?: StringFilter<"FoodLog"> | string
    foodItemId?: StringFilter<"FoodLog"> | string
    quantity?: FloatFilter<"FoodLog"> | number
    mealType?: StringFilter<"FoodLog"> | string
    timestamp?: DateTimeFilter<"FoodLog"> | Date | string
  }

  export type MealSuggestionUpsertWithWhereUniqueWithoutUserInput = {
    where: MealSuggestionWhereUniqueInput
    update: XOR<MealSuggestionUpdateWithoutUserInput, MealSuggestionUncheckedUpdateWithoutUserInput>
    create: XOR<MealSuggestionCreateWithoutUserInput, MealSuggestionUncheckedCreateWithoutUserInput>
  }

  export type MealSuggestionUpdateWithWhereUniqueWithoutUserInput = {
    where: MealSuggestionWhereUniqueInput
    data: XOR<MealSuggestionUpdateWithoutUserInput, MealSuggestionUncheckedUpdateWithoutUserInput>
  }

  export type MealSuggestionUpdateManyWithWhereWithoutUserInput = {
    where: MealSuggestionScalarWhereInput
    data: XOR<MealSuggestionUpdateManyMutationInput, MealSuggestionUncheckedUpdateManyWithoutUserInput>
  }

  export type MealSuggestionScalarWhereInput = {
    AND?: MealSuggestionScalarWhereInput | MealSuggestionScalarWhereInput[]
    OR?: MealSuggestionScalarWhereInput[]
    NOT?: MealSuggestionScalarWhereInput | MealSuggestionScalarWhereInput[]
    id?: StringFilter<"MealSuggestion"> | string
    userId?: StringFilter<"MealSuggestion"> | string
    suggestion?: StringFilter<"MealSuggestion"> | string
    meals?: JsonFilter<"MealSuggestion">
    calories?: IntFilter<"MealSuggestion"> | number
    createdAt?: DateTimeFilter<"MealSuggestion"> | Date | string
    aiModelUsed?: StringNullableFilter<"MealSuggestion"> | string | null
  }

  export type ProgressRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgressRecordWhereUniqueInput
    update: XOR<ProgressRecordUpdateWithoutUserInput, ProgressRecordUncheckedUpdateWithoutUserInput>
    create: XOR<ProgressRecordCreateWithoutUserInput, ProgressRecordUncheckedCreateWithoutUserInput>
  }

  export type ProgressRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgressRecordWhereUniqueInput
    data: XOR<ProgressRecordUpdateWithoutUserInput, ProgressRecordUncheckedUpdateWithoutUserInput>
  }

  export type ProgressRecordUpdateManyWithWhereWithoutUserInput = {
    where: ProgressRecordScalarWhereInput
    data: XOR<ProgressRecordUpdateManyMutationInput, ProgressRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgressRecordScalarWhereInput = {
    AND?: ProgressRecordScalarWhereInput | ProgressRecordScalarWhereInput[]
    OR?: ProgressRecordScalarWhereInput[]
    NOT?: ProgressRecordScalarWhereInput | ProgressRecordScalarWhereInput[]
    id?: StringFilter<"ProgressRecord"> | string
    userId?: StringFilter<"ProgressRecord"> | string
    weight?: FloatFilter<"ProgressRecord"> | number
    bodyFatPct?: FloatNullableFilter<"ProgressRecord"> | number | null
    loggedAt?: DateTimeFilter<"ProgressRecord"> | Date | string
  }

  export type FoodLogCreateWithoutFoodItemInput = {
    id?: string
    quantity: number
    mealType: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutFoodLogsInput
  }

  export type FoodLogUncheckedCreateWithoutFoodItemInput = {
    id?: string
    userId: string
    quantity: number
    mealType: string
    timestamp?: Date | string
  }

  export type FoodLogCreateOrConnectWithoutFoodItemInput = {
    where: FoodLogWhereUniqueInput
    create: XOR<FoodLogCreateWithoutFoodItemInput, FoodLogUncheckedCreateWithoutFoodItemInput>
  }

  export type FoodLogCreateManyFoodItemInputEnvelope = {
    data: FoodLogCreateManyFoodItemInput | FoodLogCreateManyFoodItemInput[]
    skipDuplicates?: boolean
  }

  export type FoodLogUpsertWithWhereUniqueWithoutFoodItemInput = {
    where: FoodLogWhereUniqueInput
    update: XOR<FoodLogUpdateWithoutFoodItemInput, FoodLogUncheckedUpdateWithoutFoodItemInput>
    create: XOR<FoodLogCreateWithoutFoodItemInput, FoodLogUncheckedCreateWithoutFoodItemInput>
  }

  export type FoodLogUpdateWithWhereUniqueWithoutFoodItemInput = {
    where: FoodLogWhereUniqueInput
    data: XOR<FoodLogUpdateWithoutFoodItemInput, FoodLogUncheckedUpdateWithoutFoodItemInput>
  }

  export type FoodLogUpdateManyWithWhereWithoutFoodItemInput = {
    where: FoodLogScalarWhereInput
    data: XOR<FoodLogUpdateManyMutationInput, FoodLogUncheckedUpdateManyWithoutFoodItemInput>
  }

  export type UserCreateWithoutFoodLogsInput = {
    id?: string
    clerkUserId: string
    name: string
    email: string
    imageUrl: string
    age?: number | null
    weight?: number | null
    height?: number | null
    gender?: string | null
    activityLevel?: string | null
    dietaryPreference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealSuggestions?: MealSuggestionCreateNestedManyWithoutUserInput
    progressRecords?: ProgressRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFoodLogsInput = {
    id?: string
    clerkUserId: string
    name: string
    email: string
    imageUrl: string
    age?: number | null
    weight?: number | null
    height?: number | null
    gender?: string | null
    activityLevel?: string | null
    dietaryPreference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealSuggestions?: MealSuggestionUncheckedCreateNestedManyWithoutUserInput
    progressRecords?: ProgressRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFoodLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFoodLogsInput, UserUncheckedCreateWithoutFoodLogsInput>
  }

  export type FoodItemCreateWithoutFoodLogsInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    category?: string | null
    isCustom?: boolean
  }

  export type FoodItemUncheckedCreateWithoutFoodLogsInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    category?: string | null
    isCustom?: boolean
  }

  export type FoodItemCreateOrConnectWithoutFoodLogsInput = {
    where: FoodItemWhereUniqueInput
    create: XOR<FoodItemCreateWithoutFoodLogsInput, FoodItemUncheckedCreateWithoutFoodLogsInput>
  }

  export type UserUpsertWithoutFoodLogsInput = {
    update: XOR<UserUpdateWithoutFoodLogsInput, UserUncheckedUpdateWithoutFoodLogsInput>
    create: XOR<UserCreateWithoutFoodLogsInput, UserUncheckedCreateWithoutFoodLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFoodLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFoodLogsInput, UserUncheckedUpdateWithoutFoodLogsInput>
  }

  export type UserUpdateWithoutFoodLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    dietaryPreference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealSuggestions?: MealSuggestionUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFoodLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    dietaryPreference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealSuggestions?: MealSuggestionUncheckedUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FoodItemUpsertWithoutFoodLogsInput = {
    update: XOR<FoodItemUpdateWithoutFoodLogsInput, FoodItemUncheckedUpdateWithoutFoodLogsInput>
    create: XOR<FoodItemCreateWithoutFoodLogsInput, FoodItemUncheckedCreateWithoutFoodLogsInput>
    where?: FoodItemWhereInput
  }

  export type FoodItemUpdateToOneWithWhereWithoutFoodLogsInput = {
    where?: FoodItemWhereInput
    data: XOR<FoodItemUpdateWithoutFoodLogsInput, FoodItemUncheckedUpdateWithoutFoodLogsInput>
  }

  export type FoodItemUpdateWithoutFoodLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isCustom?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FoodItemUncheckedUpdateWithoutFoodLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: IntFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isCustom?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutMealSuggestionsInput = {
    id?: string
    clerkUserId: string
    name: string
    email: string
    imageUrl: string
    age?: number | null
    weight?: number | null
    height?: number | null
    gender?: string | null
    activityLevel?: string | null
    dietaryPreference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodLogs?: FoodLogCreateNestedManyWithoutUserInput
    progressRecords?: ProgressRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMealSuggestionsInput = {
    id?: string
    clerkUserId: string
    name: string
    email: string
    imageUrl: string
    age?: number | null
    weight?: number | null
    height?: number | null
    gender?: string | null
    activityLevel?: string | null
    dietaryPreference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodLogs?: FoodLogUncheckedCreateNestedManyWithoutUserInput
    progressRecords?: ProgressRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMealSuggestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMealSuggestionsInput, UserUncheckedCreateWithoutMealSuggestionsInput>
  }

  export type UserUpsertWithoutMealSuggestionsInput = {
    update: XOR<UserUpdateWithoutMealSuggestionsInput, UserUncheckedUpdateWithoutMealSuggestionsInput>
    create: XOR<UserCreateWithoutMealSuggestionsInput, UserUncheckedCreateWithoutMealSuggestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMealSuggestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMealSuggestionsInput, UserUncheckedUpdateWithoutMealSuggestionsInput>
  }

  export type UserUpdateWithoutMealSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    dietaryPreference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodLogs?: FoodLogUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMealSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    dietaryPreference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodLogs?: FoodLogUncheckedUpdateManyWithoutUserNestedInput
    progressRecords?: ProgressRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProgressRecordsInput = {
    id?: string
    clerkUserId: string
    name: string
    email: string
    imageUrl: string
    age?: number | null
    weight?: number | null
    height?: number | null
    gender?: string | null
    activityLevel?: string | null
    dietaryPreference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodLogs?: FoodLogCreateNestedManyWithoutUserInput
    mealSuggestions?: MealSuggestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressRecordsInput = {
    id?: string
    clerkUserId: string
    name: string
    email: string
    imageUrl: string
    age?: number | null
    weight?: number | null
    height?: number | null
    gender?: string | null
    activityLevel?: string | null
    dietaryPreference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodLogs?: FoodLogUncheckedCreateNestedManyWithoutUserInput
    mealSuggestions?: MealSuggestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressRecordsInput, UserUncheckedCreateWithoutProgressRecordsInput>
  }

  export type UserUpsertWithoutProgressRecordsInput = {
    update: XOR<UserUpdateWithoutProgressRecordsInput, UserUncheckedUpdateWithoutProgressRecordsInput>
    create: XOR<UserCreateWithoutProgressRecordsInput, UserUncheckedCreateWithoutProgressRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressRecordsInput, UserUncheckedUpdateWithoutProgressRecordsInput>
  }

  export type UserUpdateWithoutProgressRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    dietaryPreference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodLogs?: FoodLogUpdateManyWithoutUserNestedInput
    mealSuggestions?: MealSuggestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: NullableStringFieldUpdateOperationsInput | string | null
    dietaryPreference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodLogs?: FoodLogUncheckedUpdateManyWithoutUserNestedInput
    mealSuggestions?: MealSuggestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FoodLogCreateManyUserInput = {
    id?: string
    foodItemId: string
    quantity: number
    mealType: string
    timestamp?: Date | string
  }

  export type MealSuggestionCreateManyUserInput = {
    id?: string
    suggestion: string
    meals: JsonNullValueInput | InputJsonValue
    calories: number
    createdAt?: Date | string
    aiModelUsed?: string | null
  }

  export type ProgressRecordCreateManyUserInput = {
    id?: string
    weight: number
    bodyFatPct?: number | null
    loggedAt?: Date | string
  }

  export type FoodLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    foodItem?: FoodItemUpdateOneRequiredWithoutFoodLogsNestedInput
  }

  export type FoodLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodItemId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodItemId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealSuggestionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    meals?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiModelUsed?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealSuggestionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    meals?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiModelUsed?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealSuggestionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    suggestion?: StringFieldUpdateOperationsInput | string
    meals?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiModelUsed?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgressRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    bodyFatPct?: NullableFloatFieldUpdateOperationsInput | number | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    bodyFatPct?: NullableFloatFieldUpdateOperationsInput | number | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    bodyFatPct?: NullableFloatFieldUpdateOperationsInput | number | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodLogCreateManyFoodItemInput = {
    id?: string
    userId: string
    quantity: number
    mealType: string
    timestamp?: Date | string
  }

  export type FoodLogUpdateWithoutFoodItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoodLogsNestedInput
  }

  export type FoodLogUncheckedUpdateWithoutFoodItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodLogUncheckedUpdateManyWithoutFoodItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    mealType?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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