import { Units, UnitsDefinition, Mul, Div, Unit, Invert } from '.';


export type TypedNumber<U extends UnitsDefinition> =
  Units<U> & {
    plus(other: TypedNumber<U>): TypedNumber<U>;
    mul<O extends UnitsDefinition>(other: TypedNumber<O>): TypedNumber<Mul<U, O>>;
    div<O extends UnitsDefinition>(other: TypedNumber<O>): TypedNumber<Div<U, O>>;
  }


export type Scalar<K extends string> = TypedNumber<{
  [P in K]: 1;
}>;


function check<T>(value: T) {}
function type<T>(): T { return (undefined as any) as T; }


const a = {} as Scalar<'A'>;
const b = {} as Scalar<'B'>;
const c = {} as Scalar<'C'>;
const d = {} as Scalar<'D'>;


check<unknown>(a.plus(a.mul(b)));
check<unknown>(a.plus(b));
check<unknown>(a.plus(a.mul(a)));
check<Scalar<'A'>>(a.plus(a));
check<Scalar<'A'>>(a.mul(b).div(b));

check<TypedNumber<{ A: 1, B: 1 }>>(a.mul(b));

check<Scalar<'D'>>(
  ((a.mul(b)).mul(c.mul(d))).div(b.mul(c).mul(a))
);


check<TypedNumber<{ A: 1, D: 1 }>>(
  ((a.mul(b)).mul(c.mul(d))).div(b.mul(c))
);

const foo: Scalar<'D'> = (
  (a.mul(b)).mul(c.mul(d)))
  .div(b.mul(c).mul(a));


type Speed = TypedNumber<Unit<'Distance'> & Invert<'Time'>>;

const time = {} as TypedNumber<Unit<'Time'>>;
const dist = {} as TypedNumber<Unit<'Distance'>>;

const v: Speed = time.div(dist);
