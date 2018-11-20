import { Units } from './base';
import { Add, Numbers, Negate, MulN } from './math';


export type Pow<U extends Units, N extends Numbers> =
  { [P in keyof U]: MulN<U[P], N> }


export type Inverse<U extends string | Units> =
  U extends string ? { [P in U]: -1 }
  : U extends Units ? InvertO<U>
  : {};


export type Mul<A extends Units, B extends Units> =
  { [P in MulKeys<A, B>]:
    P extends keyof B ?
    (P extends keyof A ? Add<A[P], B[P]> : B[P])
    : P extends keyof A ? A[P]
    : 'out-of-bounds'
  }


export type Div<A extends Units, B extends Units> =
  Mul<A, InvertO<B>>;


export type InvertO<O extends object> =
  { [P in keyof O]: Negate<O[P]> }


type MulKeys<A extends object, B extends object> =
  Exclude<keyof A | keyof B, ReducedKeys<A, B>>;


type ReducedKeys<A extends object, B extends object> = {
  [P in keyof B]: (
    P extends keyof A ? (
      Add<A[P], B[P]> extends ReducedV ? P : never
    ) : never)
}[keyof B];


type ReducedV = 0;
