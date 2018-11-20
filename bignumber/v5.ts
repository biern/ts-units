import { BigNumber } from 'bignumber.js';

import { Units, UnitsMeta } from '../base';
import { Pure } from '../helpers';
import { Mul, Div } from '../operators';



export function scalarBN<U extends Units>(value: string | number | BigNumber) {
  return new BigNumber(value) as ScalarBN<U>;
}


export type ScalarBN<U extends Units> =
  UnitsMeta<U> & ScalarBNImpl<U>;


export type PureNumberLike = ScalarBN<Pure>;


export interface ScalarBNImpl<U extends Units> extends BigNumber {
  abs(): ScalarBN<U>;
  absoluteValue(): ScalarBN<U>;

  equals(other: ScalarBN<U>): boolean;
  eq(other: ScalarBN<U>): boolean;

  lessThan(other: ScalarBN<U>): boolean;
  lessThanOrEqualTo(other: ScalarBN<U>): boolean;
  lt(other: ScalarBN<U>): boolean;
  lte(other: ScalarBN<U>): boolean;

  greaterThan(other: ScalarBN<U>): boolean;
  greaterThanOrEqualTo(other: ScalarBN<U>): boolean;
  gt(other: ScalarBN<U>): boolean;
  gte(other: ScalarBN<U>): boolean;

  floor(): ScalarBN<U>;
  round(dp?: number, rm?: number): ScalarBN<U>;

  plus(other: ScalarBN<U>): ScalarBN<U>;
  add(other: ScalarBN<U>): ScalarBN<U>;

  minus(other: ScalarBN<U>): ScalarBN<U>;
  sub(other: ScalarBN<U>): ScalarBN<U>;

  div<O extends Units>(other: ScalarBN<O>): ScalarBN<Div<U, O>>;
  dividedBy<O extends Units>(other: ScalarBN<O>): ScalarBN<Div<U, O>>;
  dividedToIntegerBy<O extends Units>(n: ScalarBN<O>, base?: number): ScalarBN<Div<U, O>>;
  divToInt<O extends Units>(n: ScalarBN<O>, base?: number): ScalarBN<Div<U, O>>;

  mul<O extends Units>(other: ScalarBN<O>): ScalarBN<Mul<U, O>>;
  times<O extends Units>(other: ScalarBN<O>): ScalarBN<Mul<U, O>>;

  modulo(n: PureNumberLike, base?: number): ScalarBN<U>;
  mod(n: PureNumberLike, base?: number): ScalarBN<U>;

  negated(): ScalarBN<U>;
  neg(): ScalarBN<U>;

  round(dp?: number, rm?: number): ScalarBN<U>;

  shift(n: number): ScalarBN<U>;

  toDigits(sd?: number, rm?: number): ScalarBN<U>;

  truncated(): ScalarBN<U>;
  trunc(): ScalarBN<U>;
}
