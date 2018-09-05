import { Units } from './base';
import { InvertO } from './operators';

/**
 * `Pure` value is a value without any unit
 */
export type Pure = {};

export type Unit<U extends string> = { [P in U]: 1 };
