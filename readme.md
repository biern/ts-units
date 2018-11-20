# ts-units

Typing library that provides a basic type-level units arithmetics and validation.

Never [mistake metres with miles][1] and be sure of your currency conversions.

Provides bindings and helpers for usage with [BigNumber.js][2] (currently only v5). 
Can be integrated with other libraries as well.

[1]: https://en.wikipedia.org/wiki/Mars_Climate_Orbiter#Cause_of_failure
[2]: https://github.com/MikeMcl/bignumber.js/

## Example

``` typescript
import { Pow, Div, Inverse, Mul, Unit } from 'ts-units';
import { ScalarBN, scalarBN } from 'ts-units/bignumber';


// Physics

type Metre = Unit<'Metre'>;
type Second = Unit<'Second'>;
type Kg = Unit<'Kg'>;


type Speed = Metre & Inverse<Second>;
type Acceleration = Metre & Pow<Second, -2>;
type Force = Mul<Kg, Acceleration>;


const force = scalarBN<Force>(100);
const gravity = scalarBN<Acceleration>(9.8);

// Oops, invalid operation. Should divide to get the mass
const mass: ScalarBN<Kg> = force.mul(gravity);
// Type error:
// Type '["Kg", 1] | ["Metre", 2] | ["Second", -4]' is not assignable to type '["Kg", 1]'.

// Ok
const mass: ScalarBN<Kg> = force.div(gravity);

// To avoid errors values with different units cannot be compared or added:
force.add(gravity) // ???
force.gt(gravity)
// Type error:
// Type 'Acceleration' is not assignable to type 'Mul<Unit<"Kg">, Acceleration>'.
// Property 'Kg' is missing in type 'Acceleration'. [2345]


// Finance

type USD = Unit<'USD'>;
type ETH = Unit<'ETH'>;
type BTC = Unit<'BTC'>;


function getETHpriceInUSD(): ScalarBN<Div<USD, ETH>> {
  return scalarBN(200);
}


function getBTCpriceInUSD(): ScalarBN<Div<USD, BTC>> {
  return scalarBN(5000);
}


function logPriceBTCinETH(price: ScalarBN<Div<ETH, BTC>>){
  console.log('Price of BTC in ETH through USD:', price.toString());
}


// Ooops, what actually should be divided by what?
logPriceBTCinETH(getETHpriceInUSD().div(getBTCpriceInUSD()));
// Type error:
// Types of property 'ETH' are incompatible.
// Type '-1' is not assignable to type '1'. [2345]

// Ok!
logPriceBTCinETH(getBTCpriceInUSD().div(getETHpriceInUSD()));
```

### Notes:

`&` can combine only types with no overlapping units. Use `Mul<A, B>` to perform generic unit multiplication.
