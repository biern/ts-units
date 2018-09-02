import { Add, Negate, Numbers } from "./math";


export type Units = {
  [K: string]: Numbers;
};


export type UnitsMeta<U extends Units> =
  {  __type: U, __units: keyof U };


export type Unit<U extends string> = { [P in U]: 1 };
export type Pow<U extends string, N extends Numbers> = { [P in U]: N };
export type Invert<U extends string> = { [P in U]: -1 };


export type Mul<A extends Units, B extends Units> =
  { [P in MulKeys<A, B>]:
    P extends keyof B ?
    (P extends keyof A ? Add<A[P], B[P]> : B[P])
    : P extends keyof A ? A[P]
    : 'out-of-bounds'
  }


export type Div<A extends Units, B extends Units> =
  Mul<A, InvertO<B>>;


type MulKeys<A extends object, B extends object> =
  Exclude<keyof A | keyof B, ReducedKeys<A, B>>;


type ReducedKeys<A extends object, B extends object> = {
  [P in keyof B]: (
    P extends keyof A ? (
      Add<A[P], B[P]> extends ReducedV ? P : never
    ) : never)
}[keyof B];


type ReducedV = 0;

type InvertO<O extends object> =
  { [P in keyof O]: Negate<O[P]> }
