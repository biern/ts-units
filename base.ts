import { Numbers } from './math';


export type Units = {
  [K: string]: Numbers;
};


export type UnitsMeta<U extends Units> = {
  __type: U;
  __units: { [K in keyof U]: [K, U[K]] }[keyof U];
}
