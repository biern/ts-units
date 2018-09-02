import { Add, Negate, Numbers } from "./math";


export type UnitsDefinition = {
  [K: string]: Numbers;
};


export type Units<U extends UnitsDefinition> =
  {  __type: U, __units: keyof U };


export type Unit<N extends string> = { [P in N]: 1 };
export type Invert<N extends string> = { [P in N]: -1 };


export type Mul<A extends UnitsDefinition, B extends UnitsDefinition> =
  { [P in MulKeys<A, B>]:
    P extends keyof B ?
    (P extends keyof A ? Add<A[P], B[P]> : B[P])
    : P extends keyof A ? A[P]
    : 'out-of-bounds'
  }


export type Div<A extends UnitsDefinition, B extends UnitsDefinition> =
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
