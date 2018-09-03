# ts-units

Typing library that provides a basic type-level units arithmetics and validation.

Never [mistake metres with miles][1] and be sure of your currency conversions.

[1]: https://en.wikipedia.org/wiki/Mars_Climate_Orbiter#Cause_of_failure

## Example

``` typescript
import { Units, Unit, UnitsMeta, Mul, Div, Inverse, Pow } from 'ts-units';


// Custom typed number declaration

export type TypedNumber<U extends Units> =
  UnitsMeta<U> & {
    plus(other: TypedNumber<U>): TypedNumber<U>;
    mul<O extends Units>(other: TypedNumber<O>): TypedNumber<Mul<U, O>>;
    div<O extends Units>(other: TypedNumber<O>): TypedNumber<Div<U, O>>;
  }


type Speed = Unit<'Metre'> & Inverse<'Second'>;
type Acceleration = Unit<'Metre'> & Pow<'Second', -2>;
type Force = Unit<'Kg'> & Acceleration;


// Let's pretened those are real values.
const force = {} as TypedNumber<Force>;
const gravity = {} as TypedNumber<Acceleration>;


// Units match
const mass: TypedNumber<Unit<'Kg'>> = force.div(gravity);

// Throws type error
const mass: TypedNumber<Unit<'Kg'>> = force.mul(gravity);
```
