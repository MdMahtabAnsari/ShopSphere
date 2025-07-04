
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
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model Billboard
 * 
 */
export type Billboard = $Result.DefaultSelection<Prisma.$BillboardPayload>
/**
 * Model BillboardMedia
 * 
 */
export type BillboardMedia = $Result.DefaultSelection<Prisma.$BillboardMediaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ResourceType: {
  image: 'image',
  video: 'video',
  raw: 'raw',
  auto: 'auto'
};

export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType]

}

export type ResourceType = $Enums.ResourceType

export const ResourceType: typeof $Enums.ResourceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Stores
 * const stores = await prisma.store.findMany()
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
   * // Fetch zero or more Stores
   * const stores = await prisma.store.findMany()
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
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billboard`: Exposes CRUD operations for the **Billboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Billboards
    * const billboards = await prisma.billboard.findMany()
    * ```
    */
  get billboard(): Prisma.BillboardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billboardMedia`: Exposes CRUD operations for the **BillboardMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillboardMedias
    * const billboardMedias = await prisma.billboardMedia.findMany()
    * ```
    */
  get billboardMedia(): Prisma.BillboardMediaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    Store: 'Store',
    Billboard: 'Billboard',
    BillboardMedia: 'BillboardMedia'
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
      modelProps: "store" | "billboard" | "billboardMedia"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      Billboard: {
        payload: Prisma.$BillboardPayload<ExtArgs>
        fields: Prisma.BillboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          findFirst: {
            args: Prisma.BillboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          findMany: {
            args: Prisma.BillboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>[]
          }
          create: {
            args: Prisma.BillboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          createMany: {
            args: Prisma.BillboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>[]
          }
          delete: {
            args: Prisma.BillboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          update: {
            args: Prisma.BillboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          deleteMany: {
            args: Prisma.BillboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>[]
          }
          upsert: {
            args: Prisma.BillboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          aggregate: {
            args: Prisma.BillboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillboard>
          }
          groupBy: {
            args: Prisma.BillboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillboardCountArgs<ExtArgs>
            result: $Utils.Optional<BillboardCountAggregateOutputType> | number
          }
        }
      }
      BillboardMedia: {
        payload: Prisma.$BillboardMediaPayload<ExtArgs>
        fields: Prisma.BillboardMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillboardMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillboardMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardMediaPayload>
          }
          findFirst: {
            args: Prisma.BillboardMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillboardMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardMediaPayload>
          }
          findMany: {
            args: Prisma.BillboardMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardMediaPayload>[]
          }
          create: {
            args: Prisma.BillboardMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardMediaPayload>
          }
          createMany: {
            args: Prisma.BillboardMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillboardMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardMediaPayload>[]
          }
          delete: {
            args: Prisma.BillboardMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardMediaPayload>
          }
          update: {
            args: Prisma.BillboardMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardMediaPayload>
          }
          deleteMany: {
            args: Prisma.BillboardMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillboardMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillboardMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardMediaPayload>[]
          }
          upsert: {
            args: Prisma.BillboardMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillboardMediaPayload>
          }
          aggregate: {
            args: Prisma.BillboardMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillboardMedia>
          }
          groupBy: {
            args: Prisma.BillboardMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillboardMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillboardMediaCountArgs<ExtArgs>
            result: $Utils.Optional<BillboardMediaCountAggregateOutputType> | number
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
    store?: StoreOmit
    billboard?: BillboardOmit
    billboardMedia?: BillboardMediaOmit
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
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    billboards: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    billboards?: boolean | StoreCountOutputTypeCountBillboardsArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountBillboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillboardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: string
    name: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: StoreCountAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    billboards?: boolean | Store$billboardsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["store"]>

  export type StoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    billboards?: boolean | Store$billboardsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      billboards: Prisma.$BillboardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {StoreCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {StoreUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.updateManyAndReturn({
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
    updateManyAndReturn<T extends StoreUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
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
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    billboards<T extends Store$billboardsArgs<ExtArgs> = {}>(args?: Subset<T, Store$billboardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'String'>
    readonly name: FieldRef<"Store", 'String'>
    readonly userId: FieldRef<"Store", 'String'>
    readonly createdAt: FieldRef<"Store", 'DateTime'>
    readonly updatedAt: FieldRef<"Store", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store createManyAndReturn
   */
  export type StoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store updateManyAndReturn
   */
  export type StoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store.billboards
   */
  export type Store$billboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billboard
     */
    omit?: BillboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardInclude<ExtArgs> | null
    where?: BillboardWhereInput
    orderBy?: BillboardOrderByWithRelationInput | BillboardOrderByWithRelationInput[]
    cursor?: BillboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillboardScalarFieldEnum | BillboardScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model Billboard
   */

  export type AggregateBillboard = {
    _count: BillboardCountAggregateOutputType | null
    _min: BillboardMinAggregateOutputType | null
    _max: BillboardMaxAggregateOutputType | null
  }

  export type BillboardMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    label: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillboardMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    label: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillboardCountAggregateOutputType = {
    id: number
    storeId: number
    label: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillboardMinAggregateInputType = {
    id?: true
    storeId?: true
    label?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillboardMaxAggregateInputType = {
    id?: true
    storeId?: true
    label?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillboardCountAggregateInputType = {
    id?: true
    storeId?: true
    label?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Billboard to aggregate.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: BillboardOrderByWithRelationInput | BillboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Billboards
    **/
    _count?: true | BillboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillboardMaxAggregateInputType
  }

  export type GetBillboardAggregateType<T extends BillboardAggregateArgs> = {
        [P in keyof T & keyof AggregateBillboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillboard[P]>
      : GetScalarType<T[P], AggregateBillboard[P]>
  }




  export type BillboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillboardWhereInput
    orderBy?: BillboardOrderByWithAggregationInput | BillboardOrderByWithAggregationInput[]
    by: BillboardScalarFieldEnum[] | BillboardScalarFieldEnum
    having?: BillboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillboardCountAggregateInputType | true
    _min?: BillboardMinAggregateInputType
    _max?: BillboardMaxAggregateInputType
  }

  export type BillboardGroupByOutputType = {
    id: string
    storeId: string
    label: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: BillboardCountAggregateOutputType | null
    _min: BillboardMinAggregateOutputType | null
    _max: BillboardMaxAggregateOutputType | null
  }

  type GetBillboardGroupByPayload<T extends BillboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillboardGroupByOutputType[P]>
            : GetScalarType<T[P], BillboardGroupByOutputType[P]>
        }
      >
    >


  export type BillboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    label?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    media?: boolean | Billboard$mediaArgs<ExtArgs>
    Store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billboard"]>

  export type BillboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    label?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billboard"]>

  export type BillboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    label?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billboard"]>

  export type BillboardSelectScalar = {
    id?: boolean
    storeId?: boolean
    label?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BillboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "label" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["billboard"]>
  export type BillboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | Billboard$mediaArgs<ExtArgs>
    Store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type BillboardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type BillboardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $BillboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Billboard"
    objects: {
      media: Prisma.$BillboardMediaPayload<ExtArgs> | null
      Store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      label: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["billboard"]>
    composites: {}
  }

  type BillboardGetPayload<S extends boolean | null | undefined | BillboardDefaultArgs> = $Result.GetResult<Prisma.$BillboardPayload, S>

  type BillboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillboardCountAggregateInputType | true
    }

  export interface BillboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Billboard'], meta: { name: 'Billboard' } }
    /**
     * Find zero or one Billboard that matches the filter.
     * @param {BillboardFindUniqueArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillboardFindUniqueArgs>(args: SelectSubset<T, BillboardFindUniqueArgs<ExtArgs>>): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Billboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillboardFindUniqueOrThrowArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillboardFindUniqueOrThrowArgs>(args: SelectSubset<T, BillboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Billboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardFindFirstArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillboardFindFirstArgs>(args?: SelectSubset<T, BillboardFindFirstArgs<ExtArgs>>): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Billboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardFindFirstOrThrowArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillboardFindFirstOrThrowArgs>(args?: SelectSubset<T, BillboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Billboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Billboards
     * const billboards = await prisma.billboard.findMany()
     * 
     * // Get first 10 Billboards
     * const billboards = await prisma.billboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billboardWithIdOnly = await prisma.billboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillboardFindManyArgs>(args?: SelectSubset<T, BillboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Billboard.
     * @param {BillboardCreateArgs} args - Arguments to create a Billboard.
     * @example
     * // Create one Billboard
     * const Billboard = await prisma.billboard.create({
     *   data: {
     *     // ... data to create a Billboard
     *   }
     * })
     * 
     */
    create<T extends BillboardCreateArgs>(args: SelectSubset<T, BillboardCreateArgs<ExtArgs>>): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Billboards.
     * @param {BillboardCreateManyArgs} args - Arguments to create many Billboards.
     * @example
     * // Create many Billboards
     * const billboard = await prisma.billboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillboardCreateManyArgs>(args?: SelectSubset<T, BillboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Billboards and returns the data saved in the database.
     * @param {BillboardCreateManyAndReturnArgs} args - Arguments to create many Billboards.
     * @example
     * // Create many Billboards
     * const billboard = await prisma.billboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Billboards and only return the `id`
     * const billboardWithIdOnly = await prisma.billboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillboardCreateManyAndReturnArgs>(args?: SelectSubset<T, BillboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Billboard.
     * @param {BillboardDeleteArgs} args - Arguments to delete one Billboard.
     * @example
     * // Delete one Billboard
     * const Billboard = await prisma.billboard.delete({
     *   where: {
     *     // ... filter to delete one Billboard
     *   }
     * })
     * 
     */
    delete<T extends BillboardDeleteArgs>(args: SelectSubset<T, BillboardDeleteArgs<ExtArgs>>): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Billboard.
     * @param {BillboardUpdateArgs} args - Arguments to update one Billboard.
     * @example
     * // Update one Billboard
     * const billboard = await prisma.billboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillboardUpdateArgs>(args: SelectSubset<T, BillboardUpdateArgs<ExtArgs>>): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Billboards.
     * @param {BillboardDeleteManyArgs} args - Arguments to filter Billboards to delete.
     * @example
     * // Delete a few Billboards
     * const { count } = await prisma.billboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillboardDeleteManyArgs>(args?: SelectSubset<T, BillboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Billboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Billboards
     * const billboard = await prisma.billboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillboardUpdateManyArgs>(args: SelectSubset<T, BillboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Billboards and returns the data updated in the database.
     * @param {BillboardUpdateManyAndReturnArgs} args - Arguments to update many Billboards.
     * @example
     * // Update many Billboards
     * const billboard = await prisma.billboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Billboards and only return the `id`
     * const billboardWithIdOnly = await prisma.billboard.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillboardUpdateManyAndReturnArgs>(args: SelectSubset<T, BillboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Billboard.
     * @param {BillboardUpsertArgs} args - Arguments to update or create a Billboard.
     * @example
     * // Update or create a Billboard
     * const billboard = await prisma.billboard.upsert({
     *   create: {
     *     // ... data to create a Billboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Billboard we want to update
     *   }
     * })
     */
    upsert<T extends BillboardUpsertArgs>(args: SelectSubset<T, BillboardUpsertArgs<ExtArgs>>): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Billboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardCountArgs} args - Arguments to filter Billboards to count.
     * @example
     * // Count the number of Billboards
     * const count = await prisma.billboard.count({
     *   where: {
     *     // ... the filter for the Billboards we want to count
     *   }
     * })
    **/
    count<T extends BillboardCountArgs>(
      args?: Subset<T, BillboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Billboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillboardAggregateArgs>(args: Subset<T, BillboardAggregateArgs>): Prisma.PrismaPromise<GetBillboardAggregateType<T>>

    /**
     * Group by Billboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardGroupByArgs} args - Group by arguments.
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
      T extends BillboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillboardGroupByArgs['orderBy'] }
        : { orderBy?: BillboardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Billboard model
   */
  readonly fields: BillboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Billboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends Billboard$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Billboard$mediaArgs<ExtArgs>>): Prisma__BillboardMediaClient<$Result.GetResult<Prisma.$BillboardMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Billboard model
   */
  interface BillboardFieldRefs {
    readonly id: FieldRef<"Billboard", 'String'>
    readonly storeId: FieldRef<"Billboard", 'String'>
    readonly label: FieldRef<"Billboard", 'String'>
    readonly description: FieldRef<"Billboard", 'String'>
    readonly createdAt: FieldRef<"Billboard", 'DateTime'>
    readonly updatedAt: FieldRef<"Billboard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Billboard findUnique
   */
  export type BillboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billboard
     */
    omit?: BillboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where: BillboardWhereUniqueInput
  }

  /**
   * Billboard findUniqueOrThrow
   */
  export type BillboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billboard
     */
    omit?: BillboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where: BillboardWhereUniqueInput
  }

  /**
   * Billboard findFirst
   */
  export type BillboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billboard
     */
    omit?: BillboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: BillboardOrderByWithRelationInput | BillboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billboards.
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billboards.
     */
    distinct?: BillboardScalarFieldEnum | BillboardScalarFieldEnum[]
  }

  /**
   * Billboard findFirstOrThrow
   */
  export type BillboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billboard
     */
    omit?: BillboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: BillboardOrderByWithRelationInput | BillboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billboards.
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billboards.
     */
    distinct?: BillboardScalarFieldEnum | BillboardScalarFieldEnum[]
  }

  /**
   * Billboard findMany
   */
  export type BillboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billboard
     */
    omit?: BillboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboards to fetch.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: BillboardOrderByWithRelationInput | BillboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Billboards.
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    distinct?: BillboardScalarFieldEnum | BillboardScalarFieldEnum[]
  }

  /**
   * Billboard create
   */
  export type BillboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billboard
     */
    omit?: BillboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * The data needed to create a Billboard.
     */
    data: XOR<BillboardCreateInput, BillboardUncheckedCreateInput>
  }

  /**
   * Billboard createMany
   */
  export type BillboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Billboards.
     */
    data: BillboardCreateManyInput | BillboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Billboard createManyAndReturn
   */
  export type BillboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Billboard
     */
    omit?: BillboardOmit<ExtArgs> | null
    /**
     * The data used to create many Billboards.
     */
    data: BillboardCreateManyInput | BillboardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Billboard update
   */
  export type BillboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billboard
     */
    omit?: BillboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * The data needed to update a Billboard.
     */
    data: XOR<BillboardUpdateInput, BillboardUncheckedUpdateInput>
    /**
     * Choose, which Billboard to update.
     */
    where: BillboardWhereUniqueInput
  }

  /**
   * Billboard updateMany
   */
  export type BillboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Billboards.
     */
    data: XOR<BillboardUpdateManyMutationInput, BillboardUncheckedUpdateManyInput>
    /**
     * Filter which Billboards to update
     */
    where?: BillboardWhereInput
    /**
     * Limit how many Billboards to update.
     */
    limit?: number
  }

  /**
   * Billboard updateManyAndReturn
   */
  export type BillboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Billboard
     */
    omit?: BillboardOmit<ExtArgs> | null
    /**
     * The data used to update Billboards.
     */
    data: XOR<BillboardUpdateManyMutationInput, BillboardUncheckedUpdateManyInput>
    /**
     * Filter which Billboards to update
     */
    where?: BillboardWhereInput
    /**
     * Limit how many Billboards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Billboard upsert
   */
  export type BillboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billboard
     */
    omit?: BillboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * The filter to search for the Billboard to update in case it exists.
     */
    where: BillboardWhereUniqueInput
    /**
     * In case the Billboard found by the `where` argument doesn't exist, create a new Billboard with this data.
     */
    create: XOR<BillboardCreateInput, BillboardUncheckedCreateInput>
    /**
     * In case the Billboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillboardUpdateInput, BillboardUncheckedUpdateInput>
  }

  /**
   * Billboard delete
   */
  export type BillboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billboard
     */
    omit?: BillboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter which Billboard to delete.
     */
    where: BillboardWhereUniqueInput
  }

  /**
   * Billboard deleteMany
   */
  export type BillboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Billboards to delete
     */
    where?: BillboardWhereInput
    /**
     * Limit how many Billboards to delete.
     */
    limit?: number
  }

  /**
   * Billboard.media
   */
  export type Billboard$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillboardMedia
     */
    select?: BillboardMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillboardMedia
     */
    omit?: BillboardMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardMediaInclude<ExtArgs> | null
    where?: BillboardMediaWhereInput
  }

  /**
   * Billboard without action
   */
  export type BillboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billboard
     */
    omit?: BillboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardInclude<ExtArgs> | null
  }


  /**
   * Model BillboardMedia
   */

  export type AggregateBillboardMedia = {
    _count: BillboardMediaCountAggregateOutputType | null
    _avg: BillboardMediaAvgAggregateOutputType | null
    _sum: BillboardMediaSumAggregateOutputType | null
    _min: BillboardMediaMinAggregateOutputType | null
    _max: BillboardMediaMaxAggregateOutputType | null
  }

  export type BillboardMediaAvgAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type BillboardMediaSumAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type BillboardMediaMinAggregateOutputType = {
    id: string | null
    public_id: string | null
    resource: $Enums.ResourceType | null
    secure_url: string | null
    width: number | null
    height: number | null
    playback_url: string | null
    billboardId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillboardMediaMaxAggregateOutputType = {
    id: string | null
    public_id: string | null
    resource: $Enums.ResourceType | null
    secure_url: string | null
    width: number | null
    height: number | null
    playback_url: string | null
    billboardId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillboardMediaCountAggregateOutputType = {
    id: number
    public_id: number
    resource: number
    secure_url: number
    width: number
    height: number
    playback_url: number
    billboardId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillboardMediaAvgAggregateInputType = {
    width?: true
    height?: true
  }

  export type BillboardMediaSumAggregateInputType = {
    width?: true
    height?: true
  }

  export type BillboardMediaMinAggregateInputType = {
    id?: true
    public_id?: true
    resource?: true
    secure_url?: true
    width?: true
    height?: true
    playback_url?: true
    billboardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillboardMediaMaxAggregateInputType = {
    id?: true
    public_id?: true
    resource?: true
    secure_url?: true
    width?: true
    height?: true
    playback_url?: true
    billboardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillboardMediaCountAggregateInputType = {
    id?: true
    public_id?: true
    resource?: true
    secure_url?: true
    width?: true
    height?: true
    playback_url?: true
    billboardId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillboardMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillboardMedia to aggregate.
     */
    where?: BillboardMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillboardMedias to fetch.
     */
    orderBy?: BillboardMediaOrderByWithRelationInput | BillboardMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillboardMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillboardMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillboardMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillboardMedias
    **/
    _count?: true | BillboardMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillboardMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillboardMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillboardMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillboardMediaMaxAggregateInputType
  }

  export type GetBillboardMediaAggregateType<T extends BillboardMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateBillboardMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillboardMedia[P]>
      : GetScalarType<T[P], AggregateBillboardMedia[P]>
  }




  export type BillboardMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillboardMediaWhereInput
    orderBy?: BillboardMediaOrderByWithAggregationInput | BillboardMediaOrderByWithAggregationInput[]
    by: BillboardMediaScalarFieldEnum[] | BillboardMediaScalarFieldEnum
    having?: BillboardMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillboardMediaCountAggregateInputType | true
    _avg?: BillboardMediaAvgAggregateInputType
    _sum?: BillboardMediaSumAggregateInputType
    _min?: BillboardMediaMinAggregateInputType
    _max?: BillboardMediaMaxAggregateInputType
  }

  export type BillboardMediaGroupByOutputType = {
    id: string
    public_id: string
    resource: $Enums.ResourceType
    secure_url: string
    width: number
    height: number
    playback_url: string | null
    billboardId: string
    createdAt: Date
    updatedAt: Date
    _count: BillboardMediaCountAggregateOutputType | null
    _avg: BillboardMediaAvgAggregateOutputType | null
    _sum: BillboardMediaSumAggregateOutputType | null
    _min: BillboardMediaMinAggregateOutputType | null
    _max: BillboardMediaMaxAggregateOutputType | null
  }

  type GetBillboardMediaGroupByPayload<T extends BillboardMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillboardMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillboardMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillboardMediaGroupByOutputType[P]>
            : GetScalarType<T[P], BillboardMediaGroupByOutputType[P]>
        }
      >
    >


  export type BillboardMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    public_id?: boolean
    resource?: boolean
    secure_url?: boolean
    width?: boolean
    height?: boolean
    playback_url?: boolean
    billboardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Billboard?: boolean | BillboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billboardMedia"]>

  export type BillboardMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    public_id?: boolean
    resource?: boolean
    secure_url?: boolean
    width?: boolean
    height?: boolean
    playback_url?: boolean
    billboardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Billboard?: boolean | BillboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billboardMedia"]>

  export type BillboardMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    public_id?: boolean
    resource?: boolean
    secure_url?: boolean
    width?: boolean
    height?: boolean
    playback_url?: boolean
    billboardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Billboard?: boolean | BillboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billboardMedia"]>

  export type BillboardMediaSelectScalar = {
    id?: boolean
    public_id?: boolean
    resource?: boolean
    secure_url?: boolean
    width?: boolean
    height?: boolean
    playback_url?: boolean
    billboardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BillboardMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "public_id" | "resource" | "secure_url" | "width" | "height" | "playback_url" | "billboardId" | "createdAt" | "updatedAt", ExtArgs["result"]["billboardMedia"]>
  export type BillboardMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Billboard?: boolean | BillboardDefaultArgs<ExtArgs>
  }
  export type BillboardMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Billboard?: boolean | BillboardDefaultArgs<ExtArgs>
  }
  export type BillboardMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Billboard?: boolean | BillboardDefaultArgs<ExtArgs>
  }

  export type $BillboardMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillboardMedia"
    objects: {
      Billboard: Prisma.$BillboardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      public_id: string
      resource: $Enums.ResourceType
      secure_url: string
      width: number
      height: number
      playback_url: string | null
      billboardId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["billboardMedia"]>
    composites: {}
  }

  type BillboardMediaGetPayload<S extends boolean | null | undefined | BillboardMediaDefaultArgs> = $Result.GetResult<Prisma.$BillboardMediaPayload, S>

  type BillboardMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillboardMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillboardMediaCountAggregateInputType | true
    }

  export interface BillboardMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillboardMedia'], meta: { name: 'BillboardMedia' } }
    /**
     * Find zero or one BillboardMedia that matches the filter.
     * @param {BillboardMediaFindUniqueArgs} args - Arguments to find a BillboardMedia
     * @example
     * // Get one BillboardMedia
     * const billboardMedia = await prisma.billboardMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillboardMediaFindUniqueArgs>(args: SelectSubset<T, BillboardMediaFindUniqueArgs<ExtArgs>>): Prisma__BillboardMediaClient<$Result.GetResult<Prisma.$BillboardMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BillboardMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillboardMediaFindUniqueOrThrowArgs} args - Arguments to find a BillboardMedia
     * @example
     * // Get one BillboardMedia
     * const billboardMedia = await prisma.billboardMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillboardMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, BillboardMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillboardMediaClient<$Result.GetResult<Prisma.$BillboardMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillboardMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardMediaFindFirstArgs} args - Arguments to find a BillboardMedia
     * @example
     * // Get one BillboardMedia
     * const billboardMedia = await prisma.billboardMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillboardMediaFindFirstArgs>(args?: SelectSubset<T, BillboardMediaFindFirstArgs<ExtArgs>>): Prisma__BillboardMediaClient<$Result.GetResult<Prisma.$BillboardMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillboardMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardMediaFindFirstOrThrowArgs} args - Arguments to find a BillboardMedia
     * @example
     * // Get one BillboardMedia
     * const billboardMedia = await prisma.billboardMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillboardMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, BillboardMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillboardMediaClient<$Result.GetResult<Prisma.$BillboardMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BillboardMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillboardMedias
     * const billboardMedias = await prisma.billboardMedia.findMany()
     * 
     * // Get first 10 BillboardMedias
     * const billboardMedias = await prisma.billboardMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billboardMediaWithIdOnly = await prisma.billboardMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillboardMediaFindManyArgs>(args?: SelectSubset<T, BillboardMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillboardMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BillboardMedia.
     * @param {BillboardMediaCreateArgs} args - Arguments to create a BillboardMedia.
     * @example
     * // Create one BillboardMedia
     * const BillboardMedia = await prisma.billboardMedia.create({
     *   data: {
     *     // ... data to create a BillboardMedia
     *   }
     * })
     * 
     */
    create<T extends BillboardMediaCreateArgs>(args: SelectSubset<T, BillboardMediaCreateArgs<ExtArgs>>): Prisma__BillboardMediaClient<$Result.GetResult<Prisma.$BillboardMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BillboardMedias.
     * @param {BillboardMediaCreateManyArgs} args - Arguments to create many BillboardMedias.
     * @example
     * // Create many BillboardMedias
     * const billboardMedia = await prisma.billboardMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillboardMediaCreateManyArgs>(args?: SelectSubset<T, BillboardMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillboardMedias and returns the data saved in the database.
     * @param {BillboardMediaCreateManyAndReturnArgs} args - Arguments to create many BillboardMedias.
     * @example
     * // Create many BillboardMedias
     * const billboardMedia = await prisma.billboardMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillboardMedias and only return the `id`
     * const billboardMediaWithIdOnly = await prisma.billboardMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillboardMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, BillboardMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillboardMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BillboardMedia.
     * @param {BillboardMediaDeleteArgs} args - Arguments to delete one BillboardMedia.
     * @example
     * // Delete one BillboardMedia
     * const BillboardMedia = await prisma.billboardMedia.delete({
     *   where: {
     *     // ... filter to delete one BillboardMedia
     *   }
     * })
     * 
     */
    delete<T extends BillboardMediaDeleteArgs>(args: SelectSubset<T, BillboardMediaDeleteArgs<ExtArgs>>): Prisma__BillboardMediaClient<$Result.GetResult<Prisma.$BillboardMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BillboardMedia.
     * @param {BillboardMediaUpdateArgs} args - Arguments to update one BillboardMedia.
     * @example
     * // Update one BillboardMedia
     * const billboardMedia = await prisma.billboardMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillboardMediaUpdateArgs>(args: SelectSubset<T, BillboardMediaUpdateArgs<ExtArgs>>): Prisma__BillboardMediaClient<$Result.GetResult<Prisma.$BillboardMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BillboardMedias.
     * @param {BillboardMediaDeleteManyArgs} args - Arguments to filter BillboardMedias to delete.
     * @example
     * // Delete a few BillboardMedias
     * const { count } = await prisma.billboardMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillboardMediaDeleteManyArgs>(args?: SelectSubset<T, BillboardMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillboardMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillboardMedias
     * const billboardMedia = await prisma.billboardMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillboardMediaUpdateManyArgs>(args: SelectSubset<T, BillboardMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillboardMedias and returns the data updated in the database.
     * @param {BillboardMediaUpdateManyAndReturnArgs} args - Arguments to update many BillboardMedias.
     * @example
     * // Update many BillboardMedias
     * const billboardMedia = await prisma.billboardMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BillboardMedias and only return the `id`
     * const billboardMediaWithIdOnly = await prisma.billboardMedia.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillboardMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, BillboardMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillboardMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BillboardMedia.
     * @param {BillboardMediaUpsertArgs} args - Arguments to update or create a BillboardMedia.
     * @example
     * // Update or create a BillboardMedia
     * const billboardMedia = await prisma.billboardMedia.upsert({
     *   create: {
     *     // ... data to create a BillboardMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillboardMedia we want to update
     *   }
     * })
     */
    upsert<T extends BillboardMediaUpsertArgs>(args: SelectSubset<T, BillboardMediaUpsertArgs<ExtArgs>>): Prisma__BillboardMediaClient<$Result.GetResult<Prisma.$BillboardMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BillboardMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardMediaCountArgs} args - Arguments to filter BillboardMedias to count.
     * @example
     * // Count the number of BillboardMedias
     * const count = await prisma.billboardMedia.count({
     *   where: {
     *     // ... the filter for the BillboardMedias we want to count
     *   }
     * })
    **/
    count<T extends BillboardMediaCountArgs>(
      args?: Subset<T, BillboardMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillboardMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillboardMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillboardMediaAggregateArgs>(args: Subset<T, BillboardMediaAggregateArgs>): Prisma.PrismaPromise<GetBillboardMediaAggregateType<T>>

    /**
     * Group by BillboardMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardMediaGroupByArgs} args - Group by arguments.
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
      T extends BillboardMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillboardMediaGroupByArgs['orderBy'] }
        : { orderBy?: BillboardMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillboardMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillboardMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillboardMedia model
   */
  readonly fields: BillboardMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillboardMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillboardMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Billboard<T extends BillboardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillboardDefaultArgs<ExtArgs>>): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BillboardMedia model
   */
  interface BillboardMediaFieldRefs {
    readonly id: FieldRef<"BillboardMedia", 'String'>
    readonly public_id: FieldRef<"BillboardMedia", 'String'>
    readonly resource: FieldRef<"BillboardMedia", 'ResourceType'>
    readonly secure_url: FieldRef<"BillboardMedia", 'String'>
    readonly width: FieldRef<"BillboardMedia", 'Int'>
    readonly height: FieldRef<"BillboardMedia", 'Int'>
    readonly playback_url: FieldRef<"BillboardMedia", 'String'>
    readonly billboardId: FieldRef<"BillboardMedia", 'String'>
    readonly createdAt: FieldRef<"BillboardMedia", 'DateTime'>
    readonly updatedAt: FieldRef<"BillboardMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BillboardMedia findUnique
   */
  export type BillboardMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillboardMedia
     */
    select?: BillboardMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillboardMedia
     */
    omit?: BillboardMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardMediaInclude<ExtArgs> | null
    /**
     * Filter, which BillboardMedia to fetch.
     */
    where: BillboardMediaWhereUniqueInput
  }

  /**
   * BillboardMedia findUniqueOrThrow
   */
  export type BillboardMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillboardMedia
     */
    select?: BillboardMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillboardMedia
     */
    omit?: BillboardMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardMediaInclude<ExtArgs> | null
    /**
     * Filter, which BillboardMedia to fetch.
     */
    where: BillboardMediaWhereUniqueInput
  }

  /**
   * BillboardMedia findFirst
   */
  export type BillboardMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillboardMedia
     */
    select?: BillboardMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillboardMedia
     */
    omit?: BillboardMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardMediaInclude<ExtArgs> | null
    /**
     * Filter, which BillboardMedia to fetch.
     */
    where?: BillboardMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillboardMedias to fetch.
     */
    orderBy?: BillboardMediaOrderByWithRelationInput | BillboardMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillboardMedias.
     */
    cursor?: BillboardMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillboardMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillboardMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillboardMedias.
     */
    distinct?: BillboardMediaScalarFieldEnum | BillboardMediaScalarFieldEnum[]
  }

  /**
   * BillboardMedia findFirstOrThrow
   */
  export type BillboardMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillboardMedia
     */
    select?: BillboardMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillboardMedia
     */
    omit?: BillboardMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardMediaInclude<ExtArgs> | null
    /**
     * Filter, which BillboardMedia to fetch.
     */
    where?: BillboardMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillboardMedias to fetch.
     */
    orderBy?: BillboardMediaOrderByWithRelationInput | BillboardMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillboardMedias.
     */
    cursor?: BillboardMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillboardMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillboardMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillboardMedias.
     */
    distinct?: BillboardMediaScalarFieldEnum | BillboardMediaScalarFieldEnum[]
  }

  /**
   * BillboardMedia findMany
   */
  export type BillboardMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillboardMedia
     */
    select?: BillboardMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillboardMedia
     */
    omit?: BillboardMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardMediaInclude<ExtArgs> | null
    /**
     * Filter, which BillboardMedias to fetch.
     */
    where?: BillboardMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillboardMedias to fetch.
     */
    orderBy?: BillboardMediaOrderByWithRelationInput | BillboardMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillboardMedias.
     */
    cursor?: BillboardMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillboardMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillboardMedias.
     */
    skip?: number
    distinct?: BillboardMediaScalarFieldEnum | BillboardMediaScalarFieldEnum[]
  }

  /**
   * BillboardMedia create
   */
  export type BillboardMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillboardMedia
     */
    select?: BillboardMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillboardMedia
     */
    omit?: BillboardMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a BillboardMedia.
     */
    data: XOR<BillboardMediaCreateInput, BillboardMediaUncheckedCreateInput>
  }

  /**
   * BillboardMedia createMany
   */
  export type BillboardMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillboardMedias.
     */
    data: BillboardMediaCreateManyInput | BillboardMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillboardMedia createManyAndReturn
   */
  export type BillboardMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillboardMedia
     */
    select?: BillboardMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillboardMedia
     */
    omit?: BillboardMediaOmit<ExtArgs> | null
    /**
     * The data used to create many BillboardMedias.
     */
    data: BillboardMediaCreateManyInput | BillboardMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillboardMedia update
   */
  export type BillboardMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillboardMedia
     */
    select?: BillboardMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillboardMedia
     */
    omit?: BillboardMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a BillboardMedia.
     */
    data: XOR<BillboardMediaUpdateInput, BillboardMediaUncheckedUpdateInput>
    /**
     * Choose, which BillboardMedia to update.
     */
    where: BillboardMediaWhereUniqueInput
  }

  /**
   * BillboardMedia updateMany
   */
  export type BillboardMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillboardMedias.
     */
    data: XOR<BillboardMediaUpdateManyMutationInput, BillboardMediaUncheckedUpdateManyInput>
    /**
     * Filter which BillboardMedias to update
     */
    where?: BillboardMediaWhereInput
    /**
     * Limit how many BillboardMedias to update.
     */
    limit?: number
  }

  /**
   * BillboardMedia updateManyAndReturn
   */
  export type BillboardMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillboardMedia
     */
    select?: BillboardMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillboardMedia
     */
    omit?: BillboardMediaOmit<ExtArgs> | null
    /**
     * The data used to update BillboardMedias.
     */
    data: XOR<BillboardMediaUpdateManyMutationInput, BillboardMediaUncheckedUpdateManyInput>
    /**
     * Filter which BillboardMedias to update
     */
    where?: BillboardMediaWhereInput
    /**
     * Limit how many BillboardMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillboardMedia upsert
   */
  export type BillboardMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillboardMedia
     */
    select?: BillboardMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillboardMedia
     */
    omit?: BillboardMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the BillboardMedia to update in case it exists.
     */
    where: BillboardMediaWhereUniqueInput
    /**
     * In case the BillboardMedia found by the `where` argument doesn't exist, create a new BillboardMedia with this data.
     */
    create: XOR<BillboardMediaCreateInput, BillboardMediaUncheckedCreateInput>
    /**
     * In case the BillboardMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillboardMediaUpdateInput, BillboardMediaUncheckedUpdateInput>
  }

  /**
   * BillboardMedia delete
   */
  export type BillboardMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillboardMedia
     */
    select?: BillboardMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillboardMedia
     */
    omit?: BillboardMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardMediaInclude<ExtArgs> | null
    /**
     * Filter which BillboardMedia to delete.
     */
    where: BillboardMediaWhereUniqueInput
  }

  /**
   * BillboardMedia deleteMany
   */
  export type BillboardMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillboardMedias to delete
     */
    where?: BillboardMediaWhereInput
    /**
     * Limit how many BillboardMedias to delete.
     */
    limit?: number
  }

  /**
   * BillboardMedia without action
   */
  export type BillboardMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillboardMedia
     */
    select?: BillboardMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillboardMedia
     */
    omit?: BillboardMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillboardMediaInclude<ExtArgs> | null
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


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const BillboardScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    label: 'label',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillboardScalarFieldEnum = (typeof BillboardScalarFieldEnum)[keyof typeof BillboardScalarFieldEnum]


  export const BillboardMediaScalarFieldEnum: {
    id: 'id',
    public_id: 'public_id',
    resource: 'resource',
    secure_url: 'secure_url',
    width: 'width',
    height: 'height',
    playback_url: 'playback_url',
    billboardId: 'billboardId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillboardMediaScalarFieldEnum = (typeof BillboardMediaScalarFieldEnum)[keyof typeof BillboardMediaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ResourceType'
   */
  export type EnumResourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceType'>
    


  /**
   * Reference to a field of type 'ResourceType[]'
   */
  export type ListEnumResourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceType[]'>
    


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
   * Deep Input Types
   */


  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: StringFilter<"Store"> | string
    name?: StringFilter<"Store"> | string
    userId?: StringFilter<"Store"> | string
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    billboards?: BillboardListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    billboards?: BillboardOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_userId?: StoreNameUserIdCompoundUniqueInput
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    userId?: StringFilter<"Store"> | string
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    billboards?: BillboardListRelationFilter
  }, "id" | "name_userId">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Store"> | string
    name?: StringWithAggregatesFilter<"Store"> | string
    userId?: StringWithAggregatesFilter<"Store"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
  }

  export type BillboardWhereInput = {
    AND?: BillboardWhereInput | BillboardWhereInput[]
    OR?: BillboardWhereInput[]
    NOT?: BillboardWhereInput | BillboardWhereInput[]
    id?: StringFilter<"Billboard"> | string
    storeId?: StringFilter<"Billboard"> | string
    label?: StringFilter<"Billboard"> | string
    description?: StringFilter<"Billboard"> | string
    createdAt?: DateTimeFilter<"Billboard"> | Date | string
    updatedAt?: DateTimeFilter<"Billboard"> | Date | string
    media?: XOR<BillboardMediaNullableScalarRelationFilter, BillboardMediaWhereInput> | null
    Store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }

  export type BillboardOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    media?: BillboardMediaOrderByWithRelationInput
    Store?: StoreOrderByWithRelationInput
  }

  export type BillboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    storeId_label?: BillboardStoreIdLabelCompoundUniqueInput
    AND?: BillboardWhereInput | BillboardWhereInput[]
    OR?: BillboardWhereInput[]
    NOT?: BillboardWhereInput | BillboardWhereInput[]
    storeId?: StringFilter<"Billboard"> | string
    label?: StringFilter<"Billboard"> | string
    description?: StringFilter<"Billboard"> | string
    createdAt?: DateTimeFilter<"Billboard"> | Date | string
    updatedAt?: DateTimeFilter<"Billboard"> | Date | string
    media?: XOR<BillboardMediaNullableScalarRelationFilter, BillboardMediaWhereInput> | null
    Store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }, "id" | "storeId_label">

  export type BillboardOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillboardCountOrderByAggregateInput
    _max?: BillboardMaxOrderByAggregateInput
    _min?: BillboardMinOrderByAggregateInput
  }

  export type BillboardScalarWhereWithAggregatesInput = {
    AND?: BillboardScalarWhereWithAggregatesInput | BillboardScalarWhereWithAggregatesInput[]
    OR?: BillboardScalarWhereWithAggregatesInput[]
    NOT?: BillboardScalarWhereWithAggregatesInput | BillboardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Billboard"> | string
    storeId?: StringWithAggregatesFilter<"Billboard"> | string
    label?: StringWithAggregatesFilter<"Billboard"> | string
    description?: StringWithAggregatesFilter<"Billboard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Billboard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Billboard"> | Date | string
  }

  export type BillboardMediaWhereInput = {
    AND?: BillboardMediaWhereInput | BillboardMediaWhereInput[]
    OR?: BillboardMediaWhereInput[]
    NOT?: BillboardMediaWhereInput | BillboardMediaWhereInput[]
    id?: StringFilter<"BillboardMedia"> | string
    public_id?: StringFilter<"BillboardMedia"> | string
    resource?: EnumResourceTypeFilter<"BillboardMedia"> | $Enums.ResourceType
    secure_url?: StringFilter<"BillboardMedia"> | string
    width?: IntFilter<"BillboardMedia"> | number
    height?: IntFilter<"BillboardMedia"> | number
    playback_url?: StringNullableFilter<"BillboardMedia"> | string | null
    billboardId?: StringFilter<"BillboardMedia"> | string
    createdAt?: DateTimeFilter<"BillboardMedia"> | Date | string
    updatedAt?: DateTimeFilter<"BillboardMedia"> | Date | string
    Billboard?: XOR<BillboardScalarRelationFilter, BillboardWhereInput>
  }

  export type BillboardMediaOrderByWithRelationInput = {
    id?: SortOrder
    public_id?: SortOrder
    resource?: SortOrder
    secure_url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    playback_url?: SortOrderInput | SortOrder
    billboardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Billboard?: BillboardOrderByWithRelationInput
  }

  export type BillboardMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    billboardId?: string
    AND?: BillboardMediaWhereInput | BillboardMediaWhereInput[]
    OR?: BillboardMediaWhereInput[]
    NOT?: BillboardMediaWhereInput | BillboardMediaWhereInput[]
    public_id?: StringFilter<"BillboardMedia"> | string
    resource?: EnumResourceTypeFilter<"BillboardMedia"> | $Enums.ResourceType
    secure_url?: StringFilter<"BillboardMedia"> | string
    width?: IntFilter<"BillboardMedia"> | number
    height?: IntFilter<"BillboardMedia"> | number
    playback_url?: StringNullableFilter<"BillboardMedia"> | string | null
    createdAt?: DateTimeFilter<"BillboardMedia"> | Date | string
    updatedAt?: DateTimeFilter<"BillboardMedia"> | Date | string
    Billboard?: XOR<BillboardScalarRelationFilter, BillboardWhereInput>
  }, "id" | "billboardId">

  export type BillboardMediaOrderByWithAggregationInput = {
    id?: SortOrder
    public_id?: SortOrder
    resource?: SortOrder
    secure_url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    playback_url?: SortOrderInput | SortOrder
    billboardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillboardMediaCountOrderByAggregateInput
    _avg?: BillboardMediaAvgOrderByAggregateInput
    _max?: BillboardMediaMaxOrderByAggregateInput
    _min?: BillboardMediaMinOrderByAggregateInput
    _sum?: BillboardMediaSumOrderByAggregateInput
  }

  export type BillboardMediaScalarWhereWithAggregatesInput = {
    AND?: BillboardMediaScalarWhereWithAggregatesInput | BillboardMediaScalarWhereWithAggregatesInput[]
    OR?: BillboardMediaScalarWhereWithAggregatesInput[]
    NOT?: BillboardMediaScalarWhereWithAggregatesInput | BillboardMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillboardMedia"> | string
    public_id?: StringWithAggregatesFilter<"BillboardMedia"> | string
    resource?: EnumResourceTypeWithAggregatesFilter<"BillboardMedia"> | $Enums.ResourceType
    secure_url?: StringWithAggregatesFilter<"BillboardMedia"> | string
    width?: IntWithAggregatesFilter<"BillboardMedia"> | number
    height?: IntWithAggregatesFilter<"BillboardMedia"> | number
    playback_url?: StringNullableWithAggregatesFilter<"BillboardMedia"> | string | null
    billboardId?: StringWithAggregatesFilter<"BillboardMedia"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BillboardMedia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BillboardMedia"> | Date | string
  }

  export type StoreCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardCreateInput = {
    id?: string
    label: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: BillboardMediaCreateNestedOneWithoutBillboardInput
    Store: StoreCreateNestedOneWithoutBillboardsInput
  }

  export type BillboardUncheckedCreateInput = {
    id?: string
    storeId: string
    label: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: BillboardMediaUncheckedCreateNestedOneWithoutBillboardInput
  }

  export type BillboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: BillboardMediaUpdateOneWithoutBillboardNestedInput
    Store?: StoreUpdateOneRequiredWithoutBillboardsNestedInput
  }

  export type BillboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: BillboardMediaUncheckedUpdateOneWithoutBillboardNestedInput
  }

  export type BillboardCreateManyInput = {
    id?: string
    storeId: string
    label: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardMediaCreateInput = {
    id?: string
    public_id: string
    resource: $Enums.ResourceType
    secure_url: string
    width: number
    height: number
    playback_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Billboard: BillboardCreateNestedOneWithoutMediaInput
  }

  export type BillboardMediaUncheckedCreateInput = {
    id?: string
    public_id: string
    resource: $Enums.ResourceType
    secure_url: string
    width: number
    height: number
    playback_url?: string | null
    billboardId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    secure_url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    playback_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Billboard?: BillboardUpdateOneRequiredWithoutMediaNestedInput
  }

  export type BillboardMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    secure_url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    playback_url?: NullableStringFieldUpdateOperationsInput | string | null
    billboardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardMediaCreateManyInput = {
    id?: string
    public_id: string
    resource: $Enums.ResourceType
    secure_url: string
    width: number
    height: number
    playback_url?: string | null
    billboardId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    secure_url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    playback_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    secure_url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    playback_url?: NullableStringFieldUpdateOperationsInput | string | null
    billboardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BillboardListRelationFilter = {
    every?: BillboardWhereInput
    some?: BillboardWhereInput
    none?: BillboardWhereInput
  }

  export type BillboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreNameUserIdCompoundUniqueInput = {
    name: string
    userId: string
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
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

  export type BillboardMediaNullableScalarRelationFilter = {
    is?: BillboardMediaWhereInput | null
    isNot?: BillboardMediaWhereInput | null
  }

  export type StoreScalarRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type BillboardStoreIdLabelCompoundUniqueInput = {
    storeId: string
    label: string
  }

  export type BillboardCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillboardMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillboardMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumResourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeFilter<$PrismaModel> | $Enums.ResourceType
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

  export type BillboardScalarRelationFilter = {
    is?: BillboardWhereInput
    isNot?: BillboardWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BillboardMediaCountOrderByAggregateInput = {
    id?: SortOrder
    public_id?: SortOrder
    resource?: SortOrder
    secure_url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    playback_url?: SortOrder
    billboardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillboardMediaAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type BillboardMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    public_id?: SortOrder
    resource?: SortOrder
    secure_url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    playback_url?: SortOrder
    billboardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillboardMediaMinOrderByAggregateInput = {
    id?: SortOrder
    public_id?: SortOrder
    resource?: SortOrder
    secure_url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    playback_url?: SortOrder
    billboardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillboardMediaSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type EnumResourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceTypeFilter<$PrismaModel>
    _max?: NestedEnumResourceTypeFilter<$PrismaModel>
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

  export type BillboardCreateNestedManyWithoutStoreInput = {
    create?: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput> | BillboardCreateWithoutStoreInput[] | BillboardUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BillboardCreateOrConnectWithoutStoreInput | BillboardCreateOrConnectWithoutStoreInput[]
    createMany?: BillboardCreateManyStoreInputEnvelope
    connect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
  }

  export type BillboardUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput> | BillboardCreateWithoutStoreInput[] | BillboardUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BillboardCreateOrConnectWithoutStoreInput | BillboardCreateOrConnectWithoutStoreInput[]
    createMany?: BillboardCreateManyStoreInputEnvelope
    connect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BillboardUpdateManyWithoutStoreNestedInput = {
    create?: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput> | BillboardCreateWithoutStoreInput[] | BillboardUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BillboardCreateOrConnectWithoutStoreInput | BillboardCreateOrConnectWithoutStoreInput[]
    upsert?: BillboardUpsertWithWhereUniqueWithoutStoreInput | BillboardUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: BillboardCreateManyStoreInputEnvelope
    set?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    disconnect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    delete?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    connect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    update?: BillboardUpdateWithWhereUniqueWithoutStoreInput | BillboardUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: BillboardUpdateManyWithWhereWithoutStoreInput | BillboardUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: BillboardScalarWhereInput | BillboardScalarWhereInput[]
  }

  export type BillboardUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput> | BillboardCreateWithoutStoreInput[] | BillboardUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BillboardCreateOrConnectWithoutStoreInput | BillboardCreateOrConnectWithoutStoreInput[]
    upsert?: BillboardUpsertWithWhereUniqueWithoutStoreInput | BillboardUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: BillboardCreateManyStoreInputEnvelope
    set?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    disconnect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    delete?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    connect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    update?: BillboardUpdateWithWhereUniqueWithoutStoreInput | BillboardUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: BillboardUpdateManyWithWhereWithoutStoreInput | BillboardUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: BillboardScalarWhereInput | BillboardScalarWhereInput[]
  }

  export type BillboardMediaCreateNestedOneWithoutBillboardInput = {
    create?: XOR<BillboardMediaCreateWithoutBillboardInput, BillboardMediaUncheckedCreateWithoutBillboardInput>
    connectOrCreate?: BillboardMediaCreateOrConnectWithoutBillboardInput
    connect?: BillboardMediaWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutBillboardsInput = {
    create?: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutBillboardsInput
    connect?: StoreWhereUniqueInput
  }

  export type BillboardMediaUncheckedCreateNestedOneWithoutBillboardInput = {
    create?: XOR<BillboardMediaCreateWithoutBillboardInput, BillboardMediaUncheckedCreateWithoutBillboardInput>
    connectOrCreate?: BillboardMediaCreateOrConnectWithoutBillboardInput
    connect?: BillboardMediaWhereUniqueInput
  }

  export type BillboardMediaUpdateOneWithoutBillboardNestedInput = {
    create?: XOR<BillboardMediaCreateWithoutBillboardInput, BillboardMediaUncheckedCreateWithoutBillboardInput>
    connectOrCreate?: BillboardMediaCreateOrConnectWithoutBillboardInput
    upsert?: BillboardMediaUpsertWithoutBillboardInput
    disconnect?: BillboardMediaWhereInput | boolean
    delete?: BillboardMediaWhereInput | boolean
    connect?: BillboardMediaWhereUniqueInput
    update?: XOR<XOR<BillboardMediaUpdateToOneWithWhereWithoutBillboardInput, BillboardMediaUpdateWithoutBillboardInput>, BillboardMediaUncheckedUpdateWithoutBillboardInput>
  }

  export type StoreUpdateOneRequiredWithoutBillboardsNestedInput = {
    create?: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutBillboardsInput
    upsert?: StoreUpsertWithoutBillboardsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutBillboardsInput, StoreUpdateWithoutBillboardsInput>, StoreUncheckedUpdateWithoutBillboardsInput>
  }

  export type BillboardMediaUncheckedUpdateOneWithoutBillboardNestedInput = {
    create?: XOR<BillboardMediaCreateWithoutBillboardInput, BillboardMediaUncheckedCreateWithoutBillboardInput>
    connectOrCreate?: BillboardMediaCreateOrConnectWithoutBillboardInput
    upsert?: BillboardMediaUpsertWithoutBillboardInput
    disconnect?: BillboardMediaWhereInput | boolean
    delete?: BillboardMediaWhereInput | boolean
    connect?: BillboardMediaWhereUniqueInput
    update?: XOR<XOR<BillboardMediaUpdateToOneWithWhereWithoutBillboardInput, BillboardMediaUpdateWithoutBillboardInput>, BillboardMediaUncheckedUpdateWithoutBillboardInput>
  }

  export type BillboardCreateNestedOneWithoutMediaInput = {
    create?: XOR<BillboardCreateWithoutMediaInput, BillboardUncheckedCreateWithoutMediaInput>
    connectOrCreate?: BillboardCreateOrConnectWithoutMediaInput
    connect?: BillboardWhereUniqueInput
  }

  export type EnumResourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ResourceType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BillboardUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<BillboardCreateWithoutMediaInput, BillboardUncheckedCreateWithoutMediaInput>
    connectOrCreate?: BillboardCreateOrConnectWithoutMediaInput
    upsert?: BillboardUpsertWithoutMediaInput
    connect?: BillboardWhereUniqueInput
    update?: XOR<XOR<BillboardUpdateToOneWithWhereWithoutMediaInput, BillboardUpdateWithoutMediaInput>, BillboardUncheckedUpdateWithoutMediaInput>
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

  export type NestedEnumResourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeFilter<$PrismaModel> | $Enums.ResourceType
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

  export type NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceTypeFilter<$PrismaModel>
    _max?: NestedEnumResourceTypeFilter<$PrismaModel>
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

  export type BillboardCreateWithoutStoreInput = {
    id?: string
    label: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: BillboardMediaCreateNestedOneWithoutBillboardInput
  }

  export type BillboardUncheckedCreateWithoutStoreInput = {
    id?: string
    label: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: BillboardMediaUncheckedCreateNestedOneWithoutBillboardInput
  }

  export type BillboardCreateOrConnectWithoutStoreInput = {
    where: BillboardWhereUniqueInput
    create: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput>
  }

  export type BillboardCreateManyStoreInputEnvelope = {
    data: BillboardCreateManyStoreInput | BillboardCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type BillboardUpsertWithWhereUniqueWithoutStoreInput = {
    where: BillboardWhereUniqueInput
    update: XOR<BillboardUpdateWithoutStoreInput, BillboardUncheckedUpdateWithoutStoreInput>
    create: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput>
  }

  export type BillboardUpdateWithWhereUniqueWithoutStoreInput = {
    where: BillboardWhereUniqueInput
    data: XOR<BillboardUpdateWithoutStoreInput, BillboardUncheckedUpdateWithoutStoreInput>
  }

  export type BillboardUpdateManyWithWhereWithoutStoreInput = {
    where: BillboardScalarWhereInput
    data: XOR<BillboardUpdateManyMutationInput, BillboardUncheckedUpdateManyWithoutStoreInput>
  }

  export type BillboardScalarWhereInput = {
    AND?: BillboardScalarWhereInput | BillboardScalarWhereInput[]
    OR?: BillboardScalarWhereInput[]
    NOT?: BillboardScalarWhereInput | BillboardScalarWhereInput[]
    id?: StringFilter<"Billboard"> | string
    storeId?: StringFilter<"Billboard"> | string
    label?: StringFilter<"Billboard"> | string
    description?: StringFilter<"Billboard"> | string
    createdAt?: DateTimeFilter<"Billboard"> | Date | string
    updatedAt?: DateTimeFilter<"Billboard"> | Date | string
  }

  export type BillboardMediaCreateWithoutBillboardInput = {
    id?: string
    public_id: string
    resource: $Enums.ResourceType
    secure_url: string
    width: number
    height: number
    playback_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardMediaUncheckedCreateWithoutBillboardInput = {
    id?: string
    public_id: string
    resource: $Enums.ResourceType
    secure_url: string
    width: number
    height: number
    playback_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardMediaCreateOrConnectWithoutBillboardInput = {
    where: BillboardMediaWhereUniqueInput
    create: XOR<BillboardMediaCreateWithoutBillboardInput, BillboardMediaUncheckedCreateWithoutBillboardInput>
  }

  export type StoreCreateWithoutBillboardsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreUncheckedCreateWithoutBillboardsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreCreateOrConnectWithoutBillboardsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
  }

  export type BillboardMediaUpsertWithoutBillboardInput = {
    update: XOR<BillboardMediaUpdateWithoutBillboardInput, BillboardMediaUncheckedUpdateWithoutBillboardInput>
    create: XOR<BillboardMediaCreateWithoutBillboardInput, BillboardMediaUncheckedCreateWithoutBillboardInput>
    where?: BillboardMediaWhereInput
  }

  export type BillboardMediaUpdateToOneWithWhereWithoutBillboardInput = {
    where?: BillboardMediaWhereInput
    data: XOR<BillboardMediaUpdateWithoutBillboardInput, BillboardMediaUncheckedUpdateWithoutBillboardInput>
  }

  export type BillboardMediaUpdateWithoutBillboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    secure_url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    playback_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardMediaUncheckedUpdateWithoutBillboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    secure_url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    playback_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUpsertWithoutBillboardsInput = {
    update: XOR<StoreUpdateWithoutBillboardsInput, StoreUncheckedUpdateWithoutBillboardsInput>
    create: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutBillboardsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutBillboardsInput, StoreUncheckedUpdateWithoutBillboardsInput>
  }

  export type StoreUpdateWithoutBillboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateWithoutBillboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardCreateWithoutMediaInput = {
    id?: string
    label: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Store: StoreCreateNestedOneWithoutBillboardsInput
  }

  export type BillboardUncheckedCreateWithoutMediaInput = {
    id?: string
    storeId: string
    label: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardCreateOrConnectWithoutMediaInput = {
    where: BillboardWhereUniqueInput
    create: XOR<BillboardCreateWithoutMediaInput, BillboardUncheckedCreateWithoutMediaInput>
  }

  export type BillboardUpsertWithoutMediaInput = {
    update: XOR<BillboardUpdateWithoutMediaInput, BillboardUncheckedUpdateWithoutMediaInput>
    create: XOR<BillboardCreateWithoutMediaInput, BillboardUncheckedCreateWithoutMediaInput>
    where?: BillboardWhereInput
  }

  export type BillboardUpdateToOneWithWhereWithoutMediaInput = {
    where?: BillboardWhereInput
    data: XOR<BillboardUpdateWithoutMediaInput, BillboardUncheckedUpdateWithoutMediaInput>
  }

  export type BillboardUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Store?: StoreUpdateOneRequiredWithoutBillboardsNestedInput
  }

  export type BillboardUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardCreateManyStoreInput = {
    id?: string
    label: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: BillboardMediaUpdateOneWithoutBillboardNestedInput
  }

  export type BillboardUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: BillboardMediaUncheckedUpdateOneWithoutBillboardNestedInput
  }

  export type BillboardUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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