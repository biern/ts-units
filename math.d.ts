export type Numbers =
  -7 | -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 'out-of-bounds';

export type Negate<A> =
  A extends -7 ? 7
  :  A extends -6 ? 6
  :  A extends -5 ? 5
  :  A extends -4 ? 4
  :  A extends -3 ? 3
  :  A extends -2 ? 2
  :  A extends -1 ? 1
  :  A extends 0 ? 0
  :  A extends 1 ? -1
  :  A extends 2 ? -2
  :  A extends 3 ? -3
  :  A extends 4 ? -4
  :  A extends 5 ? -5
  :  A extends 6 ? -6
  :  A extends 7 ? -7
  : 'out-of-bounds' ;

export type Add<A, B> =
  A extends -7 ? (
    B extends 0 ? -7
    : B extends 1 ? -6
    : B extends 2 ? -5
    : B extends 3 ? -4
    : B extends 4 ? -3
    : B extends 5 ? -2
    : B extends 6 ? -1
    : B extends 7 ? 0
    : 'out-of-bounds'
  )
  : A extends -6 ? (
    B extends -1 ? -7
    : B extends 0 ? -6
    : B extends 1 ? -5
    : B extends 2 ? -4
    : B extends 3 ? -3
    : B extends 4 ? -2
    : B extends 5 ? -1
    : B extends 6 ? 0
    : B extends 7 ? 1
    : 'out-of-bounds'
  )
  : A extends -5 ? (
    B extends -2 ? -7
    : B extends -1 ? -6
    : B extends 0 ? -5
    : B extends 1 ? -4
    : B extends 2 ? -3
    : B extends 3 ? -2
    : B extends 4 ? -1
    : B extends 5 ? 0
    : B extends 6 ? 1
    : B extends 7 ? 2
    : 'out-of-bounds'
  )
  : A extends -4 ? (
    B extends -3 ? -7
    : B extends -2 ? -6
    : B extends -1 ? -5
    : B extends 0 ? -4
    : B extends 1 ? -3
    : B extends 2 ? -2
    : B extends 3 ? -1
    : B extends 4 ? 0
    : B extends 5 ? 1
    : B extends 6 ? 2
    : B extends 7 ? 3
    : 'out-of-bounds'
  )
  : A extends -3 ? (
    B extends -4 ? -7
    : B extends -3 ? -6
    : B extends -2 ? -5
    : B extends -1 ? -4
    : B extends 0 ? -3
    : B extends 1 ? -2
    : B extends 2 ? -1
    : B extends 3 ? 0
    : B extends 4 ? 1
    : B extends 5 ? 2
    : B extends 6 ? 3
    : B extends 7 ? 4
    : 'out-of-bounds'
  )
  : A extends -2 ? (
    B extends -5 ? -7
    : B extends -4 ? -6
    : B extends -3 ? -5
    : B extends -2 ? -4
    : B extends -1 ? -3
    : B extends 0 ? -2
    : B extends 1 ? -1
    : B extends 2 ? 0
    : B extends 3 ? 1
    : B extends 4 ? 2
    : B extends 5 ? 3
    : B extends 6 ? 4
    : B extends 7 ? 5
    : 'out-of-bounds'
  )
  : A extends -1 ? (
    B extends -6 ? -7
    : B extends -5 ? -6
    : B extends -4 ? -5
    : B extends -3 ? -4
    : B extends -2 ? -3
    : B extends -1 ? -2
    : B extends 0 ? -1
    : B extends 1 ? 0
    : B extends 2 ? 1
    : B extends 3 ? 2
    : B extends 4 ? 3
    : B extends 5 ? 4
    : B extends 6 ? 5
    : B extends 7 ? 6
    : 'out-of-bounds'
  )
  : A extends 0 ? (
    B extends -7 ? -7
    : B extends -6 ? -6
    : B extends -5 ? -5
    : B extends -4 ? -4
    : B extends -3 ? -3
    : B extends -2 ? -2
    : B extends -1 ? -1
    : B extends 0 ? 0
    : B extends 1 ? 1
    : B extends 2 ? 2
    : B extends 3 ? 3
    : B extends 4 ? 4
    : B extends 5 ? 5
    : B extends 6 ? 6
    : B extends 7 ? 7
    : 'out-of-bounds'
  )
  : A extends 1 ? (
    B extends -7 ? -6
    : B extends -6 ? -5
    : B extends -5 ? -4
    : B extends -4 ? -3
    : B extends -3 ? -2
    : B extends -2 ? -1
    : B extends -1 ? 0
    : B extends 0 ? 1
    : B extends 1 ? 2
    : B extends 2 ? 3
    : B extends 3 ? 4
    : B extends 4 ? 5
    : B extends 5 ? 6
    : B extends 6 ? 7
    : 'out-of-bounds'
  )
  : A extends 2 ? (
    B extends -7 ? -5
    : B extends -6 ? -4
    : B extends -5 ? -3
    : B extends -4 ? -2
    : B extends -3 ? -1
    : B extends -2 ? 0
    : B extends -1 ? 1
    : B extends 0 ? 2
    : B extends 1 ? 3
    : B extends 2 ? 4
    : B extends 3 ? 5
    : B extends 4 ? 6
    : B extends 5 ? 7
    : 'out-of-bounds'
  )
  : A extends 3 ? (
    B extends -7 ? -4
    : B extends -6 ? -3
    : B extends -5 ? -2
    : B extends -4 ? -1
    : B extends -3 ? 0
    : B extends -2 ? 1
    : B extends -1 ? 2
    : B extends 0 ? 3
    : B extends 1 ? 4
    : B extends 2 ? 5
    : B extends 3 ? 6
    : B extends 4 ? 7
    : 'out-of-bounds'
  )
  : A extends 4 ? (
    B extends -7 ? -3
    : B extends -6 ? -2
    : B extends -5 ? -1
    : B extends -4 ? 0
    : B extends -3 ? 1
    : B extends -2 ? 2
    : B extends -1 ? 3
    : B extends 0 ? 4
    : B extends 1 ? 5
    : B extends 2 ? 6
    : B extends 3 ? 7
    : 'out-of-bounds'
  )
  : A extends 5 ? (
    B extends -7 ? -2
    : B extends -6 ? -1
    : B extends -5 ? 0
    : B extends -4 ? 1
    : B extends -3 ? 2
    : B extends -2 ? 3
    : B extends -1 ? 4
    : B extends 0 ? 5
    : B extends 1 ? 6
    : B extends 2 ? 7
    : 'out-of-bounds'
  )
  : A extends 6 ? (
    B extends -7 ? -1
    : B extends -6 ? 0
    : B extends -5 ? 1
    : B extends -4 ? 2
    : B extends -3 ? 3
    : B extends -2 ? 4
    : B extends -1 ? 5
    : B extends 0 ? 6
    : B extends 1 ? 7
    : 'out-of-bounds'
  )
  : A extends 7 ? (
    B extends -7 ? 0
    : B extends -6 ? 1
    : B extends -5 ? 2
    : B extends -4 ? 3
    : B extends -3 ? 4
    : B extends -2 ? 5
    : B extends -1 ? 6
    : B extends 0 ? 7
    : 'out-of-bounds'
  )
  : 'out-of-bounds';

export type Sub<A, B> = Add<A, Negate<B>>;


