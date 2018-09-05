import { Numbers } from './math';


export type Units = {
  [K: string]: Numbers;
};


export type UnitsMeta<U extends Units> = {
  __type: U;
  __units: keyof U;
}
